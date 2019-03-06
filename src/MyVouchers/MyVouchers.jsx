import React, { Component } from 'react'
import styles from "./MyVoucers.module.css";
import { connect } from "react-redux";
import VoucherTemplate from "../VoucherTemplate/VoucherTemplate";



 const myvouchers = props => {

    const vouchers = props.userVouchers;
    return (
        <>
        <div >
            <h1>Tuk shte vidish zakupenite ot teb vaucheri</h1>
        </div>
        {vouchers.length === 0 ? <h2>Nqmate izbrani vaucheri</h2> : 
        vouchers.map(v => 
            <VoucherTemplate 
                key={v.number}
                {...v}
                />)}
        </>
    )
}


const mapStateToProps = state => {
    return {
    
      userVouchers: state.user.currentUser.bought
    };
  };

  
  export default connect(mapStateToProps,null)(myvouchers);
