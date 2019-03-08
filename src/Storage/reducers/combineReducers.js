import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { offerReducer } from './userReducer'
import { voucherReducer } from './userReducer'

const reducers = combineReducers({
    user: userReducer,
    //kogato izpolzvame user - state shte byde tozi na user i obratnoto
    offer: offerReducer,
    voucher: voucherReducer
})
export default reducers;

//kogato ima mnogo reduceri - imam funckiq combine reducer -  i im davame za koj slice ogovarqt te
//tova razcepva stora na nqkolko parcheta i za vsqko parche si otgovarq nqkoi reducer