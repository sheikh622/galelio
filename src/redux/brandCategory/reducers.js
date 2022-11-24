import produce from 'immer';
import { GET_ALL_BRAND_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_DROPDOWN_SUCCESS } from './constants';

const INITIAL_STATE = {
    brandCategoriesList: [],
    categoriesDropdownList: []
};

const brandCategoryReducer = produce((draft, action) => {
    switch (action.type) {
        case GET_ALL_BRAND_CATEGORIES_SUCCESS:
            draft.brandCategoriesList = action.payload;
            break;
        case GET_ALL_CATEGORIES_DROPDOWN_SUCCESS:
            draft.categoriesDropdownList = action.payload;
            break;

        default:
    }
}, INITIAL_STATE);

export default brandCategoryReducer;
