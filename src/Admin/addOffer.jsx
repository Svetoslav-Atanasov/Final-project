import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import styles from "./addOffer.module.css";
import { connect } from "react-redux";
import ReactTooltip from 'react-tooltip'
import SingleOfferTemp from '../OfferDisplaySingleTemplate/OfferDisplaySingleTemplate';
import { addOffer } from '../Storage/actions/offers';
import DatePicker from "react-datepicker";

let id =100;
class AddOffer extends Component {
 
  state={
            isExpired: false,
            name: "",
            description: "",
            fullDescription: '',
            oldPrice: 0,
            price: 0,
            category: "Culture",
            expirationDate: "",
            image: ""
        }
    
  

setSomething = (e,smg) =>{
  const value = e.target.value;
  // if (!this.check(value)){return;}
  switch (smg) {
    case "name" : 
            const name = value; 
            if (!this.check(value)){return;}
            return this.setState({ name });
    case "description" : 
            const description = value;
            if (!this.check(value)){return;}
            return this.setState({ description });
    case "fullDescription" :
    if (!this.check(value)){return;}
            const fullDescription = value;
            return this.setState({ fullDescription });
    case "oldPrice":
    if (!this.check(value)){return;}
            const oldPrice = value;
            return this.setState({ oldPrice });
    case "price":
    if (!this.check(value)){return;}
            const price = value;
            return this.setState({ price });
    case "category" :
    if (!this.check(value)){return;}
            const category = value;
            return this.setState({ category });
    case "expirationDate" :
    if (!this.checkDate(value)){return;}
            const expirationDate = value;
            return this.setState({ expirationDate });
    case "image" :
    if (!this.checkUrl(value)){return;}
            const image = value;
            return this.setState({ image });
    default:
            return;

  }
}
submit = e =>{
  e.preventDefault();
  let newOffer = {
    isExpired: false,
    name: this.state.name,
    description: this.state.description,
    fullDescription: this.state.fullDescription,
    oldPrice: this.state.oldPrice,
    price: this.state.price,
    category: this.state.category,
    expirationDate:this.state.expirationDate,
    image: this.state.image
  }

}

check = str =>{
  const isValid = /^[a-zA-Z0-9,. !?]*$/.test(str)
  return isValid
}
checkUrl = str =>{
  const isValid = /^[0-9./]*$/.test(str)
  return isValid
}
checkDate = date =>{
  const isValid = /^[0-9.]*$/.test(date)
  return isValid
}


  render(){

 
    return(
      <div className={styles.addOffer}>
         <article className={styles.info}>
        <form>
          <div>
          <label>
            Header name for the offer:
           
            <Input
            className={styles.addInputs}
             maxLength ="40"
            onChange={(e)=>{ this.setSomething(e,"name")}}
            value={this.state.name} />
             </label>
          </div>
          <div>
          <label>
            Shrot description:
            </label>
            <Input 
            className={styles.addInputs}
            maxLength ="40"
             onChange={(e)=>{ this.setSomething(e,"description")}}
            value={this.state.description}/>
          </div>
          <div>
          <label>
            Full description:
            </label>
            <textarea 
            className={styles.addInputs}
              rows="4" cols="50" 
              name="comment" form="usrform" 
              maxLength ="200"
              onChange={(e)=>{ this.setSomething(e,"fullDescription")}}
              value={this.state.fullDescription}></textarea>
          </div>
          <div>
          <label>
            Old price:
            </label>
            <Input
            className={styles.addInputs}
            onChange={(e)=>{ this.setSomething(e,"oldPrice")}}
            value={this.state.oldPrice}/> 
          </div>
          <div>
          <label>
            New price:
            </label>
            <Input
            className={styles.addInputs}
            onChange={(e)=>{ this.setSomething(e,"price")}}
            value={this.state.price}/>
          </div>
          <div>
          <label>Select category</label>
          <select 
          className={styles.addInputs}
            onChange={(e)=>{ this.setSomething(e,"category")}}
            value={this.state.category}>
            {/* Select category */}
            <option value="Culture">Culture</option>
            <option value="Eating Out">Eating Out</option>
            <option value="Vacations">Vacations</option>
          </select>
          </div>
          <div>
          <label>
          Expiration Date:
          </label>
            <Input 
            className={styles.addInputs}
            onChange={(e)=>{ this.setSomething(e,"expirationDate")}}
            value={this.state.expirationDate}></Input>
          </div>
          <div>
          <label>
          Url image:
          </label>
            <Input 
            className={styles.addInputs}
            onChange={(e)=>{ this.setSomething(e,"image")}}
            value={this.state.image}/>
          </div>
        </form>
        </article>
        <article>
        <SingleOfferTemp {...this.state} />
        </article>
        <div className={styles.button} disabled="disabled">
          <Button onClick={this.submit} title="READY" />
        </div>
        
      </div>
    )
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
