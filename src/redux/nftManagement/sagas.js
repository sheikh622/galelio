import axios from 'utils/axios';
import { all, fork, put, takeLatest, select } from 'redux-saga/effects';
import { makeSelectAuthToken } from 'store/Selector';
import { getAllNft, getAllNftSuccess } from './actions';
import { GET_ALL_NFT, ADD_NFT, MINT_NFT, LAZY_MINT_NFT } from './constants';
import { sagaErrorHandler } from 'shared/helperMethods/sagaErrorHandler';
import { setNotification } from 'shared/helperMethods/setNotification';

function* addNftRequest({ payload }) {
    console.log('payload', payload);
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
        const response = yield axios.post(`/nft`, formData, headers);
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
            `/nft?page=${payload.page}&size=${payload.limit}&search=${payload.search}&categoryId=${payload.categoryId}`,
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

function* lazyMintNftRequest({ payload }) {
    let data = {
        nftDataArray: JSON.stringify(payload.nftDataArray),
        tokenIdArray: JSON.stringify(payload.tokenIdArray)
    };
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.post(`admin/nft/lazyMint`, data, headers);
        payload.handleClose();
        yield put(
            getAllNft({
                brandId: payload.brandId,
                categoryId: payload.categoryId,
                subCategoryId: payload.subCategoryId,
                type: payload.type,
                page: payload.page,
                limit: payload.limit
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
        const response = yield axios.post(`admin/nft/mint`, formData, headers);
        payload.handleClose();
        yield put(
            getAllNft({
                brandId: payload.brandId,
                categoryId: payload.categoryId,
                subCategoryId: payload.subCategoryId,
                type: payload.type,
                page: payload.page,
                limit: payload.limit
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

export default function* nftSaga() {
    yield all([fork(watchGetAllNft), fork(watchAddNft), fork(watchMintNft), fork(watchLazyMintNft)]);
}
