import React from "react";
// import Alcohol from "./Alcohol";

const offersList = props => {
  return (
    <React.Fragment>
      <h1>Here are all our voucher offers</h1>
      {props.offers.map(offer => (
        <Offer
          key={offer.id}
          name={offer.name}
          info={offer.description}
          price={offer.price}
          image={offer.image}
        />
      ))}
    </React.Fragment>
  );
};

export default offersList;
