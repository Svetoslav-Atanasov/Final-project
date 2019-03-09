import React, { Component } from "react";
import SingleOfferTemp from "../../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate";
import { connect } from "react-redux";
import styles from "../../OffersDisplay/OffersDisplay.module.css";

const culture = props => {
  const CATEGORY = "Culture";
  const offersCulture = props.allOffers.filter(
    offer => offer.category === CATEGORY
  );

  return (
    <div className={styles.theDiv}>
      {offersCulture.map(offer => (
        <SingleOfferTemp key={offer.id} {...offer}/>
        // <SingleOfferTemp
        //   key={offer.id}
        //   id={offer.id}
        //   name={offer.name}
        //   image={offer.image}
        //   description={offer.description}
        //   // tova se dobavq templata 
        //   price={offer.price + " BGN"}
        //   category={offer.category}
        //   expirationDate={offer.expirationDate}
        // />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allOffers: state.offer.offerList
  };
};

export default connect(
  mapStateToProps,
  null
)(culture);
