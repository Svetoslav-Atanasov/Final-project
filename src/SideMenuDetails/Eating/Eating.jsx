import React from "react";
import SingleOfferTemp from "../../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate";
import { connect } from "react-redux";
import styles from "../../OffersDisplay/OffersDisplay.module.css";

// filtrirame masiva po kategoriqta i izkarvam samo filtriranite oferti
const eating = props => {
  const CATEGORY = "Eating Out";
  const offersCulture = props.allOffers.filter(
    offer => offer.category === CATEGORY
  );

  return (
    <div className={styles.theDiv}>
      {offersCulture.map(offer => (
         <SingleOfferTemp key={offer.id} {...offer}/>
     
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
)(eating);
