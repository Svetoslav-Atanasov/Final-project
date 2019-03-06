import {
    ADD_USER,
    LET_USER_BE_LOGGED,
    DID_USER_REGISTERED,
    REMOVE_LOGGED_USER,
    VOUCHER_TO_CART,
    REMOVE_VOUCHER_FROM_SHOPPING_CART,
    BUY,
    MARK_AS_USED
} from '../actions/actionTypes';

const initialState =  {
    currentUser : null,
    userList : [
        {id:0 , email:'test@abv.bg', password:'test', vouchersInCart : [], bought : [] }
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
            // const newCurrentUser = newUser; 
            newState.currentUser = newUser;
            return newState;
        }
        case REMOVE_VOUCHER_FROM_SHOPPING_CART : {
       
            const newState = {...state};
            const newCurrentUser = {...newState.currentUser};
            const newUserList = [...newState.userList];
            const indexUser = newUserList.findIndex(user => user.id === newCurrentUser.id);
            let newVouchersInCart = [...newCurrentUser.vouchersInCart];
            const indexVoucher = newVouchersInCart.findIndex(v=>v.number === action.voucherNumber);
            
            newVouchersInCart.splice(indexVoucher,1)
            newCurrentUser.vouchersInCart = newVouchersInCart;
            newUserList[indexUser] = newCurrentUser;
            newState.userList = newUserList;
            newState.currentUser = newCurrentUser;
            return newState; 
        }
        case BUY : {
            const newState = {...state};
            const newCurrentUser = {...newState.currentUser};
            const newUserList = [...newState.userList];
            const indexUser = newUserList.findIndex(user => user.id === newCurrentUser.id);
            let newVouchersInCart = [...newCurrentUser.vouchersInCart];
            let newBought = [...newCurrentUser.bought]
            const indexVoucher = newVouchersInCart.findIndex(v=>v.number === action.voucherNumber);
            const boughtVoucher = newVouchersInCart[indexVoucher];
            
            newVouchersInCart.splice(indexVoucher,1);
            newBought.push(boughtVoucher);
            newCurrentUser.vouchersInCart = newVouchersInCart;
            newCurrentUser.bought = newBought;
            newUserList[indexUser]=newCurrentUser;
            newState.userList = newUserList;
            newState.currentUser = newCurrentUser;
            return newState;
        }
        case MARK_AS_USED : {
            console.log('vliza v tazi funkciq disatchnata')
            const newState = {...state};
            const newCurrentUser = {...newState.currentUser};
            const newUserList = [...newState.userList];
            const indexUser = newUserList.findIndex(user => user.id === newCurrentUser.id);
            const newBought = [...newCurrentUser.bought]
            const indexVoucher = newBought.findIndex(v=> v.number === action.voucherNumber)
            
            newBought[indexVoucher].isUsed = true;
            console.log('newBought[indexVoucher].isUsed')
            console.log(newBought[indexVoucher].isUsed)
            newCurrentUser.bought = newBought;
            newUserList[indexUser]=newCurrentUser;
            newState.userList = newUserList;
            newState.currentUser = newCurrentUser;
            return newState;

        }
        default: return state;
    }
}


export default userReducer;
        