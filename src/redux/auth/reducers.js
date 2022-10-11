import produce from 'immer';
import { LOGIN_SUCCESS, LOGOUT, DASHBOARD_SUCCESS ,SET_LOADER} from './constants';

const INITIAL_STATE = {
    user: null,
    token: "",
    loader: false,
    dashboard:[]
    
};

const AuthReducer = produce((draft, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            draft.user = action.payload.user;
            draft.token = action.payload.auth;
            break;
        case DASHBOARD_SUCCESS:
            draft.dashboard = action.payload;
           
            break;
            case SET_LOADER:
                draft.loader = action.payload;
    
                break;
        case LOGOUT:
            draft.user = "";
            draft.token = "";
            break;
        default:
    }
}, INITIAL_STATE);

export default AuthReducer;
