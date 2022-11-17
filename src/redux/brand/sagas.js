import axios from "utils/axios";
import { all, call, fork, put, retry, takeLatest, select } from 'redux-saga/effects';
import { sagaErrorHandler } from 'shared/helperMethods/sagaErrorHandler';
import { makeSelectAuthToken } from 'store/Selector';
import {
    // Brand
    getAllBrands,
    getAllBrandsSuccess,


} from './actions';
import {
    // Brand
    GET_ALL_BRANDS,

    ADD_BRAND,
    UPDATE_BRAND,
    DELETE_BRAND,

} from './constants';
import { setNotification } from 'shared/helperMethods/setNotification';


// Brand Module API


function* getAllBrandsRequest({ payload }) {
    const token = yield select(makeSelectAuthToken());

    try {


        const response = yield axios.get(`brand/getAllBrands?size=${payload.limit}&page=${payload.page}&search=${payload.search}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);

        yield put(getAllBrandsSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllBrands() {
    yield takeLatest(GET_ALL_BRANDS, getAllBrandsRequest);
}


function* addBrandRequest({ payload }) {

    let data = {
        name: payload.name
    };
    try {
        const token = yield select(makeSelectAuthToken());

        const response = yield axios.post(`brand/add`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        yield put(
            getAllBrands({
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

export function* watchAddBrand() {
    yield takeLatest(ADD_BRAND, addBrandRequest);
}

function* updateBrandRequest({ payload }) {
    let data = {
        brandId: payload.brandId,
        name: payload.name
    };
    try {
        const token = yield select(makeSelectAuthToken());

        const response = yield axios.put(`brand/update`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        yield put(
            getAllBrands({
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

export function* watchUpdateBrand() {
    yield takeLatest(UPDATE_BRAND, updateBrandRequest);
}

function* deleteBrandRequest({ payload }) {
    try {
        const token = yield select(makeSelectAuthToken());

        const response = yield axios.delete(`brand/delete/${payload.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);
        yield put(
            getAllBrands({
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

export function* watchDeleteBrand() {
    yield takeLatest(DELETE_BRAND, deleteBrandRequest);
}


export default function* brandSaga() {
    yield all([
        //Brand
        fork(watchGetAllBrands),
        fork(watchAddBrand),
        fork(watchDeleteBrand),
        fork(watchUpdateBrand),

    ]);
}
