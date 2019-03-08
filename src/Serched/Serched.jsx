import React from "react";
import { connect } from "react-redux";
import SingleOfferTemp from '../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate'
import { withRouter } from "react-router";
// predavame kliuchovite dumi v url kym stranicata na tyrseneto i ot tam, 
// byrkame v stora i si vzimame kakvoto ni trqbva
const searched = props => {

    //razdelqme url
    const keyWords = props.match.params.param.split('-')

    const offersSet = new Set();
    const allOffers = props.allOffers;

    for(let index = 0; index < allOffers.length ; index++){
        for(let i=0; i< keyWords.length; i++ ){
             if (allOffers[index].name.toLowerCase().includes(keyWords[i].toLowerCase()) ){
                 offersSet.add(allOffers[index].id)
             }
        }
    }
   
    let filteredOffers =[]

    for (var id of offersSet) {
      const index = allOffers.findIndex(offer => offer.id === id)
      filteredOffers.push(allOffers[index])
    }
        console.log('filtrirani ot id')
    console.log(filteredOffers)

    return (
                <div>
                <h1>Tuk shte sa tyrsenite - kluchovi dumi : {keyWords.map(word => <strong>{word} </strong> )}</h1>
                {filteredOffers.map( offer =>
             <SingleOfferTemp key={offer.id} {...offer}/>)}
             
                </div>
              );
}

const mapStateToProps = state => {
    return {
      allOffers: state.offer.offerList
    };
  };
  
export default connect(mapStateToProps, null)(withRouter(searched));
