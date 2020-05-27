import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const initFormDataStart = () => {
    return {
        type: actionTypes.INIT_FORM_DATA_START
    };
};

export const initFormDataSuccess = (formData) => {
    console.log(formData)
    return {
        type: actionTypes.INIT_FORM_DATA_SUCCESS,
        countries: formData.countries,
        personalBackgrounds: formData.personal_backgrounds,
        familyBackgrounds: formData.family_backgrounds,
        allergies: formData.allergies,
        vaccines: formData.vaccines,
        medicines: formData.medicines
    };
};

export const initFormDataFail = (error) => {
    return {
        type: actionTypes.INIT_FORM_DATA_FAIL,
        error: error
    };
};

export const fetchStatesSuccess = (formData) => {
    return {
        type: actionTypes.FETCH_STATES_SUCCESS,
        states: formData,
    };
};

export const fetchMunicipalitiesSuccess = (formData) => {
    return {
        type: actionTypes.FETCH_MUNICIPALITIES_SUCCESS,
        municipalities: formData,
    };
};

export const initFormData = () => {
    return dispatch => {
        dispatch(initFormDataStart())
        axios.get('form_data')
            .then(response => {
                dispatch(initFormDataSuccess(response.data.data))
            })
            .catch(err => {
                console.log(err)
                // dispatch(initFormDataFail(err.response.data.errors))
            })
    }
}

export const fetchStates = (country_id) => {
    return dispatch => {
        dispatch(initFormDataStart())
        axios.get('states/' + country_id)
            .then(response => {
                dispatch(fetchStatesSuccess(response.data.data))
            })
            .catch(err => {
                console.log(err)
                // dispatch(initFormDataFail(err.response.data.errors))
            })
    }
}

export const fetchMunicipalities = (state_id) => {
    return dispatch => {
        dispatch(initFormDataStart())
        axios.get('municipalities/' + state_id)
            .then(response => {
                dispatch(fetchMunicipalitiesSuccess(response.data.data))
            })
            .catch(err => {
                console.log(err)
                // dispatch(initFormDataFail(err.response.data.errors))
            })
    }
}