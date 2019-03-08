import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import OrderTemplate from "../VoucherTemplate/OrderTemplate";

const shoppingCart = props => {


    let ordered = props.current.vouchersInCart
    ordered = ordered.filter(o => o.idUser === props.current.id)

    return (
        <>
        {ordered.length === 0 ? <h2>Nqmate izbrani vaucheri</h2> : 
        ordered.map(o => 
            <OrderTemplate 
                key={o.number}
                {...o}
                />)}
        </>
    )
            
}

const mapStateToProps = state => {
    return {
      current: state.user.currentUser,
    };
  };

  
  export default connect(mapStateToProps,null)(withRouter(shoppingCart));

