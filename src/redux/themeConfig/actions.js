import { CHANGE_MODE } from './constants';

export const changeMode = (data) => {
    return {
        type: CHANGE_MODE,
        payload: data
    };
};
