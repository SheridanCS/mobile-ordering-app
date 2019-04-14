import {all} from 'redux-saga/effects';

import {watchGetRestaurantsList} from './restaurants';
import {watchCheckAuth, watchUserLoginStart} from "./users";

export default function* rootSaga() {
    yield all([
        watchCheckAuth(),
        watchUserLoginStart(),
        watchGetRestaurantsList()
    ]);
}