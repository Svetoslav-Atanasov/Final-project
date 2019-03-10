import React, { Component } from "react";
import styles from "./LiLInk.module.css";
import { Link } from "react-router-dom";

class Lilink extends Component {
  render() {
    return (
      <li className={styles.liLinkList}>
        <Link
          exact
          to={this.props.to}
          className={styles.ordinaryLink}
          onClick={this.props.onClick}
        >
          <span className={styles.categoryName}> {this.props.title} </span>{" "}
          {this.props.src ? (
            <img width="40" height="40" src={this.props.src} />
          ) : null}{" "}
          {this.props.otherComponent ? this.props.otherComponent : null}
        </Link>{" "}
      </li>
    );
  }
}
export default Lilink;
