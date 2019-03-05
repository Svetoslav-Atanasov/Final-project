import React from "react";
import { connect } from "react-redux";


const offersList = props => {
  //tova se dublira sys singleOfferTemplate
  return (
    <React.Fragment>
      <h1>Here are all our voucher offers</h1>
      {props.offerList.map(offer => (
        <Offer
          // key={offer.id}
          // name={offer.name}
          // info={offer.description}
          // price={offer.price}
          // image={offer.image}
          {...offer}
        />
      ))}
    </React.Fragment>
  );
};



const mapStateToProps = state => {
  return {
    offerList: state.offer.offerList
  };
};


export default connect( mapStateToProps, null)(offersList)