import React from "react";
import SingleOfferTemp from '../../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate'
import { connect } from "react-redux";

// filtrirame masiva po kategoriqta i izkarvam samo filtriranite oferti
const vacations = props =>{
  const CATEGORY = "Vacations"
  const offersCulture = props.allOffers.filter(offer => offer.category === CATEGORY)

  
  return (
    <div>
     { offersCulture.map( offer =>
        <SingleOfferTemp key={offer.id} {...offer}/>
        )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allOffers: state.offer.offerList
  }
}
export default connect(mapStateToProps, null)(vacations);