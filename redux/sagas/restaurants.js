import {call, put, select, takeLatest} from 'redux-saga/effects';

import {GET_RESTAURANTS_LIST, RESTAURANTS_LIST_UPDATED} from '../actionTypes';
import * as Restaurants from '../../services/RestaurantsService';
import {getAuthState} from "../selectors";

export function* watchGetRestaurantsList() {
    yield takeLatest(GET_RESTAURANTS_LIST, getRestaurantsList);
}

function* getRestaurantsList() {
    const auth = yield select(getAuthState);
    let restaurants = yield call(Restaurants.getRestaurantsList, auth.access_token);
    if (restaurants !== undefined && restaurants._embedded) {
        yield put({
            type: RESTAURANTS_LIST_UPDATED,
            payload: restaurants._embedded.restaurantList
        });
    }
}