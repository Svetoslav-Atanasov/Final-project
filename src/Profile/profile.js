import React from "react";
import styles from "./profile.module.css";
import { connect } from "react-redux";
import SingleOfferTemp from '../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate'


const profile = props => {


  let seenOffers =[]

    const offersSet = new Set();
    const allOffers = props.offerList;
    const lastSeen = props.user.lastSeen;
    console.log('LASTSEEEEEEEN')
    console.log(props)
    console.log(props.user)
    console.log(props.user.lastSeen)


    for(let index = 0; index < allOffers.length ; index++){
      for(let i=0; i< lastSeen.length; i++ ){
           if (allOffers[index].id === lastSeen[i] ){
               offersSet.add(allOffers[index].id)
           }
      }
    }

    for (var id of offersSet) {
      const index = allOffers.findIndex(offer => offer.id === id)
      seenOffers.push(allOffers[index])
    }

      return ( <div>
                 <h2>Last offers you have seen : </h2>
                 {seenOffers.map( offer =>
                    <SingleOfferTemp 
                    key={offer.id} 
                    {...offer}/>)}
              </div>
      )
  }

  const mapStateToProps = state => {
    return {
    
      user: state.user.currentUser,
      offerList : state.offer.offerList
    };
  };

  
  export default connect(mapStateToProps,null)(profile);
 