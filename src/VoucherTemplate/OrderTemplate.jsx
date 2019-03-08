import React, { Component } from 'react';
import styles from './VoucherTemplate.module.css';
import { connect } from "react-redux";
import Button from '../UI/Button/Button'
import { removeFromCart } from '../Storage/actions/users'
import { userBuy } from '../Storage/actions/users'
import { voucherBuy } from '../Storage/actions/vouchers'
import { withRouter } from "react-router";

//po daden vaucher shte nameri, koq e ofertata i s nejnite danni shte popylni formata,
// kato dopylnitelno shte dobavi svoqta informaciq za broi
class OfferTemplate extends Component {

    // shouldComponentUpdate(nextProps,nextState){
    //         console.log('shouldupdate')
    //         console.log(nextProps.isUsed !== this.props.isUsed ? true : false)
    //     return nextProps.isUsed !== this.props.isUsed ? true : false
    // }

    ToBuy = (orderedVoucherNumber) => {
        this.props.userBuy(orderedVoucherNumber);
        this.props.voucherBuy(orderedVoucherNumber)
    }

    render(){ 
        // const title = (this.props.isUsed ? "USED" : "MARK AS USED")

//    const isShoppingCart = "/myShoppingCart"
        // -id-to na ofertata se pazi vyv vauchera
        //namirame tozi vaucher, koito e renderiran za koq oferta e
    const offerId=this.props.offerId

    //namirame ofertata po neinoto id i pokazvame sydyrjanieto ot neq
    const offerArr = this.props.vsichkiOferti.filter( offer => offer.id === offerId);
    // tyj kato oferitte sa v masiv a na nas ni trqbva 1
    const offer = offerArr[0]
    const orderedVoucherNumber = this.props.number
  
    // trqbva da podam nomera na vouchera
    // sled koeto popylvame templeita s neshtata za ofertata

    

    return(
        <div className={styles.BorderTemplate}>
            <h3 className={styles.VoucherTitle}>{offer.name}</h3>
            <div className={styles.Contend}>
                <img width="40" height="40" src={offer.image} />
                <div className={styles.More}>
                    <div>{offer.description}</div>
                    <div>{offer.price} BGN</div>
                </div>
            </div>
            <div><span>Count : {this.props.broi}</span><span>Total: {offer.price*this.props.broi}</span></div>

                <Button onClick={()=> this.props.removeFromCart(orderedVoucherNumber)} title="REMOVE" />
                <Button onClick={()=> this.ToBuy(orderedVoucherNumber)} title="BUY" />

            
        </div>
    )
    }    
}


const mapStateToProps = state => {
    return {
      vsichkiOferti: state.offer.offerList,
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: orderedVoucherNumber => dispatch(removeFromCart(orderedVoucherNumber)),
        userBuy : orderedVoucherNumber => dispatch(userBuy(orderedVoucherNumber)),
        voucherBuy : orderedVoucherNumber => dispatch(voucherBuy(orderedVoucherNumber)),
    };
  };

  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(OfferTemplate));