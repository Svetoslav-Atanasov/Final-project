import React, { Component } from "react";
import SingleOfferTemp from '../../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate'
import { connect } from "react-redux";



const culture = props =>{
  const CATEGORY = "Culture"
  const offersCulture = props.allOffers.filter(offer => offer.category === CATEGORY)

  
  return (
    <div>
     { offersCulture.map( offer =>
        // <SingleOfferTemp key={offer.id} {...offer}/>
        <SingleOfferTemp key={offer.id} id={offer.id} name={offer.name} image={offer.image} description={offer.description} price={offer.price+" BGN"} category={offer.category} />

        )}
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    allOffers: state.offer.offerList
  }
}

export default connect(mapStateToProps, null)(culture);

