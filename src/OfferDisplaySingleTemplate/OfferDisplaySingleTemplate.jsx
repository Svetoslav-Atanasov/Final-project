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
import Zoom from "react-reveal/Zoom";

class Offer extends Component {
  //ot stateless go pravq na statefull component,
  //za da moje da si pazi informaciqta ot input-a  kolko vauchera da bydat kupeni
  // i syotvetno s funkciqta toGetToCart() - da vleznat v kolichkata na tekushtiq user
  state = {
    broi: "1"
  };

  //tazi funkciq - vzima id na potrebitelq  i slaga v koshnicata mu - vaucher
  toGetToCart = (idUser, offerId) => {
    // number shte e unikalen nomer na vauchera
    const number = Math.ceil(Math.random() * 10000);
    const broi = this.state.broi;
    const orderdVoucher = { number, idUser, broi, offerId };
    // pravq nov obekt PorychanVaucher i go slagam v kolickata na tekushtiq potrebitel
    // const voucher = {idUser, broi, number, offerId, isUsed:false, name};

    this.props.getToCart(idUser, orderdVoucher);
    this.props.goToOrdered(orderdVoucher);
    // this.props.addVoucher(voucher)
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

  render() {
    const dayRandom = Math.floor(Math.random() * 29 + 1);
    // var expDate = new Date(2019, 2, dayRandom);
    // // console.log(expDate);
    // console.log(this.props.expDate);
    // console.log(this.props);

    // takes date from userReducer's offerList
    var formattedDate = this.props.expDate.split(".");
    var expDate = new Date(
      formattedDate[0],
      formattedDate[1] - 1,
      formattedDate[2]
    );
    console.log(expDate);

    console.log(expDate - Date.now());
    console.log(Date.now() - expDate);

    return (
      <Zoom>
        <div className={styles.singleDiv}>
          <h1 className={styles.titleMainScreen}>{this.props.name}</h1>
          <div>
            <Link to={"/offerDetails/" + this.props.id}>
              <Image image={this.props.image} />
            </Link>
          </div>
          <div>{this.props.description}</div>
          <div>{this.props.price}</div>
          <div>{this.props.category}</div>
          {/* months are counted from 0-11; +1 to start from the month of March */}
          <div>
            Offer expires:{" "}
            {`${expDate.getDate()}.${expDate.getMonth() +
              1}.${expDate.getFullYear()}`}
          </div>

          <div>
            <Select onChange={this.change} value={this.state.value} />

            {/* console.log(expDate - Date.now()); */}

            <Button
              //tuk proverqvam dali ima lognat user -> ako nqma - da go preprashta na login stranicata
              // ako ima da gi sloji v kolichkata
              // timerOut={() => (Date.now() - expDate > 0) ?
              // moreStyles={(Date.now() - expDate  0) ? {} : { display: 'none' }} />
              // // }
              onClick={() =>
                !this.props.current
                  ? this.props.history.push("/loginPage")
                  : this.toGetToCart(this.props.current.id, this.props.id)
              }
              title="GET VOUCHER"
            />
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
