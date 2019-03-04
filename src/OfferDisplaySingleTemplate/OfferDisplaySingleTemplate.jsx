import React from "react";
import styles from "./OfferDisplaySingleTemplate.module.css";

const SingleOfferTemp = props => {
  return (
    <div className={styles.singleDiv}>
      <h1>{props.name}</h1>
      <div>
        <img src={props.image} className={styles.singleDisplayImage} />
      </div>
      <div>{props.description}</div>
      <div>{props.price} BGN</div>
      <div>{props.category}</div>
    </div>
  );
};

export default SingleOfferTemp;
