import React, { Component } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./LoginBox.module.css";
import { connect } from "react-redux";
import { setCurrentUser } from "../Storage/actions/users";
import { withRouter } from "react-router";

class LoginBox extends Component {
  state = {
    email: "",
    password: "",
    errors: []
  };

  setEmail = e => {
    const value = e.target.value;
    const email = value;
  
    this.setState({
      email
    });
    this.hideValidationErr("email");
  };

 
  setPassword = e => {
    const value = e.target.value;
    const password = value;

    this.setState({
      password
    });
    this.hideValidationErr("password");
  };
  showValidationErr = (elm, msg) => {
    this.setState(prevState => ({
      errors: [
        ...prevState.errors,
        {
          elm,
          msg
        }
      ]
    }));
  };
  hideValidationErr = elm => {
    const errors = this.state.errors.filter(err => err.elm !== elm);
    this.setState({
      errors
    });
  };
  submitLogin = e => {
    e.preventDefault();
    // console.log('tekushtiq userList e:')
    // console.log(this.props.userList)
  
    //proverqvame v storidja dali ima takyv user
    // console.log('tuk kydeto kazva can not read FIND from undefine : ')
    // console.log(this.props.userList)
    let user = this.props.userList.find(
      user =>
        user.email === this.state.email && user.password === this.state.password
    );
    //ako nqma pokazvame syobshtenie za greshka
    if (!user) {
      this.showValidationErr("email", "Invalid e-mail");
      this.showValidationErr("password", "Wrong or forgotten password");
    } else {
      //ако съществува такъв регистриран юзер, го вкарваме в сториджа, като текущ
      

      this.props.setCurrentUser(user);

  
      this.props.history.push("/");
    }
  };

  render() {
  
    let emailErr = null;
    let passwordErr = null;

    //proverqvame, dali ima vyzniknala greshka i kakva, syotvetno q zapazvame v promenlivite ni
    for (let err of this.state.errors) {
      if (err.elm == "email") {
        emailErr = err.msg;
      }
      //vyzmojno e da ima 2 greshki
      if (err.elm == "password") {
        passwordErr = err.msg;
      }
    }

    // const additionalButtonStyle= {marginTop: "20px", marginLeft: "80px"}
    const additionalButtonStyle= {margin: "20px auto", display: "block"};




    return (

      <div className="innerContainer">
        <div className="boxHeader"> </div>{" "}
        <div className="inputGroup">
          <Input
            type="text"
            placeholder="Email"
            onChange={this.setEmail}
            value={this.state.email}
          />{" "}
          <p className={styles.LogErr}> {emailErr ? emailErr : ""} </p>{" "}
        </div>{" "}
        <div className="inputGroup">
          {" "}
          <Input
            type="password"
            placeholder="Password"
            onChange={this.setPassword}
            value={this.state.password}
          />{" "}
          <p className={styles.LogErr}> {passwordErr ? passwordErr : ""} </p>{" "}
        </div>{" "}
        <Button
          onClick={this.submitLogin}
          title="Login" style={additionalButtonStyle}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.user.userList,
    current: state.user.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginBox));
