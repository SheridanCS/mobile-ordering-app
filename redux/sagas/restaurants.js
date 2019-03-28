import {call, put, takeLatest} from 'redux-saga/effects';

import {GET_RESTAURANTS_LIST, RESTAURANTS_LIST_UPDATED} from '../actionTypes';
import {getRestaurantsList as apiGetRestaurantsList} from '../../services/RestaurantsService';

export function* watchGetRestaurantsList() {
    yield takeLatest(GET_RESTAURANTS_LIST, getRestaurantsList);
}

function* getRestaurantsList(action) {
    try {
        let restaurants = yield call(apiGetRestaurantsList);
        yield put({
            type: RESTAURANTS_LIST_UPDATED,
            payload: restaurants._embedded.restaurants,
        })
    } catch (error) {
        console.log(error);
    }
}

