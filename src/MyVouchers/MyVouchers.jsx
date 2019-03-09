import React, { Component } from 'react'
import styles from "./MyVoucers.module.css";
import { connect } from "react-redux";
import VoucherTemplate from "../VoucherTemplate/VoucherTemplate";



 const myvouchers = props => {

    const vouchers = [];
    console.log('AAAAAAAAAAAAAAAAAAAAAAA')
    console.log(props.allVouchers);
    console.log(props.userVouchers)

    for (let index = 0; index < props.allVouchers.length; index ++){
        for(let i=0; i<props.userVouchers.length; i++){
            if(props.allVouchers[index].number === props.userVouchers[i].number){
                vouchers.push(props.allVouchers[index])
            }
        }
    }
    console.log(vouchers)
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
        allVouchers: state.voucher.voucherList,
      userVouchers: state.user.currentUser.bought
    };
  };

  
  export default connect(mapStateToProps,null)(myvouchers);