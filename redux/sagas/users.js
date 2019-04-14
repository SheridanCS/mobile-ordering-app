import {call, put, select, takeLatest} from 'redux-saga/effects';
import {
    CHECK_AUTH_END,
    CHECK_AUTH_START,
    USER_AUTH_UPDATED,
    USER_LOGIN_FAIL,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS
} from '../actionTypes';
import {getAuthState} from '../selectors'
import * as Auth from '../../services/AuthService';
import * as Storage from '../../services/StorageService';
import * as User from '../../services/UserService';

export function* watchCheckAuth() {
    yield takeLatest(CHECK_AUTH_START, checkStorageForAuth)
}

export function* watchUserLoginStart() {
    yield takeLatest(USER_LOGIN_START, doLogin);
}

function* checkStorageForAuth() {
    const auth = yield call(Storage.readUserData);
    if (auth !== null && auth.access_token) {
        const refresh = yield call(Auth.refreshToken, auth);
        yield call(Storage.writeUserData, refresh);
        yield put({ type: USER_AUTH_UPDATED, payload: refresh });
        yield call(getUserDetails);
    }
    yield put({ type: CHECK_AUTH_END })
}

function* doLogin(action) {
    const response = yield call(Auth.login, action.payload);
    if (response.access_token) {
        yield call(Storage.writeUserData, response);
        yield put({ type: USER_AUTH_UPDATED, payload: response });
        yield call(getUserDetails);
    } else {
        yield put({ type: USER_LOGIN_FAIL, payload: response });
    }
}

function* getUserDetails() {
    let auth = yield select(getAuthState);
    const userProfile = yield call(User.me, auth.access_token);
    yield put({ type: USER_LOGIN_SUCCESS, payload: userProfile });
}
