import React, { Component } from 'react';
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import styles from './LoginBox.module.css'
import { connect } from 'react-redux'
import { setCurrentUser } from '../Storage/actions/users'
import { withRouter } from "react-router";



class LoginBox extends Component{
    state = {
      email:'',
      password:'',
      errors: []
    }
  
    setEmail = (e) =>{
      const value = e.target.value;
      const email = value;
      this.setState({ email })
      this.hideValidationErr("email")
    }
  
    setPassword = (e) => {
      const value = e.target.value;
      const password = value;
      this.setState({ password })
      this.hideValidationErr("password")
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
    submitLogin = (e) =>{
      e.preventDefault();

      //proverqvame v storidja dali ima takyv user
        let user =  this.props.userList.find(user => 
          user.email === this.state.email
          && user.password === this.state.password )
          //ako nqma pokazvame syobshtenie za greshka         
          if(!user){
            this.showValidationErr("email","Грешен e-mail")
            this.showValidationErr("password","Грешна или забравена парола")
          }else{
            //ако съществува такъв регистриран юзер, го вкарваме в сториджа, като текущ
            console.log(user)
            this.props.setCurrentUser(user)

            sessionStorage.setItem('currentUser',user.email)
            this.props.history.push('/')
          }
          
        
    }
   

    render() {
      let emailErr = null;
      let passwordErr = null;
      
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


      return(
      <div className="innerContainer">
        <div className="boxHeader">
          Login
        </div>
        <div className="inputGroup">
         <label>Email:</label>
          <Input 
            type="text" 
            placeholder="Email" 
            onChange={this.setEmail}  
            value={this.state.email}>
          </Input>
          <p className={styles.LogErr}>{emailErr ? emailErr : ""}</p>
        </div>
        <div className="inputGroup">
        {/* <label>Password:</label> */}
          <Input 
            type="password" 
            placeholder="Password" 
            onChange={this.setPassword} 
            value={this.state.password}>
          </Input>
          <p className={styles.LogErr}>{passwordErr ? passwordErr : ""}</p>
        </div>
        <Button onClick={this.submitLogin} style={ {width:"8em"} } title="Влез"/>
      </div>
      )
      
    }
  }

  const mapStateToProps = (state) => {
    return {
      userList: state.userList,
      current: state.currentUser
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      setCurrentUser: user => dispatch(setCurrentUser(user)),
    }
  }
   

export default connect( mapStateToProps, mapDispatchToProps )(withRouter(LoginBox));