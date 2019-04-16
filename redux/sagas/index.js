import {all} from 'redux-saga/effects';

import {watchGetRestaurantsList} from './restaurants';
import {watchCheckAuth, watchUserLoginStart, watchUserLogoutStart} from "./users";

export default function* rootSaga() {
    yield all([
        watchCheckAuth(),
        watchUserLoginStart(),
        watchUserLogoutStart(),
        watchGetRestaurantsList()
    ]);
}