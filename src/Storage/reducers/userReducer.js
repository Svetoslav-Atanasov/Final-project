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
        userList: [
            { id: 0, email: 'admin@admin.bg', password: 'admin', vouchersInCart: [], bought: [] },
            { id: 1, email: 'test@abv.bg', password: 'test', vouchersInCart: [], bought: [] }
        ],
        currentUser: false
    };
    if(sessionStorage.getItem('userList')){
        initialStateUser.userList = JSON.parse(sessionStorage.getItem('userList'))
    }
    // if (sessionStorage.getItem('currentUser')){
    //     initialStateUser.currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    // }
    


// if sessionstorage has bought items -> put into initial state


export const userReducer = (state = initialStateUser, action) => {
    // sessionStorage.setItem('initialStateUser',JSON.stringify(state));

    switch (action.type) {
        case ADD_USER:

            {
                const newState = {...state };
                const newUserList = newState.userList;
                newUserList.push(action.user);
                newState.userList = newUserList;

                sessionStorage.setItem('userList', JSON.stringify(newUserList));

                return newState;


            }
        case LET_USER_BE_LOGGED:
            {
                return ({...state, currentUser: action.user })

            }
        case DID_USER_REGISTERED:
            {
                return ({...state, didUserRegisterd: action.is });
            }
        case REMOVE_LOGGED_USER:
            {

                const newState = {...state, currentUser: null }
                return newState;
            }

        case VOUCHER_TO_CART:
            {
                const newState = {...state };
                const newUserList = [...newState.userList];
                const index = newUserList.findIndex(user => user.id === action.idUser);
                const newUser = newUserList[index];


                newUser.vouchersInCart.push(action.orderdVoucher);
                newUserList[index] = newUser;
                newState.userList = newUserList;
                // const newCurrentUser = newUser; 
                newState.currentUser = newUser;
                sessionStorage.setItem('userList', JSON.stringify(newUserList))
                return newState;
            }

        case REMOVE_VOUCHER_FROM_SHOPPING_CART:
            {

                const newState = {...state };
                const newCurrentUser = {...newState.currentUser };
                const newUserList = [...newState.userList];
                const indexUser = newUserList.findIndex(user => user.id === newCurrentUser.idUser);
                let newVouchersInCart = [...newCurrentUser.vouchersInCart];
                const indexVoucher = newVouchersInCart.findIndex(v => v.number === action.voucherNumber);

                newVouchersInCart.splice(indexVoucher, 1)
                newCurrentUser.vouchersInCart = newVouchersInCart;
                newUserList[indexUser] = newCurrentUser;
                newState.userList = newUserList;
                newState.currentUser = newCurrentUser;
                sessionStorage.setItem('userList', JSON.stringify(newUserList));
                return newState;
            }
        case BUY:
            {

                //put into session storage
                const newState = {...state };
                const newCurrentUser = {...newState.currentUser };
                const newUserList = [...newState.userList];
                const indexUser = newUserList.findIndex(user => user.id === newCurrentUser.id);
                let newVouchersInCart = [...newCurrentUser.vouchersInCart];
                let newBought = [...newCurrentUser.bought]
                const indexVoucher = newVouchersInCart.findIndex(v => v.number === action.voucherNumber);
                const boughtVoucher = newVouchersInCart[indexVoucher];

                newVouchersInCart.splice(indexVoucher, 1);
                newBought.push(boughtVoucher);
                newCurrentUser.vouchersInCart = newVouchersInCart;
                newCurrentUser.bought = newBought;
                newUserList[indexUser] = newCurrentUser;
                newState.userList = newUserList;
                newState.currentUser = newCurrentUser;
                sessionStorage.setItem('userList', JSON.stringify(newUserList));
                return newState;
            }

        default:
            return state;
    }
}



const initialStateOffers = {
    offerList: [{
            id: 1,
            isExpired: true,
            name: "Saglasie theatre play",
            description: "A tragedy of love",
            fullDescription: 'A world of successful, but terribly confused people... Men who have lost their main landmarks. People hungry by doubt. Occasionally anger. Anxious and tense. Harnessed in a centrifugal carousel... Nina Rhine, author of "Saglasie", builds with love a frightening world. The key word in the play "Consent" is co-suffering. Are we able to test it? Do we believe that the pain of others must also be ours? Are we able to overcome our selfishness and self-sufficiency and build a fairer human community? Walls or bridges are in our minds?',
            oldPrice: 30,
            price: 10,
            category: "Culture",
            expirationDate: "2019.03.09",
            image: "https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/cp0/e15/q65/p960x960/51794288_10157216040984548_6390627658153066496_o.jpg?_nc_cat=101&efg=eyJpIjoidCJ9&_nc_ht=scontent.fsof3-1.fna&oh=a0d2751197940e5b20073a5ec3cbef1f&oe=5CDAE943"
        },
        {
            id: 2,
            isExpired: false,
            name: "Leon Bridges concert",
            description: "Soul singer concert",
            fullDescription: "Grammy Award winner Leon Bridges' first strides as a soul inspired R&B artist prompted comparisons to legends like Sam Cooke and Otis Redding, but he quickly came into his own as a Top Ten, Grammy Award winning, globally touring artist. The 28 year old singer, songwriter honed his talent performing in and around his native Fort Worth, Texas, at open mic nights. Leon attracted industry attention when the venerable music and culture site Gorilla-vs-Bear posted uploads of analog recordings produced by Niles City Sound’s Josh Block and Austin Jenkins. Signed to Columbia Records, Bridges' first singles, including a rich ballad written about his mother, appeared in February 2015 with a sound that evoked classic R&B and soul. His debut album, Coming Home, followed four months later. It debuted at number six on the Billboard 200 and was nominated for two Grammys: Best R&B Album & Best Music Video.",
            oldPrice: 150,
            price: 54,
            category: "Culture",
            expirationDate: "2019.03.12",
            image: "http://thekey.xpn.org/aatk/files/2015/10/LeonBridges-18.jpg"
        },
        {
            id: 3,
            isExpired: false,
            name: "IO Last On Earth",
            description: "The mystery sci-fi thriller",
            fullDescription: "Sam (Margaret Qualley), one of the last survivors on a post-cataclysmic Earth, is a young scientist dedicated to finding a way for humans to adapt and survive, rather than abandon their world. But with the final shuttle scheduled to leave the planet for a distant colony, her determination to stay is rocked by the arrival of another survivor, Micah (Anthony Mackie). She must decide whether to journey with him to join the rest of humanity and begin life anew, or stay to fight for Earth's survival.",
            oldPrice: 17,
            price: 8,
            category: "Culture",
            expirationDate: "2019.03.10",
            image: "https://www.whats-on-netflix.com/wp-content/uploads/2019/01/io-netflix-ending-explained.jpg"
        },
        {
            id: 4,
            isExpired: true,
            name: "Sushi",
            description: "A dozen of delicious sushi just for you",
            fullDescription: "Almost synonymous with Japanese cuisine and one of Japan’s major symbols, sushi is one of the most mind-boggling yet delicious types of food in the world. The idea of eating raw fish may make you cringe at first, but there’s a reason why it is the beloved food of the Japanese people for centuries and why it has taken the world by storm in recent years.",
            oldPrice: 55,
            price: 32,
            category: "Eating Out",
            expirationDate: "2019.03.08",
            image: "https://ecs7.tokopedia.net/img/product-1/2018/12/5/45119439/45119439_7495e541-32aa-4f83-a8b0-755f731b6e60_1920_1080.jpg"
        },
        {
            id: 5,
            isExpired: false,
            name: "Pasta",
            description: "Home-made pasta for the whole family",
            fullDescription: "Pasta is a universal product that can be used to make a huge variety of meals. According to one of the versions, translated from Greek, the word “pasta” means “happiness”. This food contains specific amino acids that help to eliminate negative thoughts. Complex carbohydrates aid production of the hormone serotonin, which is responsible for positive emotions.",
            oldPrice: 20,
            price: 12,
            category: "Eating Out",
            expirationDate: "2019.03.11",
            image: "https://static01.nyt.com/images/2016/08/15/dining/15COOKING-PASTA/15COOKING-PASTA-threeByTwoMediumAt2X-v2.jpg"
        },
        {
            id: 6,
            isExpired: false,
            name: "Salad",
            description: "A proper salad for your healthy diet",
            fullDescription: "Right now is the perfect time to enjoy a crisp, cool, refreshing salad. We love making salads with the fresh, organic produce from our local vendors. Whether it's a salad from our grab'n'go, salad bar, or a salad made at home, we can prepare your favorites!",
            oldPrice: 16,
            price: 8,
            category: "Eating Out",
            expirationDate: "2019.04.01",
            image: "https://assets.bonappetit.com/photos/5ad51b07ff795274c43a0f58/16:9/w_1200,c_limit/20180403_Basically_122.jpg"
        },
        {
            id: 7,
            isExpired: false,
            name: "Paris",
            description: "The city of love for a whole week",
            fullDescription: "The most visited tourist destination in the world, with over 45 million visitors annually, it is very easy to arrive in Paris with huge expectations: of grand vistas, of budding writers in every cafe, of romance on the Seine and rude waiters. The estimated 2.2 million inhabitants of Paris are all very proud to be Parisian, and so they should be. Which city has been more romanticized in literature and film? In fact there are 65 films (and counting) that star the Eiffel Tower as a significant feature. And that's just a small fraction of the number of films that merely feature the Eiffel Tower either as a symbol of French or European lifestyle or as an example of something beautiful.",
            oldPrice: 980,
            price: 333,
            category: "Vacations",
            expirationDate: "2019.03.20",
            image: "http://www.alriyadh.com/media/thumb/08/06/1000_86966d469e.jpg"
        },
        {
            id: 8,
            isExpired: false,
            name: "New York",
            description: "Fulfill your American dream now",
            fullDescription: "Welcome to NYC. Planning a trip to the five boroughs can be part of the fun, but there’s also a lot of ground to cover. Click the categories on the left-side/top navigation to find information about subjects that require in-depth looks, such as transportation and accessibility. Below you’ll find quick overviews on other essential things, like the City’s layout, the local time zone and various visitor passes.",
            oldPrice: 1270,
            price: 654,
            category: "Vacations",
            expirationDate: "2019.04.05",
            image: "https://strandmag.com/wp-content/uploads/2017/08/From-Hidden-Tunnels-to-History...Eight-Ways-to-Get-Your-Non-Food-Kicks-in-Chinatown--1024x682.jpg"
        },
        {
            id: 9,
            isExpired: false,
            name: "Tokyo",
            description: "Technology giants, ancient culture and manga",
            fullDescription: "Tokyo, one of the world's largest cities, offers a uniquely eclectic mix of traditional and contemporary attractions. Please enjoy and discover Tokyo and beyond during your stay for a conference, meeting or business travel.",
            oldPrice: 3400,
            price: 1256,
            category: "Vacations",
            expirationDate: "2019.05.29",
            image: "https://cdn.fodors.com/wp-content/uploads/2018/07/shutterstock_1012724596.jpg"
        }
    ],
    filtered: []
};

