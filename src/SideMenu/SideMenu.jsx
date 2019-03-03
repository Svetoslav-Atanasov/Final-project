import React from "react";
import styles from "./SideMenu.module.css";
import { NavLink } from "react-router-dom";

const sideMenu = props => {
  let classes = [styles.sideMenu];
  if (props.show) {
    classes.push(styles.open);
  }
  return (
    <nav className={classes.join(" ")}>
      <ul>
        <li>
          <NavLink to="/culture"> Culture </NavLink>
        </li>
        <li>
          <NavLink to="/eating"> Eating Out</NavLink>
        </li>
        <li>
          <NavLink to="/vacations"> Vacations </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default sideMenu;
