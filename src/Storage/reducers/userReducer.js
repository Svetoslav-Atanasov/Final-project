import {
    ADD_USER,
    LET_USER_BE_LOGGED,
    DID_USER_REGISTERED,
    REMOVE_LOGGED_USER,
    VOUCHER_TO_CART
} from '../actions/actionTypes';
// import { User } from '../Constructors/UserConstructor'

const initialState =  {
    currentUser : null,
    userList : [
        {id:0 , email:'test@abv.bg', password:'test', vouchersInCart : []}
    ],
    didUserRegisterd : false
};

const userReducer = (state = initialState, action) => {
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
            
                const newState = {...state, currentUser:null}
                return newState;
        }
        case VOUCHER_TO_CART :{
            const newState = {...state};
            const newUserList=[...newState.userList];
            const index = newUserList.findIndex(user=>user.id === action.id);
            const newUser = newUserList[index];
            
            newUser.vouchersInCart.push(action.voucher);          
            newUserList[index] = newUser;
            newState.userList = newUserList;
            return newState
        }
        default: return state;
    }
}


export default userReducer;
        