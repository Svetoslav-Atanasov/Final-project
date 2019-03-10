import React from "react";
import classes from "./Button.module.css";
import { withRouter } from 'react-router-dom';

const button = props => {
 //  const cl = console.log(props);

  // const preview = props.history.location.pathname === "/addOffer" ? true : false ;

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
export default withRouter(button);
