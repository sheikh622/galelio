// import { combineReducers } from 'redux';
import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// reducer import
import customizationReducer from './themeReducers/customizationReducer';
import snackbarReducer from './themeReducers/snackbarReducer';
import cartReducer from './themeReducers/cartReducer';
import kanbanReducer from './themeReducers/kanbanReducer';
import AuthReducer from 'redux/auth/reducers';


// ==============================|| COMBINE REDUCER ||============================== //

const rootReducer = combineReducers({
    // router: connectRouter(history),
    customization: customizationReducer,
    snackbar: snackbarReducer,
    cart: cartReducer,
    // cart: persistReducer(
    //     {
    //         key: 'cart',
    //         storage,
    //         keyPrefix: 'berry-'
    //     },
    //     cartReducer
    // ),
    kanban: kanbanReducer,
    auth:AuthReducer,
   
   
});

export default rootReducer;
