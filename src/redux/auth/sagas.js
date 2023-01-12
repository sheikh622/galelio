import axios from '../../utils/axios';
import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { LOGIN, FORGOT_PASSWORD, RESET_PASSWORD, SIGN_UP,SIGN_UP_SOCIAL } from './constants';
import { loginSuccess, signupSuccess,signupsocialSuccess, setLoader } from './actions';
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
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: payload.password,
            walletAddress: payload.walletAddress,
            address: payload.address
        };
        const response = yield axios.post(`/auth/signup`, data);
      
        yield put(setLoader(false));
        yield setNotification('success', response.data.message);
        yield put(signupSuccess(response.data.data));
        payload.navigate('/login');
    } catch (error) {
        yield put(setLoader(false));
        yield sagaErrorHandler(error.response.data.data);
    }
}
function* signupSocialUserRequest({ payload }) {
    try {
        let data = {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            walletAddress: payload.walletAddress,
            address: payload.address
        };
        const response = yield axios.post(`/auth/socialSignup`, data);
      
        yield put(setLoader(false));
        yield setNotification('success', response.data.message);
        yield put(signupsocialSuccess(response.data.data));
        payload.navigate('/');
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
        payload.navigate('/login');
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
        payload.navigate('/login');
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
export function* watchSocialSignup() {
    yield takeLatest(SIGN_UP_SOCIAL, signupSocialUserRequest);
}

export function* watchForgot() {
    yield takeLatest(FORGOT_PASSWORD, forgetPasswordRequest);
}
export function* watchReset() {
    yield takeLatest(RESET_PASSWORD, resetPasswordRequest);
}

export default function* authSaga() {
    yield all([fork(watchLogin), fork(watchForgot), fork(watchReset), 
        fork(watchSignup),
        fork(watchSocialSignup),
    ]);
}
