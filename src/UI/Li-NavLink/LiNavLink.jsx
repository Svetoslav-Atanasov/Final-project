import React, { Component } from "react";
import styles from "./LiNavLink.module.css";
import { NavLink } from "react-router-dom";

class LiNavlink extends Component {
  render() {
    return (
      <li className={styles.liNavLinkList}>
        <NavLink
          exact
          to={this.props.to}
          className={styles.ordinaryLink}
          activeClassName={styles.ActiveLink}
          onClick={this.props.onClick}
        >
          <span className={styles.categoryName}> {this.props.title} </span>{" "}
          {this.props.src ? (
            <img width="40" height="40" src={this.props.src} />
          ) : null}{" "}
          {this.props.otherComponent ? this.props.otherComponent : null}
        </NavLink>{" "}
      </li>
    );
  }
}
export default LiNavlink;
