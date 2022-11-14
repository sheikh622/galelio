import produce from 'immer';
import {
   
    GET_NFTS_BY_CATEGORY_SUCCESS,

} from './constants';

const INITIAL_STATE = {
    nftsByCategoryList: [],
   
 
};

const nftsByCategoryReducer = produce((draft, action) => {
    switch (action.type) {
        case GET_NFTS_BY_CATEGORY_SUCCESS:
            draft.nftsByCategoryList = action.payload;
           
            break;
       
        default:
    }
}, INITIAL_STATE);

export default nftsByCategoryReducer;
