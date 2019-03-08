import {
    ADD_USER,
    LET_USER_BE_LOGGED,
    DID_USER_REGISTERED,
    REMOVE_LOGGED_USER,
    VOUCHER_TO_CART,
    REMOVE_VOUCHER_FROM_SHOPPING_CART,
    BUY,
    MARK_AS_USED,
    SET_FILTERED,
    ADD_VOUCHER,
    ORDERD
} from '../actions/actionTypes';

const initialStateUser =  {
    currentUser : null,
    userList : [
        {id:0 , email:'test@abv.bg', password:'test', vouchersInCart : [], bought : [] }
    ],
    didUserRegisterd : false
};

// if sessionstorage has bought items -> put into initial state

export const userReducer = (state = initialStateUser, action) => {
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

            const index = newUserList.findIndex(user=>user.id === action.idUser);
            const newUser = newUserList[index];

            
            newUser.vouchersInCart.push(action.orderdVoucher);     
            newUserList[index] = newUser;
            newState.userList = newUserList;
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
            const indexVoucher = newVouchersInCart.findIndex(v=>v.number === action.orderedVoucherNumber);
            const boughtVoucher = newVouchersInCart[indexVoucher];      
            

            newVouchersInCart.splice(indexVoucher,1);
            newBought.push(boughtVoucher);
            newCurrentUser.vouchersInCart = newVouchersInCart;
            newCurrentUser.bought = newBought;
            newUserList[indexUser]=newCurrentUser;
            newState.userList = newUserList;
            newState.currentUser = newCurrentUser;

            //put into session storage
            return newState;
        }
       
        default: return state;
    }
}



const initialStateOffers = {
    offerList: [{
        id: 1,
        name: "Saglasie theatre play",
        description: "A tragedy of love",
        price: 10,
        category: "Culture",
        image: "https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/cp0/e15/q65/p960x960/51794288_10157216040984548_6390627658153066496_o.jpg?_nc_cat=101&efg=eyJpIjoidCJ9&_nc_ht=scontent.fsof3-1.fna&oh=a0d2751197940e5b20073a5ec3cbef1f&oe=5CDAE943"
    },
        {
            id: 2,
            name: "Leon Bridges concert",
            description: "Soul singer concert",
            price: 54,
            category: "Culture",
            image: "http://thekey.xpn.org/aatk/files/2015/10/LeonBridges-18.jpg"
        },
        {
            id: 3,
            name: "IO Last On Earth",
            description: "The mystery sci-fi thriller",
            price: 8,
            category: "Culture",
            image: "https://www.whats-on-netflix.com/wp-content/uploads/2019/01/io-netflix-ending-explained.jpg"
        },
        {
            id: 4,
            name: "Sushi",
            description: "A dozen of delicious sushi just for you",
            price: 32,
            category: "Eating Out",
            image: "https://ecs7.tokopedia.net/img/product-1/2018/12/5/45119439/45119439_7495e541-32aa-4f83-a8b0-755f731b6e60_1920_1080.jpg"
        },
        {
            id: 5,
            name: "Pasta",
            description: "Home-made pasta for the whole family",
            price: 12,
            category: "Eating Out",
            image: "https://static01.nyt.com/images/2016/08/15/dining/15COOKING-PASTA/15COOKING-PASTA-threeByTwoMediumAt2X-v2.jpg"
        },
        {
            id: 6,
            name: "Salad",
            description: "A proper salad for your healthy diet",
            price: 8,
            category: "Eating Out",
            image: "https://assets.bonappetit.com/photos/5ad51b07ff795274c43a0f58/16:9/w_1200,c_limit/20180403_Basically_122.jpg"
        },
        {
            id: 7,
            name: "Paris",
            description: "The city of love for a whole week",
            price: 333,
            category: "Vacations",
            image: "http://www.alriyadh.com/media/thumb/08/06/1000_86966d469e.jpg"
        },
        {
            id: 8,
            name: "New York",
            description: "Fulfill your American dream now",
            price: 654,
            category: "Vacations",
            image: "https://www.thebalancecareers.com/thmb/CiTDz6Wil7NCP66UF5d1_pZgoRI=/3865x2576/filters:no_upscale()/high-angle-view-of-lower-east-side-manhattan-downtown--new-york-city--usa-640006562-5ae52a273de423003776ae2e.jpg"
        },
        {   
            id: 9,
            name: "Tokyo",
            description: "The home of technology giants, ancient culture and manga for a special prize",
            price: 1256,
            category: "Vacations",
            image: "https://cdn.fodors.com/wp-content/uploads/2018/07/shutterstock_1012724596.jpg"
        }
    ],
    filtered : []
};

export const offerReducer = (state = initialStateOffers, action) => {

    switch (action.type) {
        case SET_FILTERED: {
            return (
                {...state, filtered : action.filtered}
            ) ;
        }
        default: return state;
    }
}


const initialStateVouchers =  {

    voucherList : [],
    orderedList : []

};

export const voucherReducer= (state = initialStateVouchers, action) => {

    switch (action.type) {
     

        case MARK_AS_USED : {

            const newState = {...state};
            const newVoucherList=[...newState.voucherList];
            const indexVoucher = newVoucherList.findIndex(v => v.number === action.voucherNumber);
          
            newVoucherList[indexVoucher].isUsed = true;
            newState.voucherList = newVoucherList;

            return newState;
        }
        case ORDERD : {
            const newState = {...state};
            const neworderedList = newState.orderedList;
            neworderedList.push(action.orderdVoucher);
            newState.orderedList = neworderedList;

            return newState;
        }
        case ADD_VOUCHER : {
            const newState = {...state};
            const newOrderedList = newState.orderedList;
            const index = newOrderedList.findIndex(o=> o.number === action.orderedVoucherNumber)
            const voucher = {...newOrderedList[index], isUsed : false}
            const newVoucherList = [...newState.voucherList];
            newVoucherList.push(voucher)
            newState.voucherList = newVoucherList;

            return newState

        }
        default: return state;
    }
}



        