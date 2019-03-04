import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideMenu.module.css";
import theatre from "../assets/images/theatre.png";
import pochivki from "../assets/images/pochivki.png";
import meal from "../assets/images/meal.png";

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
          <span>
            <img width="30" height="30" src={theatre} />
          </span>
        </li>
        <li>
          <NavLink to="/eating"> Eating Out </NavLink>
          <span>
            <img width="30" height="30" src={meal} />
          </span>
        </li>
        <li>
          <NavLink to="/vacations"> Vacations </NavLink>
          <span>
            <img width="30" height="30" src={pochivki} />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default sideMenu;
