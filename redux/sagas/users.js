import {call, put, select, take, takeLatest} from 'redux-saga/effects';
import {USER_AUTH_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_START, USER_LOGIN_SUCCESS} from '../actionTypes';
import {getUserState} from '../selectors'
import * as Auth from '../../services/AuthService';
import * as User from '../../services/UserService';

export function* watchUserLoginStart() {
    yield takeLatest(USER_LOGIN_START, doLogin);
}

function* doLogin(action) {
    const response = yield call(Auth.login, action.payload);
    if (response.access_token) {
        yield put({ type: USER_AUTH_SUCCESS, payload: response });
        yield call(getUserDetails);
    } else {
        yield put({ type: USER_LOGIN_FAIL, error });
    }
}

function* getUserDetails() {
    let userDetails = yield select(getUserState);
    const userProfile = yield call(User.me, userDetails.Auth.access_token);
    yield put({ type: USER_LOGIN_SUCCESS, payload: userProfile });
}