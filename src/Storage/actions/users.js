import {
    ADD_USER,
    LET_USER_BE_LOGGED,
    DID_USER_REGISTERED,
    REMOVE_LOGGED_USER
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
export const didUserRegisterd = () => {
    return {
        type: DID_USER_REGISTERED,
        is:true
    }
}
export const removeCurrentUser = () => {
    return {
        type: REMOVE_LOGGED_USER
       
    }
}
