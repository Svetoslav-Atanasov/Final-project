import React from "react";
import styles from "./SideMenu.module.css";
import { Link } from "react-router-dom";

const sideMenu = props => {
  let classes = [styles.sideMenu];
  if (props.show) {
    classes.push(styles.open);
  }
  return (
    <nav className={classes.join(" ")}>
      <ul>
        <li>
          <Link to="/culture"> Culture </Link>
        </li>
        <li>
          <Link to="/eating"> Eating Out</Link>
        </li>
        <li>
          <Link to="/vacations"> Vacations </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideMenu;
