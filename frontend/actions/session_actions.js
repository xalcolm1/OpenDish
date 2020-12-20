import * as sessionApiUtil from '../util/session_api_util';

export const RECIEVE_CURRENT_USER = 'RECIEVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECIEVE_SESSION_ERRORS = 'RECIEVE_SESSION_ERRORS';
export const RECIEVE_USER = 'GET_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


const recieveCurrentUser = user => {
    return {
        type: RECIEVE_CURRENT_USER,
        user
    }
} 

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}


const recieveSessionErrors = errors => {
    return {
        type: RECIEVE_SESSION_ERRORS,
        errors
    }
}

const recieveUser = user => {
    return {
        type: RECIEVE_USER,
        user
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    }
}

export const login = user => dispatch => {
    return sessionApiUtil.login(user)
        .then(user => dispatch(recieveCurrentUser(user)))
        .fail(err => dispatch(recieveSessionErrors(err.responseJSON)))
}

export const logout = () => dispatch => {
    return sessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))

}

export const signup = user => dispatch => {
    return sessionApiUtil.signup(user)
        .then(user => dispatch(recieveCurrentUser(user)))
        .fail(err => {
        dispatch(recieveSessionErrors(err.responseJSON))
    })
}

export const getUser = id => dispatch => {
    return sessionApiUtil.getUser(id)
        .then(user => dispatch(recieveUser(user)))
    
}