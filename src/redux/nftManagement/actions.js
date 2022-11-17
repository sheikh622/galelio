import {
    GET_NFTS_BY_CATEGORY,
    GET_NFTS_BY_CATEGORY_SUCCESS,
} from './constants';

export const getNftsByCategory = (data) => {
    return {
        type: GET_NFTS_BY_CATEGORY,
        payload: data
    };
};
export const getNftsByCategorySuccess = (data) => {
    return {
        type: GET_NFTS_BY_CATEGORY_SUCCESS,
        payload: data
    };
};


