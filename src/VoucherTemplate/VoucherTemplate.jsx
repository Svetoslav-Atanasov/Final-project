import React from 'react';
import styles from './VoucherTemplate.module.css';
import { connect } from "react-redux";
 

//po daden vaucher shte nameri, koq e ofertata i s nejnite danni shte popylni formata,
// kato dopylnitelno shte dobavi svoqta informaciq za broi
const voucherTemplate = props =>{
    // -id-to na ofertata se pazi vyv vauchera
const offerId=props.offerId
//namirame ofertata po neinoto id
    const offerArr = props.vsichkiOferti.filter( offer => offer.id === offerId);
    // tyj kato oferitte sa v masiv a na nas ni trqbva 1
    const offer = offerArr[0]
    console.log('vika templejta')
    console.log('props sa')
    console.log(props)
    console.log('offer e:')
    console.log(offer)
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
        <div><span>Count : {props.broi}</span><span>Total: {offer.price*props.broi}</span></div>
    </div>
    )
}


const mapStateToProps = state => {
    return {
      vsichkiOferti: state.offer.offerList,
    };
  };

  
  export default connect(mapStateToProps,null)(voucherTemplate);