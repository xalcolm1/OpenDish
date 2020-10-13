import * as sessionApiUtil from '../util/session_api_util';

export const RECIEVE_CURRENT_USER = 'RECIEVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECIEVE_SESSION_ERRORS = 'RECIEVE_SESSION_ERRORS';

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

const recieveErrors = errors => {
    return {
        type: RECIEVE_SESSION_ERRORS,
        errors
    }
}

export const login = user => dispatch => {
    return sessionApiUtil.login(user)
    .then(user => dispatch(recieveCurrentUser(user)))
}

export const logout = () => dispatch => {
    return sessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))

}

export const signup = user => dispatch => {
    return sessionApiUtil.signup
    .then(user => dispatch(recieveCurrentUser(user)))
}