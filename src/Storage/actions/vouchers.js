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
export const voucherBuy = orderedVoucherNumber => {
    return{
        type: ADD_VOUCHER,
        orderedVoucherNumber
    }
}
export const markAsUsed = voucherNumber => {
    return {
        type: MARK_AS_USED,
        voucherNumber
    }
}