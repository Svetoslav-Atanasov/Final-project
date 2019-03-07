import React, { Component } from "react";
import styles from "./OfferDisplaySingleTemplate.module.css";
import Button from "../UI/Button/Button";
import { connect } from "react-redux";
import { getToCart } from '../Storage/actions/users';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Select from "../UI/Select/Select"



class Offer extends Component {
  //ot stateless go pravq na statefull component, 
  //za da moje da si pazi informaciqta ot input-a  kolko vauchera da bydat kupeni
  // i syotvetno s funkciqta toGetToCart() - da vleznat v kolichkata na tekushtiq user
  state ={
      broi :'1'
    }

    //tazi funkciq - vzima id na potrebitelq  i slaga v koshnicata mu - vaucher 
    toGetToCart = (id,offerId) => {
        // number shte e unikalen nomer na vauchera
        const number = Math.ceil(Math.random()*10000);
        const broi  =this.state.broi;
        
        console.log('broikata e ' + broi)
        // pravq nov obekt vaucher i go slagam v kolickata na tekushtiq potrebitel
        const voucher = {broi, number, offerId, isUsed:false};
        this.props.getToCart(id,voucher);
      } 

      
      //tazi funkciq change() - shte vzima value ot inputa i shte go slaga v state, za da se zapzi
      // i da moje da byde izprateno
    change = e =>{
    this.setState({broi: e.target.value})
    }

  render(){
    return (
      <div className={styles.singleDiv}>
        <h1 className={styles.titleMainScreen}>{this.props.name}</h1>
        <div>
          <Link to={"/offerDetails/" + this.props.id}>
            <img src={this.props.image} className={styles.singleDisplayImage} />
          </Link>
        </div>
        <div>{this.props.description}</div>
        <div>{this.props.price}</div>
        <div>{this.props.category}</div>

        <Select onChange={this.change} value={this.state.value}/>


        <Button
        //tuk proverqvam dali ima lognat user -> ako nqma - da go preprashta na login stranicata
        // ako ima da gi sloji v kolichkata
            onClick={()=> !this.props.current ? this.props.history.push('/loginPage') : this.toGetToCart(this.props.current.id, this.props.id)}

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
 

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Offer));

