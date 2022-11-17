import {
    // Admin
    GET_ALL_BRAND_ADMINS,
    GET_ALL_BRAND_ADMINS_SUCCESS,
    ADD_BRAND_ADMIN,
    UPDATE_BRAND_ADMINS,
    DELETE_BRAND_ADMIN,
    BLOCK_BRAND_ADMIN
} from './constants';

// brand Admin

export const getAllBrandAdmin = (data) => {
    return {
        type: GET_ALL_BRAND_ADMINS,
        payload: data
    };
};

export const getAllBrandAdminSuccess = (data) => {
    return {
        type: GET_ALL_BRAND_ADMINS_SUCCESS,
        payload: data
    };
};

export const addBrandAdmin = (data) => {
    return {
        type: ADD_BRAND_ADMIN,
        payload: data
    };
};

export const updateBrandAdmin = (data) => {
    return {
        type: UPDATE_BRAND_ADMINS,
        payload: data
    };
};

export const deleteBrandAdmin = (data) => {
    return {
        type: DELETE_BRAND_ADMIN,
        payload: data
    };
};
export const blockBrand = (data) => {
    return {
        type: BLOCK_BRAND_ADMIN,
        payload: data
    };
};
