import React, { Component } from "react";
import LoginBox from "../LoginBox/LoginBox";
import RegisterBox from "../RegisterBox/RegisterBox";
import styles from "./Header.module.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeCurrentUser } from "../Storage/actions/users"
import BackShadow from "../BackShadow/BackShadow";
import Logo from "../UI/Logo/Logo";

class Header extends Component {
  state = {
    isLoginOpen: false,
    isRegisterOpen: false,
    isOpen: false,
    commingFrom: null
  };

  resetState = () => {

    this.setState({
      isLoginOpen: false,
      isRegisterOpen: false,
      isOpen: false,
      commingFrom: null
    })
  }

  showRegisterBox = () => {

    if (this.props.current){return}
    this.setState({ isLoginOpen: false, isRegisterOpen: true });

    if (this.state.commingFrom === "login" || !this.state.isOpen) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
    this.setState({ commingFrom: "register" });
  };

  showLoginBox = () => {
    if (this.props.current){return}
    this.setState({ isLoginOpen: true, isRegisterOpen: false });

    if (this.state.commingFrom === "register" || !this.state.isOpen) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
    this.setState({ commingFrom: "login" });
  };

  hideForm = () => {
    this.setState({ isLoginOpen: false, isRegisterOpen: false, isOpen: false });
  };

  logOut = () => {
    this.resetState()
   this.props.removeCurrentUser();
   
  }

  render() {
    // Zashto, kato si go vikna ot props gyrmi ??????? - mai ne gyrmi ???
 
    let currentUser = this.props.current;
    let classesWhenOpen = [styles.login];
    let classesForControllerLogin = [styles.controller];
    let classesForControllerReg = [styles.controller];
    let notSelectedControler = null;
    let loginPage = this.props.history.location.pathname === "/loginPage" ? true : false ;
    

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

    const loginBar = (<div
                        className={classesForControllerLogin.join(" ")}
                        onClick={this.showLoginBox}>
                        {" "}
                        <p className={styles.navPanelButtons}> LOGIN </p>
                      </div>)

    const RegisterBar = (<div
                          className={classesForControllerReg.join(" ")}
                          onClick={this.showRegisterBox}>
                          {" "}
                          <p className={styles.navPanelButtons}> REGISTER </p>
                        </div>)
  const whenHasUser = <>    
         <ul className={styles.ulNav}>
           <li className={styles.liNav}><NavLink to="/myProfile"> MY PROFILE </NavLink></li>
           <li className={styles.liNav}><NavLink to="/myVouchers"> MY VOUCHERS</NavLink></li>
           <li className={styles.liNav}><NavLink onClick={()=>this.logOut()} to="/" > EXIT </NavLink></li>
         </ul>
      </>
    return (
      <>
        {" "}
        {this.state.isOpen && !loginPage && !currentUser ? <BackShadow onClick={this.hideForm} /> : null}{" "}
        <nav className={styles.Header}>
        <Logo />

          <div className={classesWhenOpen.join(" ")}>
            <div className={styles.loginNav}>
              
              {!loginPage && !currentUser ? 
                <>
                {loginBar} 
                {RegisterBar}
                </> : null }
              {currentUser ?
              <>
              {whenHasUser}
              </> : null}

              
            </div>

            <div
              className={this.state.isOpen && !loginPage && !currentUser ? styles.form : styles.formHidden}
            >
              {" "}
              {!loginPage && !currentUser ? 
                <>
                {this.state.isLoginOpen ? <LoginBox /> : <RegisterBox />}
                </> : null }
            </div>
          </div>{" "}
        </nav>{" "}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    current: state.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeCurrentUser: user => dispatch(removeCurrentUser())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header));
