import produce from 'immer';
import {
   
    GET_ALL_ADMINS_SUCCESS,

} from './constants';

const INITIAL_STATE = {
    adminsList: [],
   
 
};

const adminReducer = produce((draft, action) => {
    switch (action.type) {
        case GET_ALL_ADMINS_SUCCESS:
            draft.adminsList = action.payload;
           
            break;
       
        default:
    }
}, INITIAL_STATE);

export default adminReducer;
