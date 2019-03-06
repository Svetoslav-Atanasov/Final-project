import React, { Component } from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const footer = props => (
  <React.Fragment>
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          {" "}
          Copyright © 2019{" "}
          <a
            className={styles.githubLinks}
            target="_blank"
            href="https://github.com/MirenaDim"
          >
            Mirena Dimitrova
          </a>{" "}
          and{" "}
          <a
            className={styles.githubLinks}
            target="_blank"
            href="https://github.com/Svetoslav-Atanasov/"
          >
            Svetoslav Atanasov
          </a>
        </p>
      </div>
    </footer>
  </React.Fragment>
);

export default footer;
