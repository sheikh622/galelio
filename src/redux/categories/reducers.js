import produce from 'immer';
import {
   
    GET_ALL_CATEGORIES_SUCCESS,

} from './constants';

const INITIAL_STATE = {
    categoryList: [],
   
 
};

const brand = produce((draft, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES_SUCCESS:
            draft.categoryList = action.payload;
            break;
       
        default:
    }
}, INITIAL_STATE);

export default brand;
