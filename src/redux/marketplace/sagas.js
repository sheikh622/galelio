import axios from '../../utils/axios';
import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { makeSelectAuthToken } from 'store/Selector';
import { GET_ALL_MARKETPLACE_CATEGORIES, GET_ALL_MARKETPLACE_NFTS_BY_CATEGORY,GET_ALL_SIMILAR_PRODUCTS,TRACKING_TOOL_SUCCESS  } from './constants';
import { getAllMarketplaceCategoriesSuccess, getAllMarketplaceNftsByCategorySuccess,getAllSimilarProductsSuccess ,
     } from './actions';
import { sagaErrorHandler } from '../../shared/helperMethods/sagaErrorHandler';
import { setNotification } from '../../shared/helperMethods/setNotification';





function* trackingToolRequest({payload}) {
    try {
        const Axios = require('axios');
        let graphQLURL =  "https://api.studio.thegraph.com/query/44351/factory-graph2/17";
        const response = yield Axios.post(graphQLURL, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',     
                'X-Requested-With': 'XMLHttpRequest'
            },
            query: `{
                galileoProtocolDeployeds(first: 5) {
                    id
                    _mintingContract
                    blockNumber
                    blockTimestamp
                }
                handleUpdateUris(where:{collections:${payload.address}, tokenId:${payload.tokenId}}){
                    newTokenURI
                    oldTokenURI
                    blockTimestamp
                }
                handleUpdatedBulkUris(where:{collections:${payload.address}}){
                    newTokenURI
                    oldTokenURI
                    blockTimestamp
                }
                handleMints(where:{collections:${payload.address}, tokenId:${payload.tokenId}}){
                    minter
                    tokenId
                    blockTimestamp
                }
                handleMintBulks(where:{collections:${payload.address}}){
                    minter
                    blockTimestamp
                }
                transfers(where:{collections:${payload.address}, from_not:"0x0000000000000000000000000000000000000000" },, orderBy: blockTimestamp){
                    to
                    from
                    tokenId
                    blockTimestamp
                }
                transferMultipleNfts(where:{collections:${payload.address}, from_not:"0x0000000000000000000000000000000000000000", tokenIDs:["1"] }){
                    to
                    from
                    tokenIDs
                    blockTimestamp
                }
            }`,
        });
        // yield put(getTrackSuccess(response.data.data));
        // console.log('success========>', response);
        console.log('Query result: \n , success ', response.data);
    } catch (error) {
        // yield sagaErrorHandler(error.response.data.data);
        console.log('error');

    }
}

export function* watchTrackingTool() {
    yield takeLatest(TRACKING_TOOL_SUCCESS, trackingToolRequest);
}
function* getAllSimilarProductsRequest({payload}) {
    try {
        const response = yield axios.get(
            `/nft/similarProducts/${payload.categoryId}?&size=${payload.limit}&page=${payload.page}&search=${payload.search}&nftId=${payload.nftId}`
        );
        yield put(getAllSimilarProductsSuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllSimilarProducts() {
    yield takeLatest(GET_ALL_SIMILAR_PRODUCTS, getAllSimilarProductsRequest);
}


function* getAllMarketplaceCategoriesRequest() {
    try {
        const response = yield axios.get(`/category/marketplace`);
        yield put(getAllMarketplaceCategoriesSuccess(response.data.data));
        console.log(response,'response');
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllMarketplaceCategories() {
    yield takeLatest(GET_ALL_MARKETPLACE_CATEGORIES, getAllMarketplaceCategoriesRequest);
}

function* getAllMarketplaceNftsByCategoryRequest({ payload }) {
    try {
        const response = yield axios.get(
            `/nft/category/${payload.categoryId}?&size=${payload.limit}&page=${payload.page}&search=${payload.search}`
        );
        yield put(getAllMarketplaceNftsByCategorySuccess(response.data.data));
    } catch (error) {
        yield sagaErrorHandler(error.response.data.data);
    }
}

export function* watchGetAllMarketplaceNftsByCategory() {
    yield takeLatest(GET_ALL_MARKETPLACE_NFTS_BY_CATEGORY, getAllMarketplaceNftsByCategoryRequest);
}


export default function* marketplaceSaga() {
    yield all([fork(watchGetAllMarketplaceCategories), fork(watchGetAllMarketplaceNftsByCategory),
        fork(watchGetAllSimilarProducts),
        fork(watchTrackingTool),
        
    ]);
}
