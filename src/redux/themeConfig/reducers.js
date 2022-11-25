import produce from 'immer';
import { CHANGE_MODE } from './constants';

const INITIAL_STATE = {
    mode: ''
};

const mode = produce((draft, action) => {
    switch (action.type) {
        case CHANGE_MODE:
            draft.mode = action.payload;

            break;

        default:
    }
}, INITIAL_STATE);

export default mode;
