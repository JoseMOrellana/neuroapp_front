import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START
    };
};

export const registerSuccess = (token, userId) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const registerFail = (errors) => {
    return {
        type: actionTypes.REGISTER_FAIL,
        errors: errors
    };
};

export const register = (user) => {
    return dispatch => {
        dispatch(registerStart());
        const newUser = {
            ...user,
            role: 'doctor'
        }
        axios.post('register', newUser)
            .then(response => {
                dispatch(registerSuccess(response.data.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(registerFail(err.response.data.errors))
            })
    }
}
  