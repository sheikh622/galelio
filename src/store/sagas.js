import { all } from 'redux-saga/effects';
import authSaga from "../redux/auth/sagas";
import categorySaga from 'redux/categories/sagas';
import brandSaga from 'redux/brand/sagas';
import brandadminSaga from 'redux/brandAdmin/sagas';
import subAdminSaga from 'redux/subAdmin/sagas';
import nftSaga from 'redux/nftManagement/sagas';
export default function* rootSaga() {
    yield all([
        authSaga(),
        brandSaga(),
        categorySaga(),
        subAdminSaga(),
        brandadminSaga(),
        nftSaga()
     
        
    ]);
}
