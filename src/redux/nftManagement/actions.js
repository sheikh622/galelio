import {
    GET_ALL_NFT_SUPER_ADMIN,
    GET_ALL_NFT_SUPER_ADMIN_SUCCESS,
    GET_ALL_NFT_USER_SUCCESS,
    GET_ALL_NFT,
    GET_ALL_NFT_SUCCESS,
    ADD_NFT,
    MINT_NFT,
    LAZY_MINT_NFT,
    REQUEST_NFT_FOR_MINTING,
    EDIT_NFT,
    DELETE_NFT,
    REJECT_NFT,
    BUY_NFT,
    GET_ALL_NFT_USER,
    RESELL_NFT,
    REDEEM_NFT
} from './constants';

export const getAllNftSuperAdmin = (data) => {
    return {
        type: GET_ALL_NFT_SUPER_ADMIN,
        payload: data
    };
};

export const getAllNftUser = (data) => {
    return {
        type: GET_ALL_NFT_USER,
        payload: data
    };
};
export const getAllNftSuccessSuperAdmin = (data) => {
    return {
        type: GET_ALL_NFT_SUPER_ADMIN_SUCCESS,
        payload: data
    };
};
export const getAllNftSuccessUser= (data) => {
    return {
        type: GET_ALL_NFT_USER_SUCCESS,
        payload: data
    };
};

export const getAllNft = (data) => {
    return {
        type: GET_ALL_NFT,
        payload: data
    };
};

export const getAllNftSuccess = (data) => {
    return {
        type: GET_ALL_NFT_SUCCESS,
        payload: data
    };
};

export const addNft = (data) => {
    return {
        type: ADD_NFT,
        payload: data
    };
};

export const buyNft = (data) => {
    return {
        type: BUY_NFT,
        payload: data
    };
};
export const resellNft = (data) => {
    return {
        type: RESELL_NFT,
        payload: data
    };
};
export const redeemNft = (data) => {
    return {
        type: REDEEM_NFT,
        payload: data
    };
};


export const deleteNft = (data) => {
    return {
        type: DELETE_NFT,
        payload: data
    };
};


export const editNft = (data) => {
    return {
        type: EDIT_NFT,
        payload: data
    };
};


export const requestNftForMinting = (data) => {
    return {
        type: REQUEST_NFT_FOR_MINTING,
        payload: data
    };
};

export const lazyMintNft = (data) => {
    return {
        type: LAZY_MINT_NFT,
        payload: data
    };
};

export const mintNft = (data) => {
    return {
        type: MINT_NFT,
        payload: data
    };
};

export const rejectNft = (data) => {
    return {
        type: REJECT_NFT,
        payload: data
    };
};