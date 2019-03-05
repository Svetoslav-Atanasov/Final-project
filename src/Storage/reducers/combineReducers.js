import { combineReducers } from 'redux'
import userReducer from './userReducer'
import offerReducer from './offerReducer'

const reducers = combineReducers({
    user: userReducer,
    //kogato izpolzvame user - state shte byde tozi na user i obratnoto
    offer: offerReducer
})
export default reducers;

//kogato ima mnogo reduceri - imam funckiq combine reducer -  i im davame za koj slice ogovarqt te
//tova razcepva stora na nqkolko parcheta i za vsqko parche si otgovarq nqkoi reducer