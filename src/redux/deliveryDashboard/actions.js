import {
    GET_ALL_PRODUCT,
    GET_ALL_PRODUCT_SUCCESS,


} from './constants';

export const getAllProducts = (data) => {
    return {
        type: GET_ALL_PRODUCT,
        payload: data
    };
};

export const getAllProductsSuccess = (data) => {
    return {
        type: GET_ALL_PRODUCT_SUCCESS,
        payload: data
    };
};
