import React, { Component } from "react";
import Button from "../UI/Button/Button";
import styles from "./RegisterBox.module.css";
import Input from "../UI/Input/Input";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { addUser } from "../Storage/actions/users";

var id = 2;
class RegisterBox extends Component {
  state = {
    newUser: {
      email: "",
      password: "",
      vouchersInCart: [],
      bought : [],
      lastSeen:[]
    },
    errors: [],
    pswdStrength: "",
    isOk: true
  };
  setEmail = e => {
    const value = e.target.value;
    if (!/^[a-zA-Z0-9._@]*$/.test(value)){
      return;
    }
    const newUser = { ...this.state.newUser };
    newUser.email = value;
    this.setState({ newUser });
    this.hideValidationErr("email");
  };
  setPassword = e => {
    const value = e.target.value;
    if (!/^[a-zA-Z0-9]*$/.test(value)){
      return;
    }
    const newUser = { ...this.state.newUser };
    newUser.password = value;
    this.setState({ newUser });
    this.hideValidationErr("password");

    this.setState({ pswdStrength: "week" });
    if (e.target.value.length >= 4) {
      this.setState({ pswdStrength: "medium" });
    }
    if (e.target.value.length >= 8) {
      this.setState({ pswdStrength: "strong" });
    }
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
    this.setState({ errors });
  };

  submitRegister = e => {
    e.preventDefault();

    if (this.state.newUser.email.trim() === "") {
      this.showValidationErr("email", "Empty email input");
      return;
    } else {
      if (!this.validateEmail(this.state.newUser.email)) {
        this.showValidationErr("email", "Invalid email");
        return;
      }
    }
    if(this.props.userList.some(u=> u.email === this.state.newUser.email)){
      this.showValidationErr("email", "Email is registered");
      return;
    }

    if (this.state.newUser.password.trim() === "") {
      this.showValidationErr("password", "Empty password input");
      return;
    }
    if (this.state.pswdStrength === "week") {
      this.showValidationErr("password", "Weak password");
      return;
    }

    this.makeNewUser();
  };

  makeNewUser = () => {
    this.state.newUser.id = ++id;
    this.props.addUser(this.state.newUser);

    const newUser = { email: "", password: "" };
    this.setState({ newUser: newUser });
    console.log(this.props.history);
    this.props.history.push("/loginPage");
  };

  validateEmail = email => {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  render() {
    //priemame, che nqma greshki
    let emailErr = null;
    let passwordErr = null;
    let pswdWeek = false;
    let pswdStrong = false;
    let pswdMedium = false;
    let stylesPswd = [styles.Pswd];
    let weekPswd = [styles.Pswd, styles.pswdWeak];
    let mediumPswd = [styles.Pswd, styles.pswdMedium];
    let strongPswd = [styles.Pswd, styles.pswdStrong];

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
    //proverqvame, silata na parolata, za da znaem kakva sila da pokajem na ekrana
    if (this.state.pswdStrength === "week") {
      pswdWeek = true;
    }
    if (this.state.pswdStrength === "medium") {
      pswdWeek = true;
      pswdMedium = true;
    }
    if (this.state.pswdStrength === "strong") {
      pswdWeek = true;
      pswdMedium = true;
      pswdStrong = true;
    }
    if (pswdWeek) {
      weekPswd.push(styles.showPswd);
    }
    if (pswdMedium) {
      mediumPswd.push(styles.showPswd);
    }
    if (pswdStrong) {
      strongPswd.push(styles.showPswd);
    }

    const additionalButtonStyle= {margin: "20px auto", display: "block"};

    return (
      <div>
        <div/>{" "}
        <div>
          <Input
            type="text"
            placeholder="Email"
            onChange={this.setEmail}
            value={this.state.newUser.email}
          />{" "}
          <p className={styles.RegErr}> {emailErr ? emailErr : ""} </p>{" "}
        </div>
        <div>
          {" "}
          <Input
            type="password"
            placeholder="Password"
            onChange={this.setPassword}
            value={this.state.newUser.password}
          />{" "}
          <p className={styles.RegErr}> {passwordErr ? passwordErr : ""} </p>{" "}
          {this.state.newUser.password && (
            <div className={styles.pswdBox}>
              <div className={weekPswd.join(" ")}> </div>{" "}
              {/* v zavisimost ot silata na parolata dobavqme dopylnitelen style class, koito da pokaje skritoto divche */}{" "}
              <div className={mediumPswd.join(" ")}> </div>{" "}
              <div className={strongPswd.join(" ")}> </div>{" "}
            </div>
          )}{" "}
        </div>{" "}
        <Button onClick={this.submitRegister} title="Register" style={additionalButtonStyle} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: newUser => dispatch(addUser(newUser))
  };
};

const mapStateToProps = (state) => {
  return {
    userList: state.user.userList
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RegisterBox));
