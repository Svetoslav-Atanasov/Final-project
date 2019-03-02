import React, { Component } from 'react';
import Button from '../UI/Button/Button'
import styles from './RegisterBox.module.css'
import Input from '../UI/Input/Input'

export default class RegisterBox extends Component{

    state={
      newUser:{
        email:"",
        password:""
      },
    errors: [],
    pswdStrength:""
  
    }
    setEmail = (e) =>{
      const value = e.target.value;
      const newUser={...this.state.newUser}
      newUser.email = value;
      this.setState({ newUser })
      this.hideValidationErr("email")
  
    }
    setPassword = (e) => {
      const value = e.target.value;
      const newUser={...this.state.newUser}
      newUser.password = value;
      this.setState({ newUser })
      this.hideValidationErr("password")
  
      this.setState({ pswdStrength: "week"})
      if(e.target.value.length >= 4){
        this.setState({ pswdStrength: "medium"})
      }
      if(e.target.value.length >= 8 ){
        this.setState({ pswdStrength: "strong"})
      }
    }
  
    showValidationErr = (elm,msg) => {
      this.setState((prevState) => ({errors:[  ...prevState.errors, {
        elm,
        msg
        }]
      }));
    }
    hideValidationErr = (elm) => {
      const errors = this.state.errors.filter(err => err.elm!==elm)
      this.setState({ errors })
  
    }
    submitRegister = (e) =>{
      e.preventDefault();
      if(this.state.newUser.email.trim() === ""){
        this.showValidationErr("email","Email can not be empty")
      }
      if(!this.validateEmail(this.state.newUser.email)){
        this.showValidationErr("email","Email not valid")
      }
      if(this.state.newUser.password.trim() === ""){
        this.showValidationErr("password","Password can not be empty")
      }
  
    }
    validateEmail = (email) => {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  
    render(){
      //priemame, che nqma greshki
      let emailErr = null;
      let passwordErr = null;
      let pswdWeek = false;
      let pswdStrong = false;
      let pswdMedium = false;
      let stylesPswd = [styles.Pswd]
      let weekPswd=[styles.Pswd, styles.pswdWeak ]
      let mediumPswd=[styles.Pswd, styles.pswdMedium ]
      let strongPswd=[styles.Pswd,styles.pswdStrong ]
     
     
  
      //proverqvame, dali ima vyzniknala greshka i kakva, syotvetno q zapazvame v promenlivite ni
    for(let err of this.state.errors){
        if(err.elm =="email"){
          emailErr=err.msg
        }
        //vyzmojno e da ima 2 greshki
        if(err.elm == "password"){
          passwordErr=err.msg
        }
    }
    //proverqvame, silata na parolata, za da znaem kakva sila da pokajem na ekrana
    if(this.state.pswdStrength === "week"){
      pswdWeek = true;
    } 
    if(this.state.pswdStrength === "medium"){
      pswdWeek = true;
      pswdMedium = true;
    }
    if(this.state.pswdStrength === "strong"){
      pswdWeek = true;
      pswdMedium = true;
      pswdStrong = true;
    }
    if(pswdWeek){
      weekPswd.push(styles.showPswd)
    } 
    if(pswdMedium){
      mediumPswd.push(styles.showPswd)
    } 
    if(pswdStrong){
      strongPswd.push(styles.showPswd)
    } 
    
  
      return(
      <div className="innerContainer">
        <div className="boxHeader">
      
        </div>
         <div className="inputGroup">
          <label>Email:</label> 
          <Input 
            type="text" 
            placeholder="Email" 
            onChange={this.setEmail} 
            value={this.state.newUser.email}>
          </Input>
          <p className={styles.RegErr}>{emailErr ? emailErr : ""}</p>
        </div>
  
         <div className="inputGroup">
          {/* <label>Password:</label> */}
          <Input 
            type="password" 
            placeholder="Password" 
            onChange={this.setPassword} 
            value={this.state.newUser.password}>
          </Input>
          <p className={styles.RegErr}>{passwordErr ? passwordErr : ""}</p>
          {this.state.newUser.password && 
          <div className={styles.pswdBox}>
            <div className={weekPswd.join(' ')}></div>
            {/* v zavisimost ot silata na parolata dobavqme dopylnitelen style class, koito da pokaje skritoto divche */}
            <div className={mediumPswd.join(' ')}></div>
            <div className={strongPswd.join(' ')}></div>
          </div>
          }
        </div>
        <Button onClick = { this.submitRegister } title="Регистрирай се"/>
      </div>
      )
    }
  }
  
  