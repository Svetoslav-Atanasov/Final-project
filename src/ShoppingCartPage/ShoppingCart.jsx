import React from "react";
import styles from "./ShoppingCart.module.css";
import Offers from "../Offers/Offers";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import voucherTemplate from "../VoucherTemplate/VoucherTemplate"
import VoucherTemplate from "../VoucherTemplate/VoucherTemplate";

const shoppingCart = props => {


    const vouchers = props.userVouchers;

    return (
        <>
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
    
      userVouchers: state.user.currentUser.vouchersInCart
    };
  };

  
  export default connect(mapStateToProps,null)(withRouter(shoppingCart));

