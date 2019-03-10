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
      console.log('BBBBBBBBBBBBBBBBBBBBBBBBBB')
  console.log(props.offers);
  console.log(props.vouchers)

      for (let index =1; index < props.offers.length; index++){

            data[index]=[];
            data[index].push(props.offers[index].name)

            const vauchersArr = props.vouchers.filter(v => v.offerName === data[index][0])
            if (vauchersArr.length === 0){
                data[index].push(0)
            }else{
                let count = 0;
                for(let i=0; i<vauchersArr.length; i++){
                  const br = +vauchersArr[i].broi
                 count+= br
                }
                data[index].push(count)
            }
            data[index].push("color: blue")
      }
      console.log(data)


      


    return (
        <div>
        {/* <ReactTooltip place="left" type="warning" effect="solid"/> */}
          <Chart chartType="ColumnChart" width="100%" height="400px" data={data}
          options={{
            title: 'PAYED VOUCHERS',
            chartArea: { width: '30%' },
            hAxis: {
              title: 'ALL ACTIVE OFFERS',
              minValue: 0,
              maxValue: 20
            },
            vAxis: {
              title: 'NUMBER OF BOUGHT',
              minValue: 0,
              maxValue: 30
            },
            
          }} />
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
