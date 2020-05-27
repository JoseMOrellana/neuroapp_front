import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    clinicalStories: [],
    loading: false,
    saved: false,
    errors: null
};

const saveClinicalStoryStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const saveClinicalStorySuccess = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        saved: true,
    } );
};

const saveClinicalStoryFail = ( state, action ) => {
    return updateObject( state, { loading: false, errors: action.error } );
};

const fetchClinicalStoriesStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchClinicalStoriesSuccess = ( state, action ) => {
    return updateObject( state, {
        clinicalStories: action.clinicalStories,
        loading: false
    } );
};

const fetchClinicalStoriesFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SAVE_CLINICAL_STORY_START: return saveClinicalStoryStart( state, action );
        case actionTypes.SAVE_CLINICAL_STORY_SUCCESS: return saveClinicalStorySuccess( state, action )
        case actionTypes.SAVE_CLINICAL_STORY_FAIL: return saveClinicalStoryFail( state, action );
        case actionTypes.FETCH_CLINICAL_STORIES_START: return fetchClinicalStoriesStart( state, action );
        case actionTypes.FETCH_CLINICAL_STORIES_SUCCESS: return fetchClinicalStoriesSuccess( state, action );
        case actionTypes.FETCH_CLINICAL_STORIES_FAIL: return fetchClinicalStoriesFail( state, action );
        default: return state;
    }
};

export default reducer;