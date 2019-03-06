import React from "react";
import SingleOfferTemp from "../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate";
import { connect } from "react-redux";
import { withRouter } from "react-router";


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


// const mapStateToProps = (state) => {
//   return {
//     allOffers: state.offer.offerList
//   }
// }

<<<<<<< HEAD
// export default connect(mapStateToProps, null)(OffersDisplay);
export default OffersDisplay;
=======
export default connect(mapStateToProps, null)(withRouter(OffersDisplay));
// export default OffersDisplay;
>>>>>>> f0a98d2753d46fb0a7683eb9a53dd7f9d628e63c
