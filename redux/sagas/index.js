import {all} from 'redux-saga/effects';

import {watchGetRestaurantsList} from './restaurants';
import {watchUserLoginStart} from "./users";

export default function* rootSaga() {
    yield all([
        watchUserLoginStart(),
        watchGetRestaurantsList()
    ]);
}