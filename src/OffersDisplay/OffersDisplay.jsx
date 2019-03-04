import React from "react";
import SingleOfferTemp from "../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate";

const OffersDisplay = props => {
  return (
    <React.Fragment>
      {props.allOffers.map(offer => (
        <SingleOfferTemp
          key={offer.id}
          name={offer.name}
          image={offer.image}
          category={offer.category}
          description={offer.description}
          price={offer.price}
        />
      ))}
    </React.Fragment>
  );
};

export default OffersDisplay;
