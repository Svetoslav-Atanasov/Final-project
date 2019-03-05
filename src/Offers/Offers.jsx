import React, { Component } from "react";
import OffersDisplay from "../OffersDisplay/OffersDisplay";
import { withRouter } from "react-router";
import { connect } from "react-redux";


/// tova trqbva da chete gore url i da pokazva sydyrvanie sprqmo nego
 
const offers = props =>{
  // render(){
    console.log(props);
    // console.log(state.offers);
    //allOffers sa vsichki oferti vzeti ot stora, moje da si boravim s tqh
    let allOffers = props.offerList;
    return <OffersDisplay allOffers={allOffers} />
    // props.match.params && props.match.params.categoryType ? (
    //   <div>
    //     <OffersDisplay
    //       allOffers={allOffers.filter(offer => offer.category.toLowerCase() == props.match.params.categoryType.toLowerCase())}
    //     />
    //   </div>
    // ) : (
    //   <div>
    //     <OffersDisplay allOffers={allOffers} />
    //   </div>
    // );
}
  




const mapStateToProps = state => {
  return {
    offerList: state.offer.offerList
  };
};


export default connect(
  mapStateToProps,
  null
)(withRouter(offers));