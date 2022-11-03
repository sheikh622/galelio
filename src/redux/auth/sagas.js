import axios from '../../utils/axios';
import { all, call, fork, put, retry, takeLatest } from 'redux-saga/effects';
import { LOGIN, FORGOT_PASSWORD, RESET_PASSWORD, DASHBOARD } from './constants';
import { loginSuccess, setLoader } from './actions';
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
        payload.navigate('/dashboard');
    } catch (error) {
        
        yield put(setLoader(false));
        yield sagaErrorHandler(error.response.data.data);
       
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
        yield sagaErrorHandler(error.response.data.data);
    }
}

function* resetPasswordRequest({ payload }) {
    try {
        let data = {
          
            newPassword: payload.newPassword,
            token: payload.token
        };
        
        const response = yield axios.put(`auth/resetPassword`, data);
        yield setNotification('success', response.data.message);
        payload.navigate('/dashboard');
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
        
    }
}

export function* watchLogin() {
    yield takeLatest(LOGIN, loginUser);
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
        
        fork(watchForgot), fork(watchReset)]);
}
