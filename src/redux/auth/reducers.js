import produce from 'immer';
import { LOGIN_SUCCESS, SET_WALLET_ADDRESS, LOGOUT, SET_LOADER, SIGN_UP_SUCCESS } from './constants';

const INITIAL_STATE = {
    user: null,
    token: null,
    loader: false,
    walletAddress: null
};

const AuthReducer = produce((draft, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            draft.user = action.payload.user;
            draft.token = action.payload.token;
            break;
        case SIGN_UP_SUCCESS:
            draft.user = action.payload.user;
            draft.token = action.payload.token;

            break;
        case SET_LOADER:
            draft.loader = action.payload;
            break;
        case SET_WALLET_ADDRESS:
            draft.walletAddress = action.payload;
            break;
        case LOGOUT:
            draft.user = null;
            draft.token = null;
            break;
        default:
    }
}, INITIAL_STATE);

export default AuthReducer;
