import axios from 'utils/axios';
import { all, fork, put, takeLatest, select } from 'redux-saga/effects';
import { sagaErrorHandler } from 'shared/helperMethods/sagaErrorHandler';
import { makeSelectAuthToken } from 'store/Selector';
import { getAllBrandAdmin, getAllBrandAdminSuccess } from './actions';
import { GET_ALL_BRAND_ADMINS, ADD_BRAND_ADMIN, UPDATE_BRAND_ADMINS, DELETE_BRAND_ADMIN, BLOCK_BRAND_ADMIN } from './constants';
import { setNotification } from 'shared/helperMethods/setNotification';

function* getAllBrandAdminRequest({ payload }) {
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.get(
            `brand/${payload.brandId}/admin?&size=${payload.limit}&page=${payload.page}&search=${payload.search}`,
            headers
        );
        yield put(getAllBrandAdminSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllBrandAdmin() {
    yield takeLatest(GET_ALL_BRAND_ADMINS, getAllBrandAdminRequest);
}

function* addBrandAdminRequest({ payload }) {
    let data = {
        brandId: payload.brandId,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password
    };
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.post(`brand/admin`, data, headers);
        yield put(
            getAllBrandAdmin({
                page: payload.page,
                limit: payload.limit,
                search: payload.search,
                brandId: payload.brandId
            })
        );
        payload.handleClose();
        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchAddBrandAdmin() {
    yield takeLatest(ADD_BRAND_ADMIN, addBrandAdminRequest);
}

function* updateBrandAdminRequest({ payload }) {
    let data = {
        id: payload.id,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password
    };
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.put(`brandAdmin/updatePassword`, data, headers);
        yield put(
            getAllBrandAdmin({
                page: payload.page,
                limit: payload.limit,
                search: payload.search,
                brandId: payload.brandId
            })
        );
        payload.handleClose();
        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchUpdateBrandAdmin() {
    yield takeLatest(UPDATE_BRAND_ADMINS, updateBrandAdminRequest);
}

function* deleteBrandAdminRequest({ payload }) {
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.delete(`brandAdmin/${payload.id}`, headers);
        yield put(
            getAllBrandAdmin({
                page: payload.page,
                limit: payload.limit,
                search: payload.search
            })
        );
        payload.handleClose();
        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchDeleteBrandAdmin() {
    yield takeLatest(DELETE_BRAND_ADMIN, deleteBrandAdminRequest);
}

function* blockBrandAdminRequest({ payload }) {
    let data = {
        email: payload.email
    };
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.put(`brandAdmin/block`, data, headers);
        yield put(
            getAllBrandAdmin({
                page: payload.page,
                limit: payload.limit,
                search: payload.search
            })
        );
        payload.handleClose();
        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchBlockBrandAdmin() {
    yield takeLatest(BLOCK_BRAND_ADMIN, blockBrandAdminRequest);
}

export default function* brandadminSaga() {
    yield all([
        fork(watchGetAllBrandAdmin),
        fork(watchAddBrandAdmin),
        fork(watchDeleteBrandAdmin),
        fork(watchUpdateBrandAdmin),
        fork(watchBlockBrandAdmin)
    ]);
}
