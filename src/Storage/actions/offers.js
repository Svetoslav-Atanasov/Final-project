import {
    SET_FILTERED,
    
} from './actionTypes';

export const setFiltered = filtered => {
    return {
        type: SET_FILTERED,
        filtered
    }
} 