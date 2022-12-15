import axios from '../../utils/axios';
import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { LOGIN, FORGOT_PASSWORD, RESET_PASSWORD, SIGN_UP } from './constants';
import { loginSuccess, signupSuccess, setLoader } from './actions';
import { sagaErrorHandler } from '../../shared/helperMethods/sagaErrorHandler';
import { setNotification } from '../../shared/helperMethods/setNotification';

function* loginUser({ payload }) {
    try {
        let data = {
            email: payload.email,
            password: payload.password
        };
        const response = yield axios.post(`/auth/login`, data);
        yield put(setLoader(false));
        yield setNotification('success', response.data.message);
        yield put(loginSuccess(response.data.data));
        console.log("login user redux", response.data.data.user.role)
        if(response.data.data.user.role == "User"){
            payload.navigate('/');
        }
        else{
            payload.navigate('/dashboard');
        }
    } catch (error) {
        yield put(setLoader(false));
        yield sagaErrorHandler(error.response.data.data);
    }
}

function* signupUserRequest({ payload }) {
    try {
        let data = {
            name: payload.name,
            email: payload.email,
            password: payload.password
        };
        const response = yield axios.post(`/auth/signup`, data);
        console.log('response', response.data.message);
        yield put(setLoader(false));
        yield setNotification('success', response.data.message);
        yield put(signupSuccess(response.data.data));
        payload.navigate('/login');
    } catch (error) {
        yield put(setLoader(false));
        yield sagaErrorHandler(error.response.data.data);
    }
}
function* forgetPasswordRequest({ payload }) {
    let data = {
        email: payload.email
    };
    try {
        const response = yield axios.post(`auth/forgetPassword`, data);
        yield put(setLoader(false));
        yield setNotification('success', response.data.message);
        payload.navigate('/');
    } catch (error) {
        yield put(setLoader(false));
        yield sagaErrorHandler(error.response.data.data);
    }
}

function* resetPasswordRequest({ payload }) {
    let data = {
        newPassword: payload.newPassword,
        token: payload.token
    };
    try {
        const response = yield axios.put(`auth/resetPassword`, data);
        yield setNotification('success', response.data.message);
        payload.navigate('/');
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchLogin() {
    yield takeLatest(LOGIN, loginUser);
}

export function* watchSignup() {
    yield takeLatest(SIGN_UP, signupUserRequest);
}

export function* watchForgot() {
    yield takeLatest(FORGOT_PASSWORD, forgetPasswordRequest);
}
export function* watchReset() {
    yield takeLatest(RESET_PASSWORD, resetPasswordRequest);
}

export default function* authSaga() {
    yield all([fork(watchLogin), fork(watchForgot), fork(watchReset), fork(watchSignup)]);
}
