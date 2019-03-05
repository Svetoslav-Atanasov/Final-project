import React from "react";
import styles from "./Home.module.css";
import Offers from "../Offers/Offers";
// import { withRouter } from "react-router";
import { connect } from "react-redux";

class Home extends React.Component {
  
  render() {
    // neka vsichki oferi sa ravni na oferite, koito se namirat v stora
    let offerList = this.props.offerList


    return (
      <div className={styles.mainDiv}>
        <Offers />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    offerList: state.offer.offerList
  };
};


export default connect( mapStateToProps, null)(Home)