import React from "react";
import classes from "./Button.module.css";
<<<<<<< HEAD
import { withRouter } from 'react-router-dom';

const button = props => {
 //  const cl = console.log(props);

  // const preview = props.history.location.pathname === "/addOffer" ? true : false ;

=======
import Bounce from "react-reveal/Fade";

const button = props => {
  //  const cl = console.log(props);
>>>>>>> refs/remotes/origin/master
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
