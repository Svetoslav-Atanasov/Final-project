import React from "react";
import styles from "./OfferDisplaySingleTemplate.module.css";

const SingleOfferTemp = props => {
  return (
    <div className={styles.singleDiv}>
      <h1>{this.props.name}</h1>
      <div>
        <img src={props.image} className={styles.singleDisplayImage} />
      </div>
      <div>{this.props.description}</div>
      <div>{this.props.price} BGN</div>
      <div>{this.props.category}</div>
    </div>
  );
};

export default SingleOfferTemp;
