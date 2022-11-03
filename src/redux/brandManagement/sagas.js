import axioss from 'axios';
import axios from 'utils/axios';
import { all, call, fork, put, retry, takeLatest, select } from 'redux-saga/effects';
import { sagaErrorHandler } from 'shared/helperMethods/sagaErrorHandler';
import { makeSelectAuthToken } from 'store/Selector';
import {
    // Admin
    getAllBrandAdmin,
    getAllBrandAdminSuccess
} from './actions';
import {
    // Admin
    GET_ALL_BRAND_ADMINS,
    ADD_BRAND_ADMIN,
    UPDATE_BRAND_ADMINS,
    DELETE_BRAND_ADMIN,
    BLOCK_BRAND_ADMIN,
    // MINT_ROLE
} from './constants';
import { setNotification } from 'shared/helperMethods/setNotification';

// get all admin Module API

function* getAllBrandAdminRequest({ payload }) {
    const token = yield select(makeSelectAuthToken());

    try {
        const response = yield axios.get(`getBrandAdmin?size=${payload.limit}&page=${payload.page}&search=${payload.search}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
       
        yield put(getAllBrandAdminSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllBrandAdmin() {
    yield takeLatest(GET_ALL_BRAND_ADMINS, getAllBrandAdminRequest);
}

/// add admin
function* addBrandAdminRequest({ payload }) {
    let data = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        brandName: payload.brandName,
        email: payload.email,
        password: payload.password,
        // hasMintingAccess: false
    };
    try {
        const token = yield select(makeSelectAuthToken());

        const response = yield axios.post(`addBrandAdmin`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        yield put(
            getAllBrandAdmin({
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

export function* watchAddBrandAdmin() {
    yield takeLatest(ADD_BRAND_ADMIN, addBrandAdminRequest);
}
//update admin

function* updateBrandAdminRequest({ payload }) {
    let data = {
        email: payload.email,
        password: payload.password
    };
    try {
        const token = yield select(makeSelectAuthToken());

        const response = yield axios.put(`brandAdmin/updatePassword`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        yield put(
            getAllBrandAdmin({
                page: payload.page,
                limit: payload.limit,
                search: payload.search
            })
        );
        payload.handleClose();

        yield setNotification('success', response.data.message);
        console.log(response.data.message)
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchUpdateBrandAdmin() {
    yield takeLatest(UPDATE_BRAND_ADMINS, updateBrandAdminRequest);
}

//delete admin

function* deleteBrandAdminRequest({ payload }) {
    try {
        const token = yield select(makeSelectAuthToken());

        const response = yield axios.delete(`brandAdmin/${payload.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        yield put(
            getAllBrandAdmin({
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

export function* watchDeleteBrandAdmin() {
    yield takeLatest(DELETE_BRAND_ADMIN, deleteBrandAdminRequest);
}
//block

function* blockBrandAdminRequest({ payload }) {
    try {
        const token = yield select(makeSelectAuthToken());
        let data = {
            email: payload.email
        };

        const response = yield axios.put(`brandAdmin/block`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        yield put(
            getAllBrandAdmin({
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

export function* watchBlockBrandAdmin() {
    yield takeLatest(BLOCK_BRAND_ADMIN, blockBrandAdminRequest);
}

//minting access
// function* mintAdminRequest({ payload }) {
//     try {
//         const token = yield select(makeSelectAuthToken());
//         let data = {
//             email: payload.email
           
//         };

//         const response = yield axios.post(`admin/mintingAccess`, data, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         yield put(
//             getAllAdmin({
//                 page: payload.page,
//                 limit: payload.limit,
//                 search: payload.search
//             })
//         );
//         payload.handleClose();

//         yield setNotification('success', response.data.message);
//     } catch (error) {
//         yield sagaErrorHandler(error.response.data.data);
//     }
// }

// export function* watchMintAdmin() {
//     yield takeLatest(MINT_ROLE, mintAdminRequest);
// }

//admin saga==============================>
export default function* brandadminSaga() {
    yield all([
        fork(watchGetAllBrandAdmin),

        fork(watchAddBrandAdmin),
        fork(watchDeleteBrandAdmin),
        fork(watchUpdateBrandAdmin),
        fork(watchBlockBrandAdmin),

        // fork(watchMintAdmin)
    ]);
}
