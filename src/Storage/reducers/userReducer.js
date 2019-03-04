import {
    ADD_USER,
    LET_USER_BE_LOGGED,
    DID_USER_REGISTERED,
    REMOVE_LOGGED_USER
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
        case REMOVE_LOGGED_USER : {
            return(
                {...state, currentUser: null}
            )
        }
        default: return state;
    }
}

export default reducer;
        