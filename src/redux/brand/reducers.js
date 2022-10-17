import produce from 'immer';
import {
   
    GET_ALL_BRANDS_SUCCESS,

} from './constants';

const INITIAL_STATE = {
    brandsList: [],
   
 
};

const brand = produce((draft, action) => {
    switch (action.type) {
        case GET_ALL_BRANDS_SUCCESS:
            draft.brandsList = action.payload;
           
            break;
       
        default:
    }
}, INITIAL_STATE);

export default brand;
