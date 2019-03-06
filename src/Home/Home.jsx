import React from "react";
import styles from "./Home.module.css";
import Offers from "../Offers/Offers";


class Home extends React.Component {
  
  render() {

   


    return (
      <div className={styles.mainDiv}>
        <Offers />
      </div>
    );
  }
}

export default (Home)