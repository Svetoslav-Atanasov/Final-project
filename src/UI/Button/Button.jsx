import React from "react";
import classes from "./Button.module.css";

const button = props => {
    // const cl = console.log(props);
  return (      
    <button
      onClick={props.onClick}
      className={`${classes.Button} ${props.className}`}
      //className={classes.Button}
      style={props.style}
      disabled={props.diabled || false}
    >
      {" "}
      {props.title}{" "}
    </button>
  );
};
export default button;
