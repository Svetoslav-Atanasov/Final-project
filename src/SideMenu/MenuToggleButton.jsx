import React from "react";
import styles from "./MenuToggleButton.module.css";
const menuToggleButton = props => {
  return (
    <button className={styles.toggleButton} onClick={props.onClick}>
      Всички оферти
    </button>
  );
};

export default menuToggleButton;
