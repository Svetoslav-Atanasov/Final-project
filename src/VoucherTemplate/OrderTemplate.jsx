import React, { Component } from "react";
import styles from "./VoucherTemplate.module.css";
import { connect } from "react-redux";
import Button from "../UI/Button/Button";
import { removeFromCart } from "../Storage/actions/users";
import { userBuy } from "../Storage/actions/users";
import { voucherBuy } from "../Storage/actions/vouchers";
import { withRouter } from "react-router";
import Zoom from "react-reveal/Zoom";

//po daden vaucher shte nameri, koq e ofertata i s nejnite danni shte popylni formata,
// kato dopylnitelno shte dobavi svoqta informaciq za broi
class OfferTemplate extends Component {
  // shouldComponentUpdate(nextProps,nextState){
  //         console.log('shouldupdate')
  //         console.log(nextProps.isUsed !== this.props.isUsed ? true : false)
  //     return nextProps.isUsed !== this.props.isUsed ? true : false
  // }

  ToBuy = (voucherNumber, idUser) => {
    this.props.userBuy(voucherNumber, idUser);
    this.props.voucherBuy(voucherNumber, idUser);
  };

  render() {
    // const title = (this.props.isUsed ? "USED" : "MARK AS USED")

    //    const isShoppingCart = "/myShoppingCart"
    // -id-to na ofertata se pazi vyv vauchera
    //namirame tozi vaucher, koito e renderiran za koq oferta e
    const offerId = this.props.offerId;

    //namirame ofertata po neinoto id i pokazvame sydyrjanieto ot neq
    const offerArr = this.props.vsichkiOferti.filter(
      offer => offer.id === offerId
    );
    // tyj kato oferitte sa v masiv a na nas ni trqbva 1
    const offer = offerArr[0];
    const voucherNumber = this.props.number;
    const idUser = this.props.idUser;
    console.log(
      "na buy, remove i kakvoto tam se vikat vaucher nomer = " +
        voucherNumber +
        "id user " +
        idUser
    );

    // trqbva da podam nomera na vouchera
    // sled koeto popylvame templeita s neshtata za ofertata

    return (
      <Zoom duration={1500}>
        <div className={styles.BorderTemplate}>
          <h1 className={styles.grabItVoucher}>Grab It Voucher</h1>
          <h2 className={styles.VoucherTitle}>{offer.name}</h2>
          <div className={styles.Content}>
            <div>
              <img className={styles.voucherImage} src={offer.image} />
            </div>
            <div>
              <div className={styles.voucherCartParagraph}>
                {offer.fullDescription}
              </div>
            </div>
          </div>
          <div className={styles.lowerParagraph}>
            <div className={styles.lowerParagraph}>
              <div className={styles.priceBorder}>
                <span>Price: {offer.price} BGN </span>
              </div>
              <div className={styles.priceBorder}>
                <span>Count: {this.props.broi} </span>
              </div>
              <div className={styles.priceBorder}>
                <span> Total Amount: {offer.price * this.props.broi} BGN</span>
              </div>
            </div>
            <div>
              <Button
                onClick={() => this.props.removeFromCart(voucherNumber, idUser)}
                title="REMOVE"
              />
              <Button
                onClick={() => this.ToBuy(voucherNumber, idUser)}
                title="BUY"
              />
            </div>
          </div>
        </div>
      </Zoom>
    );
  }
}

const mapStateToProps = state => {
  return {
    vsichkiOferti: state.offer.offerList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (voucherNumber, idUser) =>
      dispatch(removeFromCart(voucherNumber, idUser)),
    userBuy: (voucherNumber, idUser) =>
      dispatch(userBuy(voucherNumber, idUser)),
    voucherBuy: (voucherNumber, idUser) =>
      dispatch(voucherBuy(voucherNumber, idUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OfferTemplate));
