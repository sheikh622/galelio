import axios from '../../utils/axios';
import { all, fork, put, takeLatest, select } from 'redux-saga/effects';
import { LOGIN, FORGOT_PASSWORD, RESET_PASSWORD, SIGN_UP, SIGN_UP_SOCIAL, CHANGE_PASSWORD, DASHBOARD, BRAND_DASHBOARD } from './constants';
import { loginSuccess, signupSuccess, signupsocialSuccess, setLoader, dashboardSuccess, branddashboardSuccess } from './actions';
import { makeSelectAuthToken } from 'store/Selector';

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

    
        if (response.data.data.user.role == "Super Admin" || "Brand Admin") {
            payload.navigate('/landingPage'); 
        } else {
            payload.navigate('/landingPage');
        }
    } catch (error) {
        yield put(setLoader(false));
        yield sagaErrorHandler(error.response.data.data);
    }
}
function* dashboard({}) {
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.get(`/adminDashboard`, headers);

        yield put(dashboardSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}
function* branddashboard({ payload }) {
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.get(`/brandAdminDashboard/${payload.brandId}`, headers);

        yield put(branddashboardSuccess(response.data.data));
    } catch (error) {
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
        payload.navigate('/landingPage');
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
function* changePasswordRequest({ payload }) {
    let data = {
        newPassword: payload.newPassword,
        currentPassword: payload.currentPassword
    };
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };

        const response = yield axios.put(`auth/changePassword`, data, headers);
        yield setNotification('success', response.data.message);
        payload.navigate('/dashboard');
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchLogin() {
    yield takeLatest(LOGIN, loginUser);
}
export function* watchDashboard() {
    yield takeLatest(DASHBOARD, dashboard);
}
export function* watchBrandDashboard() {
    yield takeLatest(BRAND_DASHBOARD, branddashboard);
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
export function* watchchangePassword() {
    yield takeLatest(CHANGE_PASSWORD, changePasswordRequest);
}

export default function* authSaga() {
    yield all([
        fork(watchLogin),
        fork(watchForgot),
        fork(watchReset),
        fork(watchSignup),
        fork(watchSocialSignup),
        fork(watchchangePassword),
        fork(watchDashboard),
        fork(watchBrandDashboard)
    ]);
}
