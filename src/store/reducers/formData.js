import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    countries: [],
    states: [],
    municipalities: [],
    backgrounds: [],
    vaccines: [],
    medicines: [],
    error: false,
    loading: false
};

const initFormDataStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const initFormDataFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const initFormDataSuccess = (state, action) => {
    return updateObject(state, { 
        countries: action.countries,
        backgrounds: action.backgrounds,
        vaccines: action.vaccines,
        medicines: action.medicines
     })
}

const fetchStates = (state, action) => {
    return updateObject(state, { 
        states: action.states,
        municipalities: []
     })
}

const fetchMunicipalities = (state, action) => {
    return updateObject(state, { 
        municipalities: action.municipalities
     })
}

const reducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INIT_FORM_DATA_START: return initFormDataStart(state, action);
        case actionTypes.INIT_FORM_DATA_SUCCESS: return initFormDataSuccess(state, action);
        case actionTypes.INIT_FORM_DATA_FAIL: return initFormDataFail(state, action);
        case actionTypes.FETCH_STATES_SUCCESS: return fetchStates(state, action);
        case actionTypes.FETCH_MUNICIPALITIES_SUCCESS: return fetchMunicipalities(state, action);
        default:
            return state;
    }
}

export default reducer