import produce from 'immer';
import {
   
    GET_ALL_PRODUCT_SUCCESS,

} from './constants';

const INITIAL_STATE = {
    productList: [],
   
 
};

const delivery = produce((draft, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT_SUCCESS:
            draft.productList = action.payload;
            break;
       
        default:
    }
}, INITIAL_STATE);

export default delivery;
