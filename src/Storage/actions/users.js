import {
    ADD_USER,
    LET_USER_BE_LOGGED,
    DID_USER_REGISTERED,
    SHOW_ALL_USER_VAUCHERS,
    SHOW_ALL_VAUCHER
} from './actionTypes';

export const addUser = user => {
    return {
        type: ADD_USER,
        user
    }
} 
export const setCurrentUser = user => {
    return {
        type: LET_USER_BE_LOGGED,
        user
    }
}
export const didUserRegisterd = () =>{
    return {
        type: DID_USER_REGISTERED,
        is:true
    }
}