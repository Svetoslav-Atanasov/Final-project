import React from "react";
import classes from "./Button.module.css";

const button = props => {
 //  const cl = console.log(props);
  return props.timerDisabled ? (
    <button
      onClick={props.onClick}
      className={`${classes.Button} ${props.className}`}
      style={props.style}
      disabled
    >
      {" "}
      {props.title}{" "}
    </button>
  ) : (
    <button
      onClick={props.onClick}
      className={`${classes.Button} ${props.className}`}
      style={props.style}
    >
      {" "}
      {props.title}{" "}
    </button>
  );
};
export default button;
