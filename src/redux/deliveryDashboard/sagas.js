import axios from 'utils/axios';
import { all, call, fork, put, retry, takeLatest, select } from 'redux-saga/effects';
import { sagaErrorHandler } from 'shared/helperMethods/sagaErrorHandler';
import { makeSelectAuthToken } from 'store/Selector';
import { getAllCategories, getAllProductsSuccess,  } from './actions';
import { setLoader } from 'redux/auth/actions';
import { GET_ALL_PRODUCT,} from './constants';
import { setNotification } from 'shared/helperMethods/setNotification';

function* getAllProductRequest({ payload }) {
    try {
        const headers = { headers: { Authorization: `Bearer ${yield select(makeSelectAuthToken())}` } };
        const response = yield axios.get(`/delivery?WalletAddress=0x6f3B51bd5B67F3e5bca2fb32796215A796B79651&page=1&size=10`, headers);
        yield put(getAllProductsSuccess(response.data.data.deliveries.rows));
        console.log(response.data.data.deliveries.rows,'response=?saga=>');
    } catch (error) {
        // yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllProducts() {
    yield takeLatest(GET_ALL_PRODUCT, getAllProductRequest);
}



export default function* deliverySaga() {
    yield all([
        fork(watchGetAllProducts),
        
    ]);
}
