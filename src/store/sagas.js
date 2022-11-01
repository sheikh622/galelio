import { all } from 'redux-saga/effects';
import authSaga from "../redux/auth/sagas";
import brandSaga from 'redux/brand/sagas';
import adminSaga from 'redux/adminManagement/sagas';
export default function* rootSaga() {
    yield all([
        authSaga(),
        brandSaga(),
        adminSaga(),
     
        
    ]);
}
