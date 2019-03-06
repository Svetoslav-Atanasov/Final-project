import React, { Component } from 'react';
import styles from './VoucherTemplate.module.css';
import { connect } from "react-redux";
import Button from '../UI/Button/Button'
import { removeFromCart } from '../Storage/actions/users'
import { buy } from '../Storage/actions/users'
import { markAsUsed } from '../Storage/actions/users'
import { withRouter } from "react-router";

//po daden vaucher shte nameri, koq e ofertata i s nejnite danni shte popylni formata,
// kato dopylnitelno shte dobavi svoqta informaciq za broi
class VoucherTemplate extends Component {

    //?????moje li da se spesti prerisuvaneto??? ili ne zashtoto update-va i drugi componenti
    shouldComponentUpdate(nextProps,nextState){
            console.log('shouldupdate')
            console.log(nextProps.isUsed !== this.props.isUsed ? true : false)
        return nextProps.isUsed !== this.props.isUsed ? true : false
    }
    checkIfIsUsed = (voucherNumber) =>{
        
        return !this.props.isUsed ? this.props.markAsUsed(voucherNumber) : null
    }

    render(){ 
        const title = (this.props.isUsed ? "USED" : "MARK AS USED")
        const disabled = (this.props.isUsed ? true : false)
   const isShoppingCart = "/myShoppingCart"
        // -id-to na ofertata se pazi vyv vauchera
    const offerId=this.props.offerId

    //namirame ofertata po neinoto id i pokazvame sydyrjanieto ot neq
    const offerArr = this.props.vsichkiOferti.filter( offer => offer.id === offerId);
    // tyj kato oferitte sa v masiv a na nas ni trqbva 1
    const offer = offerArr[0]
    const voucherNumber = this.props.number
    console.log(voucherNumber)
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
            {isShoppingCart === this.props.location.pathname ?
                <>
                <Button onClick={()=> this.props.removeFromCart(voucherNumber)} title="REMOVE" />
                <Button onClick={()=> this.props.buy(voucherNumber)} title="BUY" />
                </>
            : <Button onClick={ () => { this.checkIfIsUsed(voucherNumber) } }
                disabled = {disabled}
                title={ title }
                />}
            
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
        removeFromCart: voucherNumber => dispatch(removeFromCart(voucherNumber)),
        buy : voucherNumber => dispatch(buy(voucherNumber)),
        markAsUsed : voucherNumber => dispatch(markAsUsed(voucherNumber))
    };
  };

  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(VoucherTemplate));