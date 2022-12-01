import {
    GET_ALL_MARKETPLACE_CATEGORIES,
    GET_ALL_MARKETPLACE_CATEGORIES_SUCCESS,
    GET_ALL_MARKETPLACE_NFTS_BY_CATEGORY,
    GET_ALL_MARKETPLACE_NFTS_BY_CATEGORY_SUCCESS
} from './constants';

export const getAllMarketplaceCategories = () => {
    return {
        type: GET_ALL_MARKETPLACE_CATEGORIES,
       
    };
};

export const getAllMarketplaceCategoriesSuccess = (data) => {
    return {
        type: GET_ALL_MARKETPLACE_CATEGORIES_SUCCESS,
        payload: data
    };
};

export const getAllMarketplaceNftsByCategory = (data) => {
    return {
        type: GET_ALL_MARKETPLACE_NFTS_BY_CATEGORY,
        payload: data
    };
};

export const getAllMarketplaceNftsByCategorySuccess = (data) => {
    return {
        type: GET_ALL_MARKETPLACE_NFTS_BY_CATEGORY_SUCCESS,
        payload: data
    };
};
