import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const saveClinicalStorySuccess = () => {
    return {
        type: actionTypes.SAVE_CLINICAL_STORY_SUCCESS,
    };
};

export const saveClinicalStoryFail = ( error ) => {
    return {
        type: actionTypes.SAVE_CLINICAL_STORY_FAIL,
        error: error
    };
}

export const saveClinicalStoryStart = () => {
    return {
        type: actionTypes.SAVE_CLINICAL_STORY_START
    };
};

export const saveClinicalStory = ( clinicalStoryData, token ) => {
    return async (dispatch) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }
            dispatch( saveClinicalStoryStart() );
            const directionData = {
                country_id: clinicalStoryData.country,
                state_id: clinicalStoryData.state,
                municipality_id: clinicalStoryData.municipality,
                description: clinicalStoryData.direction
            }
            let response = await axios.post('directions', directionData, config )
            console.log("direction working")
            const iso_date = clinicalStoryData.birth_date.toISOString().slice(0, 10)
            const pacientData = {
                first_name: clinicalStoryData.first_name,
                second_name: clinicalStoryData.second_name,
                last_name: clinicalStoryData.last_name,
                second_last_name: clinicalStoryData.second_last_name,
                document: clinicalStoryData.documentType + clinicalStoryData.document,
                gender: clinicalStoryData.gender,
                birth_date: iso_date,
                marital_status: clinicalStoryData.marital_status,
                blood_type: clinicalStoryData.blood_type,
                telephone_1: clinicalStoryData.telephone,
                telephone_2: clinicalStoryData.telephone2,
                current_direction: response.data.data.id
            }
            response = await axios.post('pacients', pacientData, config)
            console.log("pacient working")
            const pacientRelatedData = {
                pacient_id: response.data.data.id,
                personal_background: clinicalStoryData.personal_background,
                family_background: clinicalStoryData.family_background,
                allergy: clinicalStoryData.allergy,
                vaccine: clinicalStoryData.vaccine
            }
            response = await axios.post('pacients/related_data', pacientRelatedData, config)
            console.log("pacient data working")
            const clinicalStory = {
                pacient_id: response.data.data.pacient_id,
                description: clinicalStoryData.description,
                fisical_exam: clinicalStoryData.fisical_exam,
                observations: clinicalStoryData.observations,
                cognitions: clinicalStoryData.cognitions,
                surgeries: clinicalStoryData.surgeries
            }
    
            response = await axios.post('clinical_stories', clinicalStory, config)
            console.log("clin story working")
            const clinicalStoryRelatedData = {
                medicine_id: clinicalStoryData.medicine,
                clinical_story_id: response.data.data.id
            }
    
            response = await axios.post('clinical_stories/related_data', clinicalStoryRelatedData, config)
            console.log("clin story data working")
            dispatch( saveClinicalStorySuccess() );
        } catch (error) {
            console.log(error.response)
                dispatch( saveClinicalStoryFail( error.response.data.errors ) );
        }
        
    };
};

export const fetchClinicalStoriesSuccess = ( clinicalStories ) => {
    return {
        type: actionTypes.FETCH_CLINICAL_STORIES_SUCCESS,
        clinicalStories: clinicalStories
    };
};

export const fetchClinicalStoriesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_CLINICAL_STORIES_FAIL,
        error: error
    };
};

export const fetchClinicalStoriesStart = () => {
    return {
        type: actionTypes.FETCH_CLINICAL_STORIES_START
    };
};

export const fetchClinicalStories = (token, userId) => {
    return dispatch => {
        dispatch(fetchClinicalStoriesStart());
        axios.get( '/clinical_stories')
            .then( res => {
                const fetchedClinicalStories = [];
                for ( let key in res.data ) {
                    fetchedClinicalStories.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchClinicalStoriesSuccess(fetchedClinicalStories));
            } )
            .catch( err => {
                dispatch(fetchClinicalStoriesFail(err));
            } );
    };
};