import {
    ADD_USER,
    LET_USER_BE_LOGGED,
    DID_USER_REGISTERED,
    REMOVE_LOGGED_USER,
    VOUCHER_TO_CART,
    REMOVE_VOUCHER_FROM_SHOPPING_CART,
    BUY,
    ADD_TO_SEEN
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
export const getToCart = (idUser,orderdVoucher) =>{
    return {
        type: VOUCHER_TO_CART,
        idUser,
        orderdVoucher      
    }
}
export const removeFromCart = (voucherNumber,idUser) => {
    return {
        type: REMOVE_VOUCHER_FROM_SHOPPING_CART,
        idUser,
        voucherNumber
    }
}
export const userBuy = (voucherNumber,idUser) => {
    return {
        type: BUY,
        idUser,
        voucherNumber
    }
}
export const getToSeen = offerId =>{
    return {
        type: ADD_TO_SEEN,
        offerId
    }
}




