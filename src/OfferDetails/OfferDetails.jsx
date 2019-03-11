import React from "react";
import styles from "./OfferDetails.module.css";
import { getToCart } from "../Storage/actions/users";
import { goToOrdered } from "../Storage/actions/vouchers";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";
import Countdown, { zeroPad } from "react-countdown-now";
import Zoom from "react-reveal/Zoom";

class OfferDetails extends React.Component {
  state = {
    broi: "1"
  };


  toGetToCart = (idUser, offerId, offerName) => {

    const number = Math.ceil(Math.random() * 10000);
    const broi = this.state.broi;
    const orderdVoucher = { number, idUser, broi, offerId, offerName };
  
    this.props.getToCart(idUser, orderdVoucher);
    this.props.goToOrdered(orderdVoucher);
    
  };
  onClickGetVoucher = (offerId,offerName) => {
    const user = this.props.current;
    if (user.id == "0") {
      return;
    }
    user
      ? this.toGetToCart(user.id, offerId, offerName)
      : this.props.history.push("/loginPage");
  };


  //tazi funkciq change() - shte vzima value ot inputa i shte go slaga v state, za da se zapzi
  // i da moje da byde izprateno
  change = e => {
    this.setState({ broi: e.target.value });
  };

  
  // function - shows format of timer + message after it has reached 0
  renderer = ({ days, hours, minutes, seconds, completed }) => {
    var daysFormatted = zeroPad(days, 2);
    var hoursFormatted = zeroPad(hours, 2);
    var minutesFormatted = zeroPad(minutes, 2);
    var secondsFormatted = zeroPad(seconds, 2);
    if (completed) {
      // Render a complete state
      return <span>Offer expired </span>;
    } else {
      // Render a countdown
      return (
        <span>
          {daysFormatted} day/s {hoursFormatted}:{minutesFormatted}:
          {secondsFormatted}{" "}
        </span>
      );
    }
  };

  convertDate = (date) => {

    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString();
    var dd  = date.getDate().toString();
  
    var mmChars = mm.split('');
    var ddChars = dd.split('');
  
    return yyyy + '/' + (mmChars[1]?mm:"0"+mmChars[0]) + '/' + (ddChars[1]?dd:"0"+ddChars[0]);
  }

  render() {
    const id = this.props.match.params.id;
    let offer = this.props.offerList.find(o => o.id == id);
    console.log(offer)
    console.log('TOVA GORE E OFERTATA')

    let originalDate = offer.expirationDate
    console.log('TOVA  E ORIGINALDATE')
    console.log(originalDate)

    console.log('TOVA  E ORIGINALDATE TO STRING')
    console.log(originalDate.toString())

    let formattedDate = '';
    if (originalDate.toString().length>10){
      formattedDate = this.convertDate(originalDate).split("/")
    }else {
      formattedDate = originalDate.split("/");
    }
    
   


    // used in - Expires:
    var expDate = new Date(
      formattedDate[0],
      formattedDate[1] - 1,
      formattedDate[2]
    );

    return (
    
      <Zoom duration={1500}>
        <div className={styles.singleDiv}>
          <div className={styles.topFlex}>
            <div>
              <img
                src={require("../assets/images/voucherRibbon.png")}
                className={styles.voucherImage}
              />
            </div>
            <div>
              <h1 className={styles.title}>{offer.name}</h1>
            </div>
          </div>
          <div className={styles.upperFlex}>
            <div>
              <img src={offer.image} className={styles.singleDisplayImage} />
            </div>
            <div>
              <p className={styles.fullDescriptionDetails}>
                {offer.fullDescription}
              </p>
            </div>
          </div>
          <div className={styles.middleFlex}>
            <span className={styles.titleDetails}>Offer terms</span>
            <ul className={styles.terms}>
              <li>
                {" "}
                - Expires:{" "}
                {`${expDate.getDate()}.${expDate.getMonth() +
                  1}.${expDate.getFullYear()}`}
              </li>
              <li> - The voucher is valid for one person only</li>
              <li> - Prior reservation required</li>
              <li> - Each client can use an unlimited number of voucher</li>
            </ul>
          </div>
          <div className={styles.bottomFlex}>
            <div className={styles.priceDetails}>{offer.price} BGN</div>

            <div>
              <Button
                //tuk proverqvam dali ima lognat user -> ako nqma - da go preprashta na login stranicata
                // ako ima da gi sloji v kolichkata
                className={styles.buttonMod}
                onClick={()=>this.onClickGetVoucher(offer.id,offer.name)}
                title="GET VOUCHER"
              />
            </div>
            <div>
              {" "}
              <Select
                className={styles.selectMod}
                onChange={this.change}
                value={this.state.value}
              />
            </div>
          </div>

          <div className={styles.timer}>
            Time left: <Countdown date={expDate} renderer={this.renderer} />
          </div>
        </div>
      </Zoom>
    );
  }
}

const mapStateToProps = state => {
  return {
    offerList: state.offer.offerList,
    current: state.user.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getToCart: (idUser, orderdVoucher) => dispatch(getToCart(idUser, orderdVoucher)),
    goToOrdered: orderdVoucher => dispatch(goToOrdered(orderdVoucher)),

  
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OfferDetails));
