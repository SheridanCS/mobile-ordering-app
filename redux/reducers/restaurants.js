import {RESTAURANTS_LIST_UPDATED} from '../actionTypes';

const initialState = {
    Restaurants: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RESTAURANTS_LIST_UPDATED:
            return {
                ...state,
                Restaurants: action.payload,
            };
        default:
            return state;
    }
}