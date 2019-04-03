import {all} from 'redux-saga/effects';

import {watchGetRestaurantsList} from './restaurants';
import {watchAppLoaded, watchUserLoginStart} from "./users";

export default function* rootSaga() {
    yield all([
        watchAppLoaded(),
        watchUserLoginStart(),
        watchGetRestaurantsList()
    ]);
}