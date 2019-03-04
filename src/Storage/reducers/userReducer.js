import {
    ADD_USER,
    LET_USER_BE_LOGGED,
    DID_USER_REGISTERED,
    SHOW_ALL_USER_VAUCHERS,
    SHOW_ALL_VAUCHER
} from '../actions/actionTypes';
import { User } from '../Constructors/UserConstructor'

const initialState =  {
    currentUser : null,
    userList : [
        {id:0 , email:'test@abv.bg', password:'test'}
    ],
    didUserRegisterd : false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            return (
                {...state, userList: [...state.userList, action.user]}
            ) ;
        }
        case LET_USER_BE_LOGGED:{
            return(
                {...state, currentUser: action.user}
            )
        }
        case DID_USER_REGISTERED : {
            return(
                {...state, didUserRegisterd : action.is }
            )
        }
        default: return state;
    }
}

export default reducer;
        