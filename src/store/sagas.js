import { all } from 'redux-saga/effects';
import authSaga from "../redux/auth/sagas";
import brandSaga from 'redux/brand/sagas';
import categorySaga from 'redux/categories/sagas';

export default function* rootSaga() {
    yield all([
        authSaga(),
        brandSaga(),
        categorySaga(),
     
        
    ]);
}
