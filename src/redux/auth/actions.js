import { LOGIN, LOGIN_SUCCESS
    ,SIGN_UP,SIGN_UP_SUCCESS, 
    SIGN_UP_SOCIAL,SIGN_UP_SOCIAL_SUCCESS, 
    LOGOUT, FORGOT_PASSWORD, RESET_PASSWORD, 
    SET_WALLET_ADDRESS, SET_LOADER } from './constants';



export const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    };
};

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    };
};

export const signup = (data) => {
    return {
        type: SIGN_UP,
        payload: data
    };
};

export const signupSuccess = (data) => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: data
    };
};
export const signupsocial = (data) => {
    return {
        type: SIGN_UP_SOCIAL,
        payload: data
    };
};

export const signupsocialSuccess = (data) => {
    return {
        type: SIGN_UP_SOCIAL_SUCCESS,
        payload: data
    };
};


export const setLoader = (data) => {
    return {
        type: SET_LOADER,
        payload: data
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};

export const forgotPassword = (data) => {
    return {
        type: FORGOT_PASSWORD,
        payload: data
    };
};
export const resetPassword = (data) => {
    return {
        type: RESET_PASSWORD,
        payload: data
    };
};
export const setWallet = (data) => {
    return {
        type: SET_WALLET_ADDRESS,
        payload: data
    };
};
