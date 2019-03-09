import React, { Component } from 'react';
import styles from './VoucherTemplate.module.css';
import { connect } from "react-redux";
import Button from '../UI/Button/Button'
import { markAsUsed } from '../Storage/actions/vouchers'
import { withRouter } from "react-router";

//po daden vaucher shte nameri, koq e ofertata i s nejnite danni shte popylni formata,
// kato dopylnitelno shte dobavi svoqta informaciq za broi
class VoucherTemplate extends Component {

    shouldComponentUpdate(nextProps,nextState){
            console.log('shouldupdate')
            console.log(nextProps.isUsed !== this.props.isUsed ? true : false)
        return nextProps.isUsed !== this.props.isUsed ? true : false
    }

    checkIfIsUsed = (voucherNumber) =>{    
        return !this.props.isUsed ? this.props.markAsUsed(voucherNumber) : null
    }

    render(){ 
        const title = "MARK AS USED";


        // -id-to na ofertata se pazi vyv vauchera
        //namirame tozi vaucher, koito e renderiran za koq oferta e
    const offerId=this.props.offerId

    //namirame ofertata po neinoto id i pokazvame sydyrjanieto ot neq
    const offerArr = this.props.vsichkiOferti.filter( offer => offer.id === offerId);
    // tyj kato oferitte sa v masiv a na nas ni trqbva 1
    const offer = offerArr[0]

    const voucherNumber = this.props.number
    // console.log('Номера на ваучера за показване е' + voucherNumber)
    // trqbva da podam nomera na vouchera
    // sled koeto popylvame templeita s neshtata za ofertata
    console.log(this.props)
    console.log('ima li neshto tuk izob]o za is used')
    console.log(this.props.isUsed)
    let statusForUse = null;
        if (this.props.isUsed){
            statusForUse = <div><p>Voucher is used!</p></div>
        } else{
            statusForUse = <Button 
                title={ title }
                onClick={ ()=>this.checkIfIsUsed(voucherNumber)
                     } />
        }
    
  

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
            
                {statusForUse}
            
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

        markAsUsed : voucherNumber => dispatch(markAsUsed(voucherNumber))
    };
  };

  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(VoucherTemplate));