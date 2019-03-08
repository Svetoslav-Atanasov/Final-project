import React from "react";
import SingleOfferTemp from "../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class OfferDetails extends React.Component {
  state = {};

  render() {
    console.log('detaili za ofertata')
    console.log(this.props);
    const id = this.props.match.params.id;
    console.log('detaili za ofertata')
    console.log(id);
    

    var offer = this.props.offerList.find(o => o.id == id);
    console.log(offer);

    return (
      <div>
        <SingleOfferTemp key={offer.id} {...offer} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    offerList: state.offer.offerList
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(OfferDetails));
