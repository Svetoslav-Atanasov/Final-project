import React, { Component } from "react";
import styles from "./OfferDisplaySingleTemplate.module.css";
import Button from "../UI/Button/Button";
import { connect } from "react-redux";
import { getToCart } from "../Storage/actions/users";
import { goToOrdered } from "../Storage/actions/vouchers"
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Select from "../UI/Select/Select";
import Image from "../Image/Image";
import Countdown from 'react-countdown-now'

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
        const number = Math.ceil(Math.random()*10000);
        const broi  =this.state.broi;
        const orderdVoucher = {number, idUser, broi, offerId}
        // pravq nov obekt PorychanVaucher i go slagam v kolickata na tekushtiq potrebitel
        // const voucher = {idUser, broi, number, offerId, isUsed:false, name};  

        this.props.getToCart(idUser,orderdVoucher);
        this.props.goToOrdered(orderdVoucher);
        // this.props.addVoucher(voucher)
      } 

  //tazi funkciq change() - shte vzima value ot inputa i shte go slaga v state, za da se zapzi
  // i da moje da byde izprateno
  change = e => {
    this.setState({ broi: e.target.value });
  };

  renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return (
        <span>
        Offer expired
       </span>);
    } else {
      // Render a countdown
      return (
        <span>
         {days}:{hours}:{minutes}:{seconds}
        </span>
      );
    }
  };



  render() {
    const dayRandom = Math.floor(Math.random() * 29 + 1);
    // const monthRandom = Math.floor(Math.random() * 8 + 4);
    var expDate = new Date(2019, 2, dayRandom);
    console.log(this.props)
    console.log('novodobavenoto :')
    console.log(this.props.test);
    console.log('cena :')
    console.log(this.props.price);


    return (
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
        <div>{`${expDate.getDate()}.${expDate.getMonth()}.${expDate.getFullYear()}`}</div>
        <div>
          <Countdown date={expDate} renderer={this.renderer}/>
          <Select onChange={this.change} value={this.state.value} />

          <Button
            //tuk proverqvam dali ima lognat user -> ako nqma - da go preprashta na login stranicata
            // ako ima da gi sloji v kolichkata
            onClick={() =>
              !this.props.current
                ? this.props.history.push("/loginPage")
                : this.toGetToCart(this.props.current.id, this.props.id)
            }
            title="GET VOUCHER"
          />
        </div>
      </div>
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
    getToCart: (idUser,orderdVoucher) => dispatch(getToCart(idUser,orderdVoucher)),
    goToOrdered: (orderdVoucher) => dispatch(goToOrdered(orderdVoucher))
    // addVoucher: (voucher) => dispatchEvent(addVoucher(voucher))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Offer));
