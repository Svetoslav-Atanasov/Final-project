import React from "react";
import { connect } from "react-redux";
import styles from "./Searched.module.css"
import SingleOfferTemp from '../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate'
import { withRouter } from "react-router";


const searched = props => {

  let filteredOffers =[]
    //razdelqme url

    const keyWords = props.match.params.param.split('-')

    const offersSet = new Set();
    const allOffers = props.allOffers;
    

    //tyrsim v koi zaglaviq se sydyrjat 
    
    for(let index = 0; index < allOffers.length ; index++){
        for(let i=0; i< keyWords.length; i++ ){
             if (allOffers[index].name.toLowerCase().includes(keyWords[i].toLowerCase()) ){
                 offersSet.add(allOffers[index].id)
             }
        }
    }
    
    for (var id of offersSet) {
      const index = allOffers.findIndex(offer => offer.id === id)
      filteredOffers.push(allOffers[index])
    }

    return (
          <>
            <h1>Results for keywords : {keyWords.map(word => <strong>{word} </strong> )}</h1>
            <div className={styles.searched}>
            {filteredOffers.map( offer =>
               <SingleOfferTemp 
               key={offer.id} 
              {...offer}/>)}
             
            </div>
          </>
      );
}

const mapStateToProps = state => {
    return {
      allOffers: state.offer.offerList
    };
  };
  
export default connect(mapStateToProps, null)(withRouter(searched));