export const offerReducer = (state = initialStateOffers, action) => {

    switch (action.type) {
        case SET_FILTERED:
            {
                return ({...state, filtered: action.filtered });
            }
        default:
            return state;
    };
};

const initialStateVouchers = {

    voucherList: [],
    orderedList: []

};
if (sessionStorage.getItem('voucherList')) {
    initialStateVouchers.voucherList = JSON.parse(sessionStorage.getItem('voucherList'))
} else {
    initialStateVouchers.voucherList = []
}
if (sessionStorage.getItem('orderedList')) {
    initialStateVouchers.orderedList = JSON.parse(sessionStorage.getItem('orderedList'))
} else {
    initialStateVouchers.orderedList = []
}


export const voucherReducer = (state = initialStateVouchers, action) => {

    switch (action.type) {


        case MARK_AS_USED:
            {

                const newState = {...state };
                const newVoucherList = [...newState.voucherList];
                const indexVoucher = newVoucherList.findIndex(v => v.number === action.voucherNumber);

                newVoucherList[indexVoucher].isUsed = true;
                const used = newVoucherList[indexVoucher]
                newVoucherList.splice(indexVoucher, 1)
                newVoucherList.push(used)
                newState.voucherList = newVoucherList;

                sessionStorage.setItem('voucherList', JSON.stringify(newVoucherList));
                return newState;
            }
        case ORDERD:
            {
                const newState = {...state };
                const neworderedList = newState.orderedList;
                neworderedList.push(action.orderdVoucher);
                newState.orderedList = neworderedList;
                sessionStorage.setItem('orderedList', JSON.stringify(neworderedList));
                return newState;
            }
        case ADD_VOUCHER:
            {
                const newState = {...state };
                const newOrderedList = newState.orderedList;
                const index = newOrderedList.findIndex(o => o.number === action.voucherNumber);
                const voucher = {...newOrderedList[index], isUsed: false };
                const newVoucherList = [...newState.voucherList];
                console.log('noviq vaucherList ')
                console.log(newVoucherList)
                newVoucherList.push(voucher);

                newState.voucherList = newVoucherList;
                sessionStorage.setItem('voucherList', JSON.stringify(newVoucherList));
                return newState;

            }
        default:
            return state;
    }
}