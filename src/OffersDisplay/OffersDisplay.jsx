import React from "react";
import SingleOfferTemp from "../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import styles from "./OffersDisplay.module.css"


// OffersDisplay priema masiv s oferti i vika renderirane za vsqka edna
const OffersDisplay = props => {
  console.log(props);
  return (
    <div className={styles.theDiv}>
      {props.allOffers.map(offer => (
        <SingleOfferTemp key={offer.id} id={offer.id} name={offer.name} image={offer.image} description={offer.description} price={offer.price+" BGN"} category={offer.category} />

        // <SingleOfferTemp
        //   key={offer.id}
        //   {...offer}
        // />
      ))}
    </div>
  );
};


// const mapStateToProps = (state) => {
//   return {
//     allOffers: state.offer.offerList
//   }
// }

export default (withRouter(OffersDisplay));
// export default OffersDisplay;
