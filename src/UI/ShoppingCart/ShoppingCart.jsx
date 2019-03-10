import React, { Component } from "react";
import shoppingCart from "../../assets/images/shoppingCart.png";
import orangeCircle from "../../assets/images/orangeCircle.png";
import { connect } from "react-redux";
import styles from "./ShoppingCart.module.css";
import Zoom from "react-reveal/Zoom";


class ShoppingCart extends Component {
  render() {
    console.log("shopping cart rendered");

    // tuk proverqvame, ako dyljinata na masiva, koito dyrji vaucherite v kartata na potrebitelq
    //e razlichna ot 0 -> to znachi kartata ne e prazna i izkarvame indikator горе на количката
    return (
      <Zoom duration={1500}>
        <div>
          <div>
            <img width="40" height="40" src={shoppingCart} />
          </div>
          <div className={styles.orangeDot}>
            {/* ako e razlichno ot 0  pokaji krygcheto  */}
            {this.props.current.vouchersInCart.length !== 0 ? (
              <img width="20" height="20" src={orangeCircle} />
            ) : null}
            {/* v krygcheto sloji broikata - koqto e dyljinata na vaucherite v kolichkata/kartata */}
            <div className={styles.number}>
              {this.props.current.vouchersInCart.length}
            </div>
          </div>
        </div>
      </Zoom>
    );
  }
}

const mapStateToProps = state => {
  return {
    current: state.user.currentUser,
    itemsInCart: state.user.currentUser.vouchersInCart.length
  };
};

export default connect(
  mapStateToProps,
  null
)(ShoppingCart);
