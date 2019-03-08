import React, { Component } from 'react'
import styles from "./MyVoucers.module.css";
import { connect } from "react-redux";
import VoucherTemplate from "../VoucherTemplate/VoucherTemplate";



 const myvouchers = props => {

    const boughtVouchers = []

    const naUsera = props.currernt.bought
    const allVouchers = props.vouchers
    for (let i=0; i < naUsera.length; i++){
        for(let index=0; index < allVouchers.length; index ++){
            if (naUsera[i].number === allVouchers[index].number){
                if(allVouchers[index].isUsed){
                    boughtVouchers.push(allVouchers[index])
                }else{
                    boughtVouchers.unshift(allVouchers[index])
                }
               
            }
        }
    }
    return (
        <>
        <div >
            <h1>Tuk shte vidish zakupenite ot teb vaucheri</h1>
        </div>
        {naUsera.length === 0 ? <h2>Nqmate izbrani vaucheri</h2> : 
        boughtVouchers.map(v => 
            <VoucherTemplate 
                key={v.number}
                {...v}
                />)}
        </>
    )
}


const mapStateToProps = state => {
    return {
    
        currernt : state.user.currentUser,
        vouchers: state.voucher.voucherList
    };
  };

  
  export default connect(mapStateToProps,null)(myvouchers);
