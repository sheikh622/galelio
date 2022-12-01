import produce from 'immer';
import { GET_ALL_MARKETPLACE_CATEGORIES_SUCCESS, GET_ALL_MARKETPLACE_NFTS_BY_CATEGORY_SUCCESS } from './constants';

const INITIAL_STATE = {
    marketplaceCategories: [],
    marketplaceNfts: []
};

const marketplaceReducer = produce((draft, action) => {
    switch (action.type) {
        case GET_ALL_MARKETPLACE_CATEGORIES_SUCCESS:
            draft.marketplaceCategories = action.payload;
            break;
        case GET_ALL_MARKETPLACE_NFTS_BY_CATEGORY_SUCCESS:
            draft.marketplaceNfts = action.payload;
            break;

        default:
    }
}, INITIAL_STATE);

export default marketplaceReducer;
