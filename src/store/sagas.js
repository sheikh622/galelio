import { all } from 'redux-saga/effects';
import authSaga from "../redux/auth/sagas";
import brandSaga from 'redux/brand/sagas';
import categorySaga from 'redux/categories/sagas';

import adminSaga from 'redux/adminManagement/sagas';
import brandadminSaga from 'redux/brandManagement/sagas';
import nftSaga from 'redux/nftManagement/sagas';
export default function* rootSaga() {
    yield all([
        authSaga(),
        brandSaga(),
        categorySaga(),
        adminSaga(),
        brandadminSaga(),
        nftSaga()
     
        
    ]);
}
