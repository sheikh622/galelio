import produce from 'immer';
import { GET_ALL_NFT_SUCCESS } from './constants';

const INITIAL_STATE = {
    nftList: []
};

const nftReducer = produce((draft, action) => {
    switch (action.type) {
        case GET_ALL_NFT_SUCCESS:
            draft.nftList = action.payload;
            break;

        default:
    }
}, INITIAL_STATE);

export default nftReducer;
