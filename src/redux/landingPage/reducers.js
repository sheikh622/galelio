import produce from 'immer';
import { GET_ALL_LANDING_PAGE_DATA_SUCCESS } from './constants';

const INITIAL_STATE = {
    landingPageData: []
};

const landingPageReducer = produce((draft, action) => {
    switch (action.type) {
        case GET_ALL_LANDING_PAGE_DATA_SUCCESS:
            draft.landingPageData = action.payload;
            break;

        default:
    }
}, INITIAL_STATE);

export default landingPageReducer;
