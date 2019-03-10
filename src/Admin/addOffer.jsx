import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

import { connect } from "react-redux";
import ReactTooltip from 'react-tooltip'


const admin = props => {
 
}

const mapStateToProps = state => {
    return {
      vouchers: state.voucher.voucherList,
      offers: state.offer.offerList
    };
  };

export default connect( mapStateToProps, null)(admin);
