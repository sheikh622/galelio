import axios from 'utils/axios';
import { all, call, fork, put, retry, takeLatest, select } from 'redux-saga/effects';
import { sagaErrorHandler } from 'shared/helperMethods/sagaErrorHandler';
import { makeSelectAuthToken } from 'store/Selector';
import { getAllBrands, getAllBrandsSuccess, getAllBrandsByAdmin, getAllBrandsByAdminSuccess } from './actions';
import { GET_ALL_BRANDS, ADD_BRAND, UPDATE_BRAND,UPDATE_PROPERTY, DELETE_BRAND, GET_ALL_BRANDS_BY_ADMIN } from './constants';
import { setNotification } from 'shared/helperMethods/setNotification';
import { getNftBuyer } from 'redux/nftManagement/actions';
// import { getAllMarketplaceNftsByCategorySuccess } from 'redux/marketplace/actions';
import { getAllMarketplaceCategoriesSuccess } from 'redux/marketplace/actions';
function* getAllBrandsByAdminRequest({ payload }) {
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.get(`brandsByAdmin/${payload.id}?size=${payload.limit}&page=${payload.page}&search=${payload.search}`,
         headers);
        yield put(getAllBrandsByAdminSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllBrandsByAdmin() {
    yield takeLatest(GET_ALL_BRANDS_BY_ADMIN, getAllBrandsByAdminRequest);
}
function* getAllBrandsRequest({ payload }) {
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.get(`brand?size=${payload.limit}&page=${payload.page}&search=${payload.search}`,
         headers);
        yield put(getAllBrandsSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllBrands() {
    yield takeLatest(GET_ALL_BRANDS, getAllBrandsRequest);
}

function* addBrandRequest({ payload }) {
    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('location', payload.location);
    formData.append('description', payload.description);
    formData.append('image', payload.image);
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.post(`brand`, formData, headers);
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
   
    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('location', payload.location);
    formData.append('description', payload.description);
    formData.append('image', payload.image);
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.put(`brand/${payload.brandId}`, formData, headers);
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
function* updatePropertyRequest({ payload }) {
   
    const formData = new FormData();
    formData.append('fieldName', payload.fieldName);
    formData.append('fieldValue', payload.fieldValue);
    
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.put(`/update/nftMetaData/${payload.id}`, formData, headers);
        // yield put(
        //     getNftBuyer({
        //         walletAddress: payload.walletAddress,
        //         NFTTokenId: payload.NFTTokenId,
        //         NftId: payload.NFTTokenId
        //     })
        // );
        payload.handleClose();
        payload.navigate('/creatorProfile');
        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchPropertyBrand() {
    yield takeLatest(UPDATE_PROPERTY, updatePropertyRequest);
}

function* deleteBrandRequest({ payload }) {
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.delete(`brand/${payload.id}`, headers);
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
    yield all([fork(watchGetAllBrands), 
        fork(watchAddBrand), 
        fork(watchPropertyBrand), 
        fork(watchDeleteBrand), fork(watchUpdateBrand),fork(watchGetAllBrandsByAdmin)]);
}
