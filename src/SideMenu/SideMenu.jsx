import React from "react";
import styles from "./SideMenu.module.css";

const sideMenu = props => {
  let classes = [styles.sideMenu];
  if (props.show) {
    classes.push(styles.open);
  }
  return (
    <nav className={classes.join(" ")}>
      <ul>
        <li>
          <p> Хапване </p>
        </li>
        <li>
          <p> Почивки </p>
        </li>
        <li>
          <p> Култура </p>
        </li>
      </ul>
    </nav>
  );
};

export default sideMenu;
