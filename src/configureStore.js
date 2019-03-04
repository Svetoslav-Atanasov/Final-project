import { createStore } from 'redux'
// importvame vsichki reduceri, koito polzvame v nasheto prilojenie
import userReducer from './Storage/reducers/userReducer'

const store = createStore(userReducer);
export default store;


//kogato ima mnogo reduceri - imam funckiq combine reducer -  i im davame za koj slice ogovarqt te
//tova razcepva stora na nqkolko parcheta i za vsqko parche si otgovarq nqkoi reducer