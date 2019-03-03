import React, { Component } from "react";
import styles from "./Logo.module.css";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <p >
      <Link to="/" className={styles.logo} > GRAB IT </Link>
    </p>
  );
};

export default Logo;
