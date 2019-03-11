import React from "react";
import classes from "./Input.module.css";

const input = props => {
  return (
    <input
      //tuk mojem da slojim cqlata logika, ako ima errori da swetne cherveno ...
      className={classes.Input}
      // za da ne izbroqvame vsichki - onfocus, onbkur .... razpukvame obekta
      {...props}
      //taka vsichko koeto podadem shte vliza v tova inputche
      styles={props.styles}
    />
  );
};
export default input;
