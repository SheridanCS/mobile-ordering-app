import {USER_LOGGED_IN} from '../actionTypes';

const initialState = {
    IsLoggedIn: false,
    Profile:{},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                IsLoggedIn: true,
                Profile: action.payload
            };
        default:
            return state;
    }
}