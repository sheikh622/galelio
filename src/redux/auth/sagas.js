import axios from '../../utils/axios';
import { all, call, fork, put, retry, takeLatest } from 'redux-saga/effects';
import { LOGIN, FORGOT_PASSWORD, RESET_PASSWORD, DASHBOARD } from './constants';
import { loginSuccess,dashboardSuccess, setLoader } from './actions';
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
        yield setNotification('success', 'Logged in Successfully');
        // console.log("-------------------------------------",response.data);
        yield put(loginSuccess(response.data.data));
        payload.navigate('/dashboard');
    } catch (error) {
        
        yield put(setLoader(false));
        yield sagaErrorHandler(error.response.data);
        // console.log("error.response.data",error.response.data)
    }
}
function* dashboard({ payload }) {
    try {
        const token =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2NzMsInVzZXJuYW1lIjoibWg5NyIsImV4cCI6MTY1OTUyNjI0MiwiZW1haWwiOiJtaEBnbWFpbC5jb20ifQ.mr-thGQPpmWOgc4DzmckMg4WqmMCg70EiEn_sT-gMMc';

    const headers = { headers: { Authorization: `jwt ${token}` } };
        const response = yield axios.get(`/user_data/admin_dashboard/`, headers);
        yield put(setLoader(false));
       
        yield put(dashboardSuccess(response.data));
        console.log(response.data,"dash.data")
        // payload.navigate('/dashboard');
    } catch (error) {
        yield put(setLoader(false));
        yield sagaErrorHandler(error.response.data);
        // console.log("error.response.data",error.response.data)
    }
}
function* forgetPasswordRequest({ payload }) {
    try {
        let data = {
            email: payload.email
        };
        const response = yield axios.post(`auth/forgetPassword`, data);
        yield put(setLoader(false));
        yield setNotification('success', response.data.message);
        payload.navigate('/dashboard');
    } catch (error) {
        yield put(setLoader(false));
        yield sagaErrorHandler(error.response.data);
    }
}

function* resetPasswordRequest({ payload }) {
    try {
        let data = {
            // id: payload.userId,
            // "newPassword":"Password@123",
            newPassword: payload.newPassword,
            token: payload.token
        };
        console.log(payload.newPassword);
        const response = yield axios.put(`auth/resetPassword`, data);
        yield setNotification('success', response.data.message);
        payload.navigate('/dashboard');
    } catch (error) {
        yield sagaErrorHandler(error.response.data);
    }
}

export function* watchLogin() {
    yield takeLatest(LOGIN, loginUser);
}
export function* watchDashboard() {
    yield takeLatest(DASHBOARD, dashboard);
}
export function* watchForgot() {
    yield takeLatest(FORGOT_PASSWORD, forgetPasswordRequest);
}
export function* watchReset() {
    yield takeLatest(RESET_PASSWORD, resetPasswordRequest);
}

export default function* authSaga() {
    yield all([
        fork(watchLogin), 
        fork(watchDashboard), 
        fork(watchForgot), fork(watchReset)]);
}
