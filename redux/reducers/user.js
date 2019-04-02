import {USER_AUTH_SUCCESS, USER_LOGIN_SUCCESS} from '../actionTypes';

const initialState = {
    IsLoggedIn: false,
    Profile:{},
    Auth: {
        access_token: null,
        token_type: null,
        refresh_token: null,
        expires_in: null,
        scope: null,
        jti: null,
    },
};

export default function(state = initialState, action) {
    switch (action.type) {
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                Auth: action.payload,
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