import React, { Component } from 'react';
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'


export default class LoginBox extends Component{
    state = {
      email:'',
      password:'',
      errors: []
    }
  
    setEmail = (e) =>{
      const value = e.target.value;
      const email = value;
      this.setState({ email })
    }
  
    setPassword = (e) => {
      const value = e.target.value;
      const password = value;
      this.setState({ password })
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
     
  
    }
    
    render() {
      
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
        </div>
        <div className="inputGroup">
        {/* <label>Password:</label> */}
          <Input 
            type="password" 
            placeholder="Password" 
            onChange={this.setPassword} 
            value={this.state.password}>
          </Input>
        </div>
        <Button style={ {width:"8em"} } title="Влез"/>
      </div>
      )
      
    }
  }