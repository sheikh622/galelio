import { GET_ALL_LANDING_PAGE_DATA, GET_ALL_LANDING_PAGE_DATA_SUCCESS } from './constants';

export const getAllLandingPageData = () => {
    return {
        type: GET_ALL_LANDING_PAGE_DATA
    };
};

export const getAllLandingPageDataSuccess = (data) => {
    return {
        type: GET_ALL_LANDING_PAGE_DATA_SUCCESS,
        payload: data
    };
};
