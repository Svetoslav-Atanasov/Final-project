import React, { Component } from "react";
import styles from "./OfferDisplaySingleTemplate.module.css";
import Button from "../UI/Button/Button";
import { connect } from "react-redux";
import { getToCart } from "../Storage/actions/users";
import { goToOrdered } from "../Storage/actions/vouchers";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Select from "../UI/Select/Select";
import Image from "../Image/Image";
import Countdown, { zeroPad } from "react-countdown-now";
import Fade from "react-reveal/Fade";
import label from "../assets/images/label.png";
import redLine from "../assets/images/redLine.png";

class Offer extends Component {


  state = {
    broi: "1",
    timerExpired: this.props.isExpired
  };

  onClickGetVoucher = () => {
  
    const user = this.props.current;
    if (user.id == '0'){
      return;
    }
    user
      ? this.toGetToCart(user.id, this.props.id, this.props.name)
      : this.props.history.push("/loginPage");
  };

  //tazi funkciq - vzima id na potrebitelq  i slaga v koshnicata mu - vaucher
  toGetToCart = (idUser, offerId, offerName) => {
    // number shte e unikalen nomer na vauchera
    const number = Math.ceil(Math.random() * 10000);
    const broi = this.state.broi;
    const orderdVoucher = { number, idUser, broi, offerId, offerName };
  
    this.props.getToCart(idUser, orderdVoucher);
    this.props.goToOrdered(orderdVoucher);
    
  };


  change = e => {
    console.log(e.target.value);
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

  onComplete = () => {
    //this.state.timerExpired = true;
    this.setState({ timerExpired: true });
  };

  render() {
    // takes date from userReducer's offerList

    var formattedDate = this.props.expirationDate.split(".");
    var expDate = new Date(
      formattedDate[0],
      formattedDate[1] - 1,
      formattedDate[2]
    );

    const disc =
      ((this.props.oldPrice - this.props.price) / this.props.oldPrice).toFixed(
        2
      ) * 100;
    const discount = "-" + disc + "%";

    return (
      <Fade cascade>
        <div className={styles.singleDiv}>
          <Link to={"/offerDetails/" + this.props.id}>
          <div className={styles.label}>
            <img width="200" height="200" src={label} />
            <span className={styles.discount}> {discount} </span>
          </div>
          </Link>
          <div>
            <Link to={"/offerDetails/" + this.props.id}>
              <Image image={this.props.image} />
            </Link>
          </div>
          <h1 className={styles.titleMainScreen}>{this.props.name}</h1>
          <div className={styles.Contend}> {this.props.description}</div>
          <div className={styles.Contend}>
            <div className={styles.oldPrice}>
              <img width="35" height="35" src={redLine} />
            </div>
            <div>
              {this.props.oldPrice}
              <span> BGN</span>
            </div>
            <div className={styles.Contend}>
              <strong>
                {this.props.price}
                <span> BGN</span>
              </strong>
            </div>
          </div>
          <div className={styles.Contend}>{this.props.category}</div>
          {/* months are counted from 0-11; +1 to start from the month of March */}
          <div className={styles.Contend}>
            Offer expires:{" "}
            {`${expDate.getDate()}.${expDate.getMonth() +
              1}.${expDate.getFullYear()}`}
          </div>
          <div>
            <Select onChange={this.change} value={this.state.value} />

            <Button
              timerDisabled={this.state.timerExpired}
              onClick={this.onClickGetVoucher}
              title="GET VOUCHER"
            />
            <div className={styles.GetingVoucher}>
              <div className={styles.chooseCount} />
              {/* console.log(expDate - Date.now()); */}
            </div>

            <div className={styles.timer}>
              Time left:{" "}
              <Countdown
                date={expDate}
                renderer={this.renderer}
                onComplete={this.onComplete}
              />
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

const mapStateToProps = state => {
  return {
    current: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getToCart: (idUser, orderdVoucher) =>
      dispatch(getToCart(idUser, orderdVoucher)),
    goToOrdered: orderdVoucher => dispatch(goToOrdered(orderdVoucher))
    // addVoucher: (voucher) => dispatchEvent(addVoucher(voucher))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Offer));
