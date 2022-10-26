import axioss from "axios";
import axios from "utils/axios";
import { all, call, fork, put, retry, takeLatest, select } from 'redux-saga/effects';
import { sagaErrorHandler } from 'shared/helperMethods/sagaErrorHandler';
import { makeSelectAuthToken } from 'store/Selector';
import {
    // Admin
    getAllAdmin,
    getAllAdminSuccess,


} from './actions';
import {
    // Admin
    GET_ALL_ADMINS,

    ADD_ADMIN,
    UPDATE_ADMIN,
    DELETE_ADMIN,
    BLOCK_ADMIN,
    UNBLOCK_ADMIN,
    MINT_ROLE,
    NON_MINT_ROLE

} from './constants';
import { setNotification } from 'shared/helperMethods/setNotification';


// get all admin Module API


function* getAllAdminRequest({ payload }) {
    const token = yield select(makeSelectAuthToken());

    try {


        const response = yield axios.get(`admin/all?size=${payload.limit}&page=${payload.page}&search=${payload.search}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);
        console.log(response.data.data, "response =>getAllAdminSuccess")
        yield put(getAllAdminSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllAdmin() {
    yield takeLatest(GET_ALL_ADMINS, getAllAdminRequest);
}

/// add admin
function* addAdminRequest({ payload }) {

    let data = {
        firstName:payload.firstName,
        lastName:payload.lastName,
        email: payload.email,
        password:  payload.password,
        "hasMintingAccess": false
    };
    try {
        const token = yield select(makeSelectAuthToken());

        const response = yield axios.post(`admin/add`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        yield put(
            getAllAdmin({
                page: payload.page,
                limit: payload.limit,
                search:payload.search
              

            })
        );
        payload.handleClose();

        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchAddAdmin() {
    yield takeLatest(ADD_ADMIN, addAdminRequest);
}
//update admin

function* updateAdminRequest({ payload }) {
    let data = {
        email:payload.email,
        password:payload.password,  
    };
    try {
        const token = yield select(makeSelectAuthToken());

        const response = yield axios.put(`admin/updatePassword`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        yield put(
            getAllAdmin({
                page: payload.page,
                limit: payload.limit,
                search:payload.search,

            })
        );
        payload.handleClose();

        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchUpdateAdmin() {
    yield takeLatest(UPDATE_ADMIN, updateAdminRequest);
}
//delete admin

function* deleteAdminRequest({ payload }) {
    try {
        const token = yield select(makeSelectAuthToken());

        const response = yield axios.delete(`admin/delete/${payload.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);
        yield put(
            getAllAdmin({
                page: payload.page,
                limit: payload.limit,
                search:payload.search
              

            })
        );
        payload.handleClose();


        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchDeleteAdmin() {
    yield takeLatest(DELETE_ADMIN, deleteAdminRequest);
}
//block

function* blockAdminRequest({ payload }) {
    try {
        const token = yield select(makeSelectAuthToken());
        let data = {
            email:payload.email,
           
        };

        const response = yield axios.put(`admin/block`,data,  {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);
        yield put(
            getAllAdmin({
                page: payload.page,
                limit: payload.limit,
                search:payload.search
                

            })
        );
        payload.handleClose();


        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchBlockAdmin() {
    yield takeLatest(BLOCK_ADMIN, blockAdminRequest);
}
//unblock
function* unblockAdminRequest({ payload }) {
    try {
        const token = yield select(makeSelectAuthToken());

        const response = yield axios.delete(`brand/delete/${payload.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);
        yield put(
            getAllAdmin({
                page: payload.page,
                limit: payload.limit,
                search: payload.search

            })
        );
        payload.handleClose();


        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchUnblockAdmin() {
    yield takeLatest(UNBLOCK_ADMIN, unblockAdminRequest);
}
//minting access
function* mintAdminRequest({ payload }) {
    try {
        const token = yield select(makeSelectAuthToken());
        let data = {
            email:payload.email,
            // mintingAccess: payload.mintingAccess
        };
    
        const response = yield axios.post(`admin/mintingAccess`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);
        yield put(
            getAllAdmin({
                page: payload.page,
                limit: payload.limit,
                search:payload.search
                

            })
        );
        payload.handleClose();


        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchMintAdmin() {
    yield takeLatest(MINT_ROLE, mintAdminRequest);
}


function* nonMintAdminRequest({ payload }) {
    try {
        const token = yield select(makeSelectAuthToken());

        const response = yield axios.delete(`brand/delete/${payload.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);
        yield put(
            getAllAdmin({
                page: payload.page,
                limit: payload.limit,
                search: payload.search

            })
        );
        payload.handleClose();


        yield setNotification('success', response.data.message);
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchNonmintAdmin() {
    yield takeLatest(NON_MINT_ROLE, nonMintAdminRequest);
}

//admin saga==============================>
export default function* adminSaga() {
    yield all([
        
        fork(watchGetAllAdmin),

        fork(watchAddAdmin),
        fork(watchDeleteAdmin),
        fork(watchUpdateAdmin),
        fork(watchBlockAdmin),
        fork(watchUnblockAdmin),
        fork(watchMintAdmin),
        fork(watchNonmintAdmin),

    ]);
}
