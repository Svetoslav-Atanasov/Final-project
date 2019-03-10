import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import OrderTemplate from "../VoucherTemplate/OrderTemplate";
import Zoom from "react-reveal/Zoom";

const shoppingCart = props => {
  console.log("TUKA E KARTATAAAAAAA");
  console.log(props);
  console.log(props.userVouchers);

  const vouchers = props.userVouchers;

  return (
    <Zoom>
      <>
        <h1>Your Cart</h1>

        {vouchers.length === 0 ? (
          <h2>Your cart is empty</h2>
        ) : (
          vouchers.map(v => <OrderTemplate key={v.number} {...v} />)
        )}
      </>
    </Zoom>
  );
};

const mapStateToProps = state => {
  return {
    userVouchers: state.user.currentUser.vouchersInCart
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(shoppingCart));
