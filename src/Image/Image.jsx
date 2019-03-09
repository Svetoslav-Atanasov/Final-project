import React from "react";
import { withRouter } from "react-router";

const Image = props => {
  const imageStyle = {
    backgroundImage: "url(" + props.image + ")",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    // width:"100%",
    width: "300px",
    height: "200px",
    // margin: "0px 20px",
    // borderRadius: "30px/10px",
    // border: "2px solid black"
  };
  return <div style={imageStyle} />;
};

export default withRouter(Image);
