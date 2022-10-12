import { all } from 'redux-saga/effects';
import authSaga from "../redux/auth/sagas";
import marketPlaceSaga from 'redux/marketPlace/sagas';

export default function* rootSaga() {
    yield all([
        authSaga(),
        marketPlaceSaga(),
     
        
    ]);
}
