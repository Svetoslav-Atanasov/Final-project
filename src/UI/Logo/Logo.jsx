import React, { Component } from "react";
import styles from "./Logo.module.css";
import { NavLink } from "react-router-dom";
// importing images from local file storage
import logoImage from "../Images/LogoImage.jpg";

const Logo = () => {
  return (
    <>
      <NavLink to="/">
        <img src={logoImage} alt="Logo" className={styles.logoMainImage} />
      </NavLink>

      <p>
        <NavLink to="/" className={styles.logo}>
          {" "}
          GRAB IT{" "}
        </NavLink>
      </p>
    </>
  );
};

export default Logo;
