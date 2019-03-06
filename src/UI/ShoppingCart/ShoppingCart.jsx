import React, { Component } from "react";
import shoppingCart from '../../assets/images/shoppingCart.png'
import orangeCircle from '../../assets/images/orangeCircle.png'
import { connect } from "react-redux";
import styles from "./ShoppingCart.module.css";


class ShoppingCart extends Component{
       
render(){
  
    console.log('shopping cart rendered')


 // tuk proverqvame, ako dyljinata na masiva, koito dyrji vaucherite v kartata na potrebitelq
 //e razlichna ot 0 -> to znachi kartata ne e prazna i izkarvame indikator горе на количката
    return(
        <div>
            <div>
            <img width="40" height="40" src={shoppingCart} />
            </div>
            <div className={styles.orangeDot}>
            {/* ako e razlichno ot 0  pokaji krygcheto  */}
                {this.props.current.vouchersInCart.length!==0 ? <img width="30" height="30" src={orangeCircle}/> : null }
            {/* v krygcheto sloji broikata - koqto e dyljinata na vaucherite v kolichkata/kartata */}
                <div className={styles.number}>{this.props.current.vouchersInCart.length}</div>
            </div>
        </div>
    );
}

}



const mapStateToProps = state => {
    return {
      current: state.user.currentUser,
      itemsInCart : state.user.currentUser.vouchersInCart.length
    };
  };

  
  export default connect(mapStateToProps,null)(ShoppingCart);