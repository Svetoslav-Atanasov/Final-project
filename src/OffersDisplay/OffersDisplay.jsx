import React from "react";
import SingleOfferTemp from "../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate";
import { connect } from "react-redux";

// OffersDisplay priema masiv s oferti i vika renderirane za vsqka edna
const OffersDisplay = props => {
  console.log(props);
  return (
    <React.Fragment>
      {props.allOffers.map(offer => (

        <SingleOfferTemp
          key={offer.id}
          {...offer}
        />
      ))}
    </React.Fragment>
  );
};


const mapStateToProps = (state) => {
  return {
    allOffers: state.offer.offerList
  }
}

export default connect(mapStateToProps, null)(OffersDisplay);
// export default OffersDisplay;