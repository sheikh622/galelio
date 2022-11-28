import axios from 'utils/axios';
import { all, fork, put, takeLatest, select } from 'redux-saga/effects';
import { makeSelectAuthToken } from 'store/Selector';
import { getAllNft, getAllNftSuccess, getAllNftSuperAdmin, getAllNftSuccessSuperAdmin } from './actions';
import {
    GET_ALL_NFT,
    ADD_NFT,
    MINT_NFT,
    LAZY_MINT_NFT,
    REQUEST_NFT_FOR_MINTING,
    GET_ALL_NFT_SUPER_ADMIN,
    EDIT_NFT,
    DELETE_NFT,
    REJECT_NFT
} from './constants';
import { sagaErrorHandler } from 'shared/helperMethods/sagaErrorHandler';
import { setNotification } from 'shared/helperMethods/setNotification';





function* deleteNftRequest({ payload }) {
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.delete(`nft/brandAdmin/${payload.id}`, headers);
        yield put(
            getAllNft({
                categoryId: payload.categoryId,
                search: payload.search,
                page: payload.page,
                limit: payload.limit,
                type: payload.type
            })
        );
        payload.handleClose();
        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchDeleteNft() {
    yield takeLatest(DELETE_NFT, deleteNftRequest);
}

function* getAllNftSuperAdminRequest({ payload }) {
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.get(
            `/nft/admin?page=${payload.page}&size=${payload.limit}&search=${payload.search}&brandId=${payload.brandId}&categoryId=${payload.categoryId}&type=${payload.type}`,
            headers
        );
        yield put(getAllNftSuccessSuperAdmin(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllNftSuperAdmin() {
    yield takeLatest(GET_ALL_NFT_SUPER_ADMIN, getAllNftSuperAdminRequest);
}

function* editNftRequest({ payload }) {
    console.log({ payload });
    const formData = new FormData();
    if (payload.isFile) {
        formData.append('asset', payload.asset);
    }
    formData.append('name', payload.name);
    formData.append('price', payload.price);
    formData.append('currencyType', payload.currencyType);
    formData.append('description', payload.description);
    formData.append('quantity', payload.quantity);
    formData.append('metaData', JSON.stringify(payload.metaDataArray));
    formData.append('mintType', payload.mintType);

    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.put(`/nft/brandAdmin/${payload.id}`, formData, headers);
        yield put(
            getAllNft({
                categoryId: payload.categoryId,
                search: payload.search,
                page: payload.page,
                limit: payload.limit,
                type: payload.type
            })
        );
        payload.handleClose();
        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
        payload.setLoader(false);
    }
}

export function* watchEditNft() {
    yield takeLatest(EDIT_NFT, editNftRequest);
}

function* addNftRequest({ payload }) {
    const formData = new FormData();
    formData.append('asset', payload.asset);
    formData.append('name', payload.name);
    formData.append('price', payload.price);
    formData.append('currencyType', payload.currencyType);
    formData.append('description', payload.description);
    formData.append('categoryId', payload.categoryId);
    formData.append('quantity', payload.quantity);
    formData.append('metaData', JSON.stringify(payload.metaDataArray));
    formData.append('mintType', payload.mintType);

    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.post(`/nft/brandAdmin`, formData, headers);
        yield put(
            getAllNft({
                categoryId: payload.categoryId,
                search: payload.search,
                page: payload.page,
                limit: payload.limit,
                type: payload.type
            })
        );
        payload.handleClose();
        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
        payload.setLoader(false);
    }
}

export function* watchAddNft() {
    yield takeLatest(ADD_NFT, addNftRequest);
}

function* getAllNftRequest({ payload }) {
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.get(
            `/nft/brandAdmin?page=${payload.page}&size=${payload.limit}&search=${payload.search}&categoryId=${payload.categoryId}&type=${payload.type}`,
            headers
        );
        yield put(getAllNftSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllNft() {
    yield takeLatest(GET_ALL_NFT, getAllNftRequest);
}

function* requestNftForMintingRequest({ payload }) {
    let data = {};
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.patch(`nft/brandAdmin/mintRequest/${payload.id}`, data, headers);
        payload.handleClose();
        yield put(
            getAllNft({
                categoryId: payload.categoryId,
                search: payload.search,
                page: payload.page,
                limit: payload.limit,
                type: payload.type
            })
        );
        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchRequestNftForMinting() {
    yield takeLatest(REQUEST_NFT_FOR_MINTING, requestNftForMintingRequest);
}

function* lazyMintNftRequest({ payload }) {
    let data = {
        nftDataArray: JSON.stringify(payload.nftDataArray),
        tokenIdArray: JSON.stringify(payload.tokenIdArray)
    };
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.post(`nft/admin/lazyMint`, data, headers);
        payload.handleClose();
        yield put(
            getAllNftSuperAdmin({
                categoryId: payload.categoryId,
                brandId: payload.brandId,
                search: payload.search,
                page: payload.page,
                limit: payload.limit,
                type: payload.type
            })
        );
        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchLazyMintNft() {
    yield takeLatest(LAZY_MINT_NFT, lazyMintNftRequest);
}

function* mintNftRequest({ payload }) {
    const formData = new FormData();
    formData.append('nftDataArray', JSON.stringify(payload.nftDataArray));
    formData.append('tokenIdArray', JSON.stringify(payload.tokenIdArray));
    formData.append('transactionHash', payload.transactionHash);
    formData.append('signerAddress', payload.signerAddress);

    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.post(`nft/admin/mint`, formData, headers);
        payload.handleClose();
        yield put(
            getAllNftSuperAdmin({
                categoryId: payload.categoryId,
                brandId: payload.brandId,
                search: payload.search,
                page: payload.page,
                limit: payload.limit,
                type: payload.type
            })
        );
        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchMintNft() {
    yield takeLatest(MINT_NFT, mintNftRequest);
}

function* rejectNftRequest({ payload }) {
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.patch(`nft/admin/mintReject/${payload.id}`,{}, headers);
        yield put(
            getAllNftSuperAdmin({
                categoryId: payload.categoryId,
                brandId: payload.brandId,
                search: payload.search,
                page: payload.page,
                limit: payload.limit,
                type: payload.type
            })
        );
        payload.handleClose();
        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchRejectNft() {
    yield takeLatest(REJECT_NFT, rejectNftRequest);
}

export default function* nftSaga() {
    yield all([
        fork(watchGetAllNftSuperAdmin),
        fork(watchGetAllNft),
        fork(watchAddNft),
        fork(watchMintNft),
        fork(watchLazyMintNft),
        fork(watchRequestNftForMinting),
        fork(watchEditNft),
        fork(watchDeleteNft),
        fork(watchRejectNft)
    ]);
}
