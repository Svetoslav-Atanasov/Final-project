import React from "react";
import styles from "./Home.module.css";
import Offers from "../Offers/Offers";

export default class Home extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div className={styles.mainDiv}>
        <Offers />
      </div>
    );
  }
}
