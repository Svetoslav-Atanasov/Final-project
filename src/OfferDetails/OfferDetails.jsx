import React from "react";
import styles from "./OfferDetails.module.css";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";

class OfferDetails extends React.Component {
  state = {
    broi: "1"
  };

  //tazi funkciq - vzima id na potrebitelq  i slaga v koshnicata mu - vaucher
  toGetToCart = (id, offerId) => {
    // number shte e unikalen nomer na vauchera
    const number = Math.ceil(Math.random() * 10000);
    const broi = this.state.broi;

    console.log("broikata e " + broi);
    // pravq nov obekt vaucher i go slagam v kolickata na tekushtiq potrebitel
    const voucher = { broi, number, offerId, isUsed: false };
    this.props.getToCart(id, voucher);
  };

  //tazi funkciq change() - shte vzima value ot inputa i shte go slaga v state, za da se zapzi
  // i da moje da byde izprateno
  change = e => {
    this.setState({ broi: e.target.value });
  };

  render() {
    const dayRandom = Math.floor(Math.random() * 29 + 1);
    const monthRandom = Math.floor(Math.random() * 8 + 4);

    const id = this.props.match.params.id;
    console.log(id);
    console.log(this.props);

    var offer = this.props.offerList.find(o => o.id == id);
    console.log(offer);

    return (
      <div className={styles.singleDiv}>
        <div className={styles.topFlex}>
          <div>
            <img src={require("../assets/images/voucherRibbon.png")} className={styles.voucherImage} />
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
              - Expires: {dayRandom}.{monthRandom}.2019
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
              onClick={() =>
                !this.props.current
                  ? this.props.history.push("/loginPage")
                  : this.toGetToCart(this.props.current.id, this.props.id)
              }
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    offerList: state.offer.offerList
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(OfferDetails));
