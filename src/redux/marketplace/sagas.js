import axios from '../../utils/axios';
import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { makeSelectAuthToken } from 'store/Selector';
import { GET_ALL_MARKETPLACE_CATEGORIES, GET_ALL_MARKETPLACE_NFTS_BY_CATEGORY,GET_ALL_SIMILAR_PRODUCTS,TRACKING_TOOL_SUCCESS  } from './constants';
import { getAllMarketplaceCategoriesSuccess, getAllMarketplaceNftsByCategorySuccess,getAllSimilarProductsSuccess ,getTrackSuccess
     } from './actions';
import { sagaErrorHandler } from '../../shared/helperMethods/sagaErrorHandler';
import { setNotification } from '../../shared/helperMethods/setNotification';





function* trackingToolRequest({payload}) {
    const formData = new FormData();
    formData.append('serialId', payload.serialId);
    formData.append('tokenId', payload.tokenId);
    formData.append('address', payload.address);
 
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.post(`/nft/trackNFT`, formData, headers);
        yield put(getTrackSuccess(response.data.data));
        console.log(response,'response');
        // yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchTrackingTool() {
    yield takeLatest(TRACKING_TOOL_SUCCESS, trackingToolRequest);
}
function* getAllSimilarProductsRequest({payload}) {
    try {
        const response = yield axios.get(
            `/nft/similarProducts/${payload.categoryId}?&size=${payload.limit}&page=${payload.page}&search=${payload.search}&nftId=${payload.nftId}`
        );
        yield put(getAllSimilarProductsSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllSimilarProducts() {
    yield takeLatest(GET_ALL_SIMILAR_PRODUCTS, getAllSimilarProductsRequest);
}


function* getAllMarketplaceCategoriesRequest() {
    try {
        const response = yield axios.get(`/category/marketplace`);
        yield put(getAllMarketplaceCategoriesSuccess(response.data.data));
        console.log(response,'response');
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
            `/nft/category/${payload.categoryId}?&size=${payload.limit}&page=${payload.page}&search=${payload.search}`
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
    yield all([fork(watchGetAllMarketplaceCategories), fork(watchGetAllMarketplaceNftsByCategory),
        fork(watchGetAllSimilarProducts),
        fork(watchTrackingTool),
        
    ]);
}
