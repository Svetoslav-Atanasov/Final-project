import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import OrderTemplate from "../VoucherTemplate/OrderTemplate";

const shoppingCart = props => {
console.log('TUKA E KARTATAAAAAAA')
console.log(props)
console.log(props.userVouchers)

    const vouchers = props.userVouchers;

    return (
        <>
        {vouchers.length === 0 ? <h2>Nqmate izbrani vaucheri</h2> : 
        vouchers.map(v => 
            <OrderTemplate 
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

