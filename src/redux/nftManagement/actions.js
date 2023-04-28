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
    REDEEM_NFT,
    GET_NFT_BUYER_SUCCESS,
    GET_NFT_BUYER,
    ADD_DELIVERY_NFT,
    CHANGE_TOKEN_ID,
    GET_EDITED_NFT_DATA,
    UPDATE_NFT_DYNAMIC_METADATA,
    ADD_SBTTOKEN,
    GET_ALL_SBTTOKEN_SUCCESS,
    GET_ALL_SBTTOKEN
} from './constants';

export const updateNftDynamicMetaData = (data) => {
    return {
        type: UPDATE_NFT_DYNAMIC_METADATA,
        payload: data
    };
};



export const getEditedNftData = (data) => {
    return {
        type: GET_EDITED_NFT_DATA,
        payload: data
    };
};





export const getAllNftSuperAdmin = (data) => {
    return {
        type: GET_ALL_NFT_SUPER_ADMIN,
        payload: data
    };
};

export const getNftBuyer = (data) => {
    return {
        type: GET_NFT_BUYER,
        payload: data
    };
};
export const getNftBuyerSuccess = (data) => {
    return {
        type: GET_NFT_BUYER_SUCCESS,
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

export const changeTokenId = (data) => {
    return {
        type: CHANGE_TOKEN_ID,
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
export const addDeliveryNft = (data) => {
    return {
        type: ADD_DELIVERY_NFT,
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
export const addSbtToken = (data) => {
    return {
        type: ADD_SBTTOKEN,
        payload: data
    };
};
export const getsbtToken = (data) => {
    return {
        type: GET_NFT_BUYER,
        payload: data
    };
};
export const getsbtTokenSuccess = (data) => {
    return {
        type: GET_NFT_BUYER_SUCCESS,
        payload: data
    };
};
