import {
    CHECK_AUTH_END,
    CHECK_AUTH_START,
    CLEAR_ERRORS,
    USER_AUTH_UPDATED,
    USER_LOGIN_END,
    USER_LOGIN_FAIL,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS
} from '../actionTypes';

const initialState = {
    AuthInProgress: false,
    IsLoggedIn: false,
    Profile:{},
    Auth: {access_token: null},
    Error: {error_description: null}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CHECK_AUTH_END:
        case USER_LOGIN_END:
            return {
                ...state,
                AuthInProgress: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                Error: {error_description: null},
            };
        case CHECK_AUTH_START:
        case USER_LOGIN_START:
            return {
                ...state,
                AuthInProgress: true,
            };
        case USER_AUTH_UPDATED:
            return {
                ...state,
                Auth: action.payload,
            };
        case USER_LOGIN_FAIL:
            return {
                ...state,
                AuthInProgress: false,
                Error: action.payload,
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                IsLoggedIn: true,
                Profile: action.payload
            };
        default:
            return state;
    }
}