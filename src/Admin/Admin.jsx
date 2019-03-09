import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

import { connect } from "react-redux";
import ReactTooltip from 'react-tooltip'


const admin = props => {
 

    // let data = new Array(props.offers.length+1)
    // data[0]= ["Offer", "Bought", { role: "style" }]
    const data = [
        ["Offer", "Bought", { role: "style" }]
      ];
  
      for (let index =1; index < props.offers.length; index++){
            data[index]=[];
            data[index].push(props.offers[index].name)
            const vauchersArr = props.vouchers.filter(v => v.offerId === data[index])
            if (vauchersArr.length === 0){
                data[index].push(3)
            }else{
                let count = 0;
                for(let i=0; i<vauchersArr.length; i++){
                 count+= vauchersArr[i].broi
                }
                data[index].push(count)
            }
            data[index].push("color: blue")
      }


      


    return (
        <div>
        {/* <ReactTooltip place="left" type="warning" effect="solid"/> */}
          <Chart chartType="BarChart" width="100%" height="400px" data={data} />
        </div>
      );
}

const mapStateToProps = state => {
    return {
      vouchers: state.voucher.voucherList,
      offers: state.offer.offerList
    };
  };

export default connect( mapStateToProps, null)(admin);
