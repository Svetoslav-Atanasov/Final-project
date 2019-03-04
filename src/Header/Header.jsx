import React, { Component } from "react";
import LoginBox from "../LoginBox/LoginBox";
import RegisterBox from "../RegisterBox/RegisterBox";
import styles from "./Header.module.css";
import Logo from "../UI/Logo/Logo";

export default class Header extends Component {
  state = {
    isLoginOpen: false,
    isRegisterOpen: false,
    isOpen: false,
    commingFrom: null
  };

  showRegisterBox = () => {
    this.setState({ isLoginOpen: false, isRegisterOpen: true });

    if (this.state.commingFrom === "login" || !this.state.isOpen) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
    this.setState({ commingFrom: "register" });
  };

  showLoginBox = () => {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });

    if (this.state.commingFrom === "register" || !this.state.isOpen) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
    this.setState({ commingFrom: "login" });
  };

  hideForm = () => {
    this.props.lightBackground();
    this.setState({ isLoginOpen: false, isRegisterOpen: false, isOpen: false });
  };

  render() {
    let classesWhenOpen = [styles.login];
    let classesForControllerLogin = [styles.controller];
    let classesForControllerReg = [styles.controller];
    let notSelectedControler = null;
    if (this.state.isOpen) {
      notSelectedControler = styles.notselected;
    }

    classesWhenOpen.push(this.state.isOpen ? styles.lighter : null);
    classesForControllerLogin.push(
      this.state.isLoginOpen && this.state.isOpen
        ? styles.selectedController
        : notSelectedControler
    );
    classesForControllerReg.push(
      this.state.isRegisterOpen && this.state.isOpen
        ? styles.selectedController
        : notSelectedControler
    );

    return (
      <>
        <nav className={styles.Header}>
          <Logo />
          <div className={classesWhenOpen.join(" ")}>
            <div className={styles.loginNav}>
              <div
                className={classesForControllerLogin.join(" ")}
                onClick={this.showLoginBox}
              >
                {" "}
                <p className={styles.navPanelButtons}> LOGIN </p>
              </div>

              <div
                className={classesForControllerReg.join(" ")}
                onClick={this.showRegisterBox}
              >
                {" "}
                <p className={styles.navPanelButtons}> REGISTER </p>
              </div>
            </div>

            <div
              className={this.state.isOpen ? styles.form : styles.formHidden}
            >
              {" "}
              {this.state.isLoginOpen ? <LoginBox /> : <RegisterBox />}{" "}
            </div>
          </div>{" "}
          {/* <li><Link to="/">1</Link></li>
                            <li><Link to="/">2</Link></li>
                            <li><Link to="/">3</Link></li> */}
        </nav>{" "}
      </>
    );
  }
}
