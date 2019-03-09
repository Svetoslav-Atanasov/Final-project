import {
    ADD_VOUCHER,
    ORDERD,
    MARK_AS_USED
} from './actionTypes';


export const goToOrdered = orderdVoucher =>{
    return {
        type: ORDERD,
        orderdVoucher      
    }
}
export const voucherBuy = (voucherNumber,idUser) => {
    return{
        type: ADD_VOUCHER,
        idUser,
        voucherNumber
    }
}
export const markAsUsed = voucherNumber => {
    return {
        type: MARK_AS_USED,
        voucherNumber
    }
}