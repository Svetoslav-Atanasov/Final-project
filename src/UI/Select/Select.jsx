import React from "react";
import styles from "./Select.module.css";

const Select = props => {
  return (
    <select className={styles.quantitySelect} onChange={props.onChange}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  );
};
export default Select;
