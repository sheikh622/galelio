import produce from 'immer';
import { GET_ALL_NFT_SUCCESS, GET_ALL_NFT_SUPER_ADMIN_SUCCESS } from './constants';

const INITIAL_STATE = {
    nftList: [],
    nftListSuperAdmin: []
};

const nftReducer = produce((draft, action) => {
    switch (action.type) {
        case GET_ALL_NFT_SUCCESS:
            draft.nftList = action.payload;
            break;

        case GET_ALL_NFT_SUPER_ADMIN_SUCCESS:
            draft.nftListSuperAdmin = action.payload;
            break;

        default:
    }
}, INITIAL_STATE);

export default nftReducer;
