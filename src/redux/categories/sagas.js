import axioss from "axios";
import axios from "utils/axios";
import { all, call, fork, put, retry, takeLatest, select } from 'redux-saga/effects';
import { sagaErrorHandler } from 'shared/helperMethods/sagaErrorHandler';
import { makeSelectAuthToken } from 'store/Selector';
import {
    getAllCategories,
    getAllCategoriesSuccess,
    getAllCategoriesByBrandSuccess,
    getAllCategoriesByBrand,


} from './actions';
import {
    GET_ALL_CATEGORIES,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    GET_ALL_CATEGORIES_BY_BRAND,

} from './constants';
import { setNotification } from 'shared/helperMethods/setNotification';


function* getAllCategoriesRequest({ payload }) {
    try {
        const headers = { headers: { 'auth-token': yield select(makeSelectAuthToken()) } };
        const response = yield axios.get(`/category/getAllCategoriesByBrand/2`,
            headers
        );
        yield put(getAllCategoriesSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllCategories() {
    yield takeLatest(GET_ALL_CATEGORIES, getAllCategoriesRequest);
}

function* addCategoryRequest({ payload }) {
    let data = {
        name: payload.name,
        brandId: payload.brandId
    };
    try {
        const headers = { headers: { 'auth-token': yield select(makeSelectAuthToken()) } };
        const response = yield axios.post(`admin/category/add`, data, headers);
        yield put(
            getAllCategories({
                search: payload.search,
                page: payload.page,
                limit: payload.limit,
                brandId: payload.mainBrandId == 0 ? '' : payload.mainBrandId
            })
        );
        payload.handleClose();
        yield SetNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchAddCategory() {
    yield takeLatest(ADD_CATEGORY, addCategoryRequest);
}

function* updateCategoryRequest({ payload }) {
    let data = {
        name: payload.name,
        brandId: payload.brandId,
        categoryId: payload.categoryId
    };
    try {
        const headers = { headers: { 'auth-token': yield select(makeSelectAuthToken()) } };
        const response = yield axios.post(`admin/category/update`, data, headers);
        yield put(
            getAllCategories({
                search: payload.search,
                page: payload.page,
                limit: payload.limit,
                brandId: ''
            })
        );
        payload.handleClose();
        yield SetNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchUpdateCategory() {
    yield takeLatest(UPDATE_CATEGORY, updateCategoryRequest);
}

function* deleteCategoryRequest({ payload }) {
    try {
        const headers = { headers: { 'auth-token': yield select(makeSelectAuthToken()) } };
        const response = yield axios.delete(`admin/category/delete/${payload.brandId}/${payload.categoryId}`, headers);
        yield put(
            getAllCategories({
                search: payload.search,
                page: payload.page,
                limit: payload.limit,
                brandId: ''
            })
        );
        payload.handleClose();
        yield SetNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchDeleteCategory() {
    yield takeLatest(DELETE_CATEGORY, deleteCategoryRequest);
}

function* getAllCategoryByBrandRequest({ payload }) {
    try {
        const headers = { headers: { 'auth-token': yield select(makeSelectAuthToken()) } };
        const response = yield axios.get(`admin/category/getAllCategoriesByBrand/${payload.brandId}`, headers);
        yield put(getAllCategoriesByBrandSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllCategoryByBrand() {
    yield takeLatest(GET_ALL_CATEGORIES_BY_BRAND, getAllCategoryByBrandRequest);
}



export default function* categorySaga() {
    yield all([
        fork(watchGetAllCategories),
        fork(watchAddCategory),
        fork(watchDeleteCategory),
        fork(watchUpdateCategory),
        fork(watchGetAllCategoryByBrand),

    ]);
}
