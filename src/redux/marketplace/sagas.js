import axios from '../../utils/axios';
import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { makeSelectAuthToken } from 'store/Selector';
import { GET_ALL_MARKETPLACE_CATEGORIES, GET_ALL_MARKETPLACE_NFTS_BY_CATEGORY } from './constants';
import { getAllMarketplaceCategoriesSuccess, getAllMarketplaceNftsByCategorySuccess } from './actions';
import { sagaErrorHandler } from '../../shared/helperMethods/sagaErrorHandler';
import { setNotification } from '../../shared/helperMethods/setNotification';

function* getAllMarketplaceCategoriesRequest() {
    try {
        const response = yield axios.get(`/category/marketplace`);
        yield put(getAllMarketplaceCategoriesSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllMarketplaceCategories() {
    yield takeLatest(GET_ALL_MARKETPLACE_CATEGORIES, getAllMarketplaceCategoriesRequest);
}

function* getAllMarketplaceNftsByCategoryRequest({ payload }) {
    try {
        const response = yield axios.get(
            `/nft/category/${payload.category}?&size=${payload.limit}&page=${payload.page}&search=${payload.search}`
        );
        yield put(getAllMarketplaceNftsByCategorySuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllMarketplaceNftsByCategory() {
    yield takeLatest(GET_ALL_MARKETPLACE_NFTS_BY_CATEGORY, getAllMarketplaceNftsByCategoryRequest);
}

export default function* marketplaceSaga() {
    yield all([fork(watchGetAllMarketplaceCategories), fork(watchGetAllMarketplaceNftsByCategory)]);
}
