import {
    GET_ALL_NFT_SUPER_ADMIN,
    GET_ALL_NFT_SUPER_ADMIN_SUCCESS,
    GET_ALL_NFT,
    GET_ALL_NFT_SUCCESS,
    ADD_NFT,
    MINT_NFT,
    LAZY_MINT_NFT,
    REQUEST_NFT_FOR_MINTING,
    EDIT_NFT
} from './constants';

export const getAllNftSuperAdmin = (data) => {
    return {
        type: GET_ALL_NFT_SUPER_ADMIN,
        payload: data
    };
};

export const getAllNftSuccessSuperAdmin = (data) => {
    return {
        type: GET_ALL_NFT_SUPER_ADMIN_SUCCESS,
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
