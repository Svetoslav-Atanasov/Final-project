
import React, { Component } from 'react';
import styles from "./OfferDisplaySingleTemplate.module.css";
import Button from "../UI/Button/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getToCart } from '../Storage/actions/users';




class SingleOfferTemp extends Component {

  state ={
    broi :''
  }
  toGetToCart = id => {

    const number = Math.ceil(Math.random()*10000);
    const broi  =this.state.broi;
    const voucher = {broi:broi , number:number};
    this.props.getToCart(id,voucher);
  }

  change = e =>{
    this.setState({broi: e.target.value})
  }

  render(){
    return (
      <div className={styles.singleDiv}>
        <h1>{this.props.name}</h1>
        <div>
          <img src={this.props.image} className={styles.singleDisplayImage} />
        </div>
        <div>{this.props.description}</div>
        <div>{this.props.price} BGN</div>
        <div>{this.props.category}</div>
        
        <select onChange={this.change} value={this.state.value}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <Button
          onClick={()=> !this.props.current ? this.props.history.push('/loginPage') : this.toGetToCart(this.props.current.id)}
          style={{
            width: "8em"
          }}
          title="GET VOUCHER"
        />
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
    getToCart: (id,voucher) => dispatch(getToCart(id,voucher))
  }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleOfferTemp));
