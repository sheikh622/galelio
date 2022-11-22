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
import brand from 'redux/brand/reducers';
import category from 'redux/categories/reducers';
import subAdminReducer from 'redux/subAdmin/reducers';
import brandadminReducer from 'redux/brandAdmin/reducers';
import nftByCategoryReducer from 'redux/nftManagement/reducers';

// ==============================|| COMBINE REDUCER ||============================== //

const rootReducer = combineReducers({
    customization: customizationReducer,
    snackbar: snackbarReducer,
    cart: cartReducer,
    kanban: kanbanReducer,
    auth: AuthReducer,
    brand: brand,
    category: category,
    subAdminReducer: subAdminReducer,
    brandadminReducer: brandadminReducer,
    nftsByCategoryReducer: nftByCategoryReducer
});

export default rootReducer;
