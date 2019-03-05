import React from "react";

import styles from "./OfferDisplaySingleTemplate.module.css";

import { withRouter } from "react-router";

import { Link } from "react-router-dom";

const offer = props => {
  return (
    <div className={styles.singleDiv}>
      <h1>{props.name}</h1>
      <div>
        <Link to={"/offerDetails/" + props.id}>
          <img src={props.image} className={styles.singleDisplayImage} />
        </Link>
      </div>
      <div>{props.description}</div>
      <div>{props.price} BGN</div>
      <div>{props.category}</div>
    </div>
  );
};

export default withRouter(offer);
