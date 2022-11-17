import axios from 'utils/axios';
import { all, call, fork, put, retry, takeLatest, select } from 'redux-saga/effects';
import { sagaErrorHandler } from 'shared/helperMethods/sagaErrorHandler';
import { makeSelectAuthToken } from 'store/Selector';
import { getNftsByCategorySuccess } from './actions';
import { GET_NFTS_BY_CATEGORY } from './constants';

function* getAllNftsByCategoryRequest({ payload }) {
    const token = yield select(makeSelectAuthToken());

    try {
        const response = yield axios.get(
            `/nft/getAll?categoryId=${payload.categoryId}&brandId=${payload.brandId}&type=" "&page=${payload.page}&size=${payload.size}`,
            // `/nft/getAll?categoryId=1&brandId=1&type= &page=1&size=10`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        yield put(getNftsByCategorySuccess(response.data.data.nfts));
        console.log(response,'response')
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllNftsByCategoryRequest() {
    yield takeLatest(GET_NFTS_BY_CATEGORY, getAllNftsByCategoryRequest);
}

//nft saga==============================>
export default function* nftSaga() {
    yield all([fork(watchGetAllNftsByCategoryRequest)]);
}
