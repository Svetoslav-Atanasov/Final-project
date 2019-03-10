import {
    SET_FILTERED,
    ADD_OFFER
    
} from './actionTypes';

export const setFiltered = filtered => {
    return {
        type: SET_FILTERED,
        filtered
    }
} 
export const addOffer = newOffer => {
    return {
        type: ADD_OFFER,
        newOffer
    }
}