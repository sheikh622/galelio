import {
    
    GET_ALL_NFT,
    GET_ALL_NFT_SUCCESS,
    ADD_NFT,
    MINT_NFT,
    LAZY_MINT_NFT,
    
} from './constants';

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


