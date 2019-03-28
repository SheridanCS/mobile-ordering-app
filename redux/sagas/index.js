import {all} from 'redux-saga/effects';

import {watchGetRestaurantsList} from './restaurants';

export default function* rootSaga() {
    yield all([
        watchGetRestaurantsList()
    ]);
}