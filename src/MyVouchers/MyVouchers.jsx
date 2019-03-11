import React, { Component } from "react";
import styles from "./MyVoucers.module.css";
import { connect } from "react-redux";
import OrderTemplate from "../VoucherTemplate/OrderTemplate";
import Zoom from "react-reveal/Zoom";


const myvouchers = props => {
  const vouchers = [];


  for (let index = 0; index < props.allVouchers.length; index++) {
    for (let i = 0; i < props.userVouchers.length; i++) {
      if (props.allVouchers[index].number === props.userVouchers[i].number) {
        vouchers.push(props.allVouchers[index]);
      }
    }
  }

  return (
    <Zoom>
      <>
        <div>
          <h1>Your Vouchers</h1>
        </div>
        {vouchers.length === 0 ? (
          <h2>You haven't purchased any vouchers</h2>
        ) : (
          vouchers.map(v => <OrderTemplate key={v.number} {...v} />)
        )}
      </>
    </Zoom>
  );
};

const mapStateToProps = state => {
  return {
    allVouchers: state.voucher.voucherList,
    userVouchers: state.user.currentUser.bought
  };
};

export default connect(
  mapStateToProps,
  null
)(myvouchers);
