import React from "react";
import styles from "./Select.module.css";

const Select = () => {
  return (
    <select className={styles.quantitySelect}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  );
};
export default Select;
