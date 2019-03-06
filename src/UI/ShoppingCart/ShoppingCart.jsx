import React, { Component } from "react";
import shoppingCart from '../../assets/images/shoppingCart.png'
import orangeCircle from '../../assets/images/orangeCircle.png'
import { connect } from "react-redux";


class ShoppingCart extends Component{

render(){
const user = this.props.current;


    return(
        <div>
            {user.vouchersInCart.length!==0 ? <img width="20" height="20" src={orangeCircle}/> : null }
            <img width="40" height="40" src={shoppingCart} />
        </div>
    );
}

}



const mapStateToProps = state => {
    return {
      current: state.user.currentUser
    };
  };

  
  export default connect(mapStateToProps,null)(ShoppingCart);