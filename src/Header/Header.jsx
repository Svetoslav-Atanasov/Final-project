import React, { Component } from "react";
import LoginBox from "../LoginBox/LoginBox";
import RegisterBox from "../RegisterBox/RegisterBox";
import styles from "./Header.module.css";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { removeCurrentUser } from "../Storage/actions/users"
import BackShadow from "../BackShadow/BackShadow";
import Logo from "../UI/Logo/Logo";
import exit from '../assets/images/exit.png'
import voucher from '../assets/images/voucher.png'
import ShoppingCart from "../UI/ShoppingCart/ShoppingCart"
import SearchBox from "../UI/SearchBox/SearchBox"
import Statistic from "../assets/images/statistic.png"
import Add from "../assets/images/add.png"
import LiLink from "../UI/LiLink/LiLInk"


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
  // sessionStorage.removeItem('currentUser')
   this.props.history.push("/")
  }

  render() {
    
    let currentUser = this.props.current;
    let classesWhenOpenLogReg = [styles.login];
    let classesForControllerLogin = [styles.controller];
    let classesForControllerReg = [styles.controller];
    let notSelectedControler = null;
    let loginRegPage = 
      this.props.history.location.pathname === "/loginPage" 
      || this.props.history.location.pathname === "/Register" 
      ? 
      true : false ;
      
    let isAdmin = false;

    if(this.props.current && this.props.current.email === "admin@admin.bg"){
      isAdmin = true;
     
    }
  
    // if (this.state.isLoginOpen && this.state.isOpen){
    //       if(LoginPage){
    //         classesForControllerLogin.push
    //       }
    // }
    classesForControllerLogin.push(
      this.state.isLoginOpen && this.state.isOpen && !loginRegPage
        ? styles.selectedController
        : notSelectedControler
    );
    classesForControllerReg.push(
      this.state.isRegisterOpen && this.state.isOpen && !loginRegPage
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
    
    let whenHasUser = (!isAdmin ?
      <>    
         <ul className={styles.ulNav}>
          {/* <LiNavLink to="/myProfile" src={UserProfile} /> */}
       
          <LiLink to="/myVouchers" activeClassName={styles.link} src={voucher}/>
          <LiLink to="/myShoppingCart" otherComponent = {<ShoppingCart />}></LiLink>
           <LiLink to="/"  activeClassName={styles.link} src={exit} onClick={()=>this.logOut()}/>
         </ul>
      </>
      :
      <>
      <LiLink to="/statistic" activeClassName={" "} src={Statistic} />
      <LiLink to="/addOffer"  activeClassName={" "} src={Add}/>
      <LiLink to="/" activeClassName={" "} src={exit} onClick={()=>this.logOut()}/>
      </>)
    return (
      <>
        {" "}
        {this.state.isOpen && !loginRegPage && !currentUser ? <BackShadow onClick={this.hideForm} /> : null}{" "}
        <nav className={styles.Header}>
        <Logo />

          <div className={classesWhenOpenLogReg.join(" ")}>
            <div className={styles.loginNav}>
              
              {!currentUser ? 
                <>
                {loginBar} 
                {RegisterBar}
                </> 
                : null }
              {currentUser ?
              <>
              {whenHasUser}
              </> : null}

              
            </div>

            <div
              className={this.state.isOpen && !loginRegPage && !currentUser ? styles.form : styles.formHidden}
            >
              {" "}
              {!loginRegPage && !currentUser ? 
                <>
                {this.state.isLoginOpen ? <LoginBox /> : <RegisterBox />}
                </> : null }
            </div>
          </div>{" "}
          <SearchBox  whereToSearch="AllOffers" />
        </nav>{" "}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    current: state.user.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeCurrentUser: user => dispatch(removeCurrentUser())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header));
