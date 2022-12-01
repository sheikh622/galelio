import axios from '../../utils/axios';
import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_LANDING_PAGE_DATA } from './constants';
import { getAllLandingPageDataSuccess } from './actions';
import { sagaErrorHandler } from '../../shared/helperMethods/sagaErrorHandler';
import { setNotification } from '../../shared/helperMethods/setNotification';

function* getAllLandingPageDataRequest() {
    try {
        const response = yield axios.get(`/marketplace`);
        yield put(getAllLandingPageDataSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllLandingPageData() {
    yield takeLatest(GET_ALL_LANDING_PAGE_DATA, getAllLandingPageDataRequest);
}

export default function* landingPageSaga() {
    yield all([fork(watchGetAllLandingPageData)]);
}
