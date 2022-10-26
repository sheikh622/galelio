import {
    // Admin
    GET_ALL_ADMINS,
    GET_ALL_ADMINS_SUCCESS,

    ADD_ADMIN,
    UPDATE_ADMIN,
    DELETE_ADMIN,
    BLOCK_ADMIN,
    UNBLOCK_ADMIN,
    MINT_ROLE,
    NON_MINT_ROLE

} from './constants';

// Admin

export const getAllAdmin = (data) => {
    return {
        type: GET_ALL_ADMINS,
        payload: data
    };
};

export const getAllAdminSuccess = (data) => {
    return {
        type: GET_ALL_ADMINS_SUCCESS,
        payload: data
    };
};


export const addAdmin = (data) => {
    return {
        type: ADD_ADMIN,
        payload: data
    };
};

export const updateAdmin = (data) => {
    return {
        type: UPDATE_ADMIN,
        payload: data
    };
};

export const deleteAdmin = (data) => {
    return {
        type: DELETE_ADMIN,
        payload: data
    };
};
export const block = (data) => {
    return {
        type: BLOCK_ADMIN,
        payload: data
    };
};
export const unblock = (data) => {
    return {
        type: UNBLOCK_ADMIN,
        payload: data
    };
};
export const mintRole = (data) => {
    return {
        type: MINT_ROLE,
        payload: data
    };
};
export const nonMintRole = (data) => {
    return {
        type: NON_MINT_ROLE,
        payload: data
    };
};

