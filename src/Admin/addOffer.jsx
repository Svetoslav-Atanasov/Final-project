import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import styles from "./addOffer.module.css";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";
import SingleOfferTemp from "../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate";
import { addOffer } from "../Storage/actions/offers";
import DatePicker from "react-datepicker";

let id = 100;
const NAME = "name";
const DESCRIPTION = "description";
const FULL_DESCRIPTION = "fullDescription";
const OLD_PRICE = "oldPrice";
const NEW_PRICE = "price";
const CATEGORY = "category";
const EXP_DATE = "expirationDate";
const IMAGE = "image";
const CULTURE = "Culture";
const EATING_OUT = "Eating Out";
const VACATIONS = "Vacations";

class AddOffer extends Component {
  state = {
    isExpired: false,
    name: "",
    description: "",
    fullDescription: "",
    oldPrice: 0,
    price: 0,
    category: CULTURE,
    expirationDate: "",
    image: ""
  };

  setSomething = (e, smg) => {
    const value = e.target.value;
    // if (!this.check(value)){return;}
    switch (smg) {
      case NAME:
        const name = value;
        if (!this.check(value)) {
          return;
        }
        return this.setState({ name });
      case DESCRIPTION:
        const description = value;
        if (!this.check(value)) {
          return;
        }
        return this.setState({ description });
      case FULL_DESCRIPTION:
        if (!this.check(value)) {
          return;
        }
        const fullDescription = value;
        return this.setState({ fullDescription });
      case OLD_PRICE:
        if (!this.check(value)) {
          return;
        }
        const oldPrice = value;
        return this.setState({ oldPrice });
      case NEW_PRICE:
        if (!this.check(value)) {
          return;
        }
        const price = value;
        return this.setState({ price });
      case CATEGORY:
        if (!this.checkPrice(value)) {
          return;
        }
        const category = value;
        return this.setState({ category });
      case EXP_DATE:
        if (!this.checkDate(value)) {
          return;
        }
        const expirationDate = value;
        return this.setState({ expirationDate });
      case IMAGE:
        // if (!this.checkUrl(value)) {
        //   return;
        // }
        const image = value;
        return this.setState({ image });
      default:
        return;
    }
  };
  submit = e => {
    e.preventDefault();
    let newOffer = {
      id: ++id,
      isExpired: false,
      name: this.state.name,
      description: this.state.description,
      fullDescription: this.state.fullDescription,
      oldPrice: this.state.oldPrice,
      price: this.state.price,
      category: this.state.category,
      expirationDate: this.state.expirationDate,
      image: this.state.image
    };
    this.props.addOffer(newOffer);
    this.props.history.push("/");
  };

check = str =>{
  const isValid = /^[a-zA-Z0-9,. !?]*$/.test(str)
  return isValid
}
checkPrice(str){
  const isValid = /^[a-zA-Z0-9.,]*$/.test(str)
  return isValid
}
// checkUrl = str =>{
//   // const isValid = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(str)
//   // const isValid = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(str)
//   // ne pozvolqva
//   // const isValid = /^[a-zA-Z0-9,.?/:-=%]*$/.test(str)

//   return isValid
// }
  checkDate = date => {
    const isValid = /^[0-9.]*$/.test(date);
    return isValid;
  };

  
  render() {
    return (
      <div className={styles.addOffer}>
        <div className={styles.articleOfferLeft}>
          <form>
            <div>
              Header name for the offer:
              <Input
                className={styles.addInputs}
                maxLength="40"
                onChange={e => {
                  this.setSomething(e, NAME);
                }}
                value={this.state.name}
              />
            </div>
            <div>
              <label>Short description:</label>
              <Input
                className={styles.addInputs}
                maxLength="40"
                onChange={e => {
                  this.setSomething(e, DESCRIPTION);
                }}
                value={this.state.description}
              />
            </div>
            <div>
              <label>Full description:</label>
              <textarea
                className={styles.addInputs}
                rows="4"
                cols="50"
                maxLength="200"
                onChange={e => {
                  this.setSomething(e, FULL_DESCRIPTION);
                }}
                value={this.state.fullDescription}
              />
            </div>
            <div>
              <label>Old price:</label>
              <Input
                className={styles.addInputs}
                onChange={e => {
                  this.setSomething(e, OLD_PRICE);
                }}
                value={this.state.oldPrice}
              />
            </div>
            <div>
              <label>New price:</label>
              <Input
                className={styles.addInputs}
                onChange={e => {
                  this.setSomething(e, NEW_PRICE);
                }}
                value={this.state.price}
              />
            </div>
            <div>
              <label>Select category</label>
              <select
                className={styles.addInputs}
                onChange={e => {
                  this.setSomething(e, CATEGORY);
                }}
                value={this.state.category}
              >
                {/* Select category */}
                <option value={CULTURE}>Culture</option>
                <option value={EATING_OUT}>Eating Out</option>
                <option value={VACATIONS}>Vacations</option>
              </select>
            </div>
            <div>
              <label>Expiration Date:</label>
              <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={this.state.expirationDate}
                  onChange={e => this.setSomething(e, EXP_DATE)} />
              
              {/* <Input
                className={styles.addInputs}
                onChange={e => {
                  this.setSomething(e, EXP_DATE);
                }}
                value={this.state.expirationDate}
              /> */}
            </div>
            <div>
              <label>Url image:</label>
              <Input
                className={styles.addInputs}
                onChange={e => {
                  this.setSomething(e, IMAGE);
                }}
                value={this.state.image}
              />
            </div>
          </form>
          <div className={styles.button} disabled="disabled">
            <Button onClick={this.submit} title="READY" />
          </div>
        </div>
        <div className={styles.articleOfferRight}>
          <SingleOfferTemp {...this.state} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOffer: newOffer => dispatch(addOffer(newOffer))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddOffer);
