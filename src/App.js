import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Button from './UI/Button/Button'
import Input from './UI/Input/Input'


class App extends Component {

state ={
//  darken: true
}


// darkBackground = () =>{
// this.setState({darken:true})
// }

// lightBackground = () => {
//   this.setState({darken:false})
// }
  render() {
    let style=[]
    return (
    // <div className={ this.state.darken ? "Darken" : ""}>
       <Header />
    // </div>
     
     );
  }
}

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
        {/* Login */}
      </div>
      {/* <div className="inputGroup"> */}
        {/* <label>Email:</label> */}
        <Input 
          type="text" 
          placeholder="Email" 
          onChange={this.setEmail}  
          value={this.state.email}>
        </Input>
      {/* </div> */}
      {/* <div className="inputGroup"> */}
        {/* <label>Password:</label> */}
        <Input 
          type="password" 
          placeholder="Password" 
          onChange={this.setPassword} 
          value={this.state.password}>
        </Input>
      {/* </div> */}
      <Button style={ {width:"8em"} } title="Влез"/>
    </div>
    )
    
  }
}

class RegisterBox extends Component{

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
  

    return(
    <div className="innerContainer">
      <div className="boxHeader">
    
      </div>
       <div className="inputGroup">
        {/* <label>Email:</label> */} 
        <Input 
          type="text" 
          placeholder="Email" 
          onChange={this.setEmail} 
          value={this.state.newUser.email}>
        </Input>
        <p className="RegErr">{emailErr ? emailErr : ""}</p>
      </div>

       <div className="inputGroup">
        {/* <label>Password:</label> */}
        <Input 
          type="password" 
          placeholder="Password" 
          onChange={this.setPassword} 
          value={this.state.newUser.password}>
        </Input>
        <p className="RegErr">{passwordErr ? passwordErr : ""}</p>
        {this.state.newUser.password && 
        <div className="pswdBox">
          <div className={"pswd pswdWeak" + (pswdWeek ? " showPswd" : "")}></div>
          {/* v zavisimost ot silata na parolata dobavqme dopylnitelen style class, koito da pokaje skritoto divche */}
          <div className={"pswd pswdMedium" + (pswdMedium ? " showPswd" : "")}></div>
          <div className={"pswd pswdStrong" + (pswdStrong ? " showPswd" : "")}></div>
        </div>
        }
      </div>
      <Button onClick = { this.submitRegister } title="Регистрирай се"/>
    </div>
    )
  }
}

class Header extends Component{
  state={
    isLoginOpen:false,
    isRegisterOpen:false,
    isOpen:false,
    commingFrom:null,
  }


  showRegisterBox = () => {
  
    this.setState({ isLoginOpen:false , isRegisterOpen:true })
  
    if (this.state.commingFrom === 'login' || !this.state.isOpen){
      this.setState({ isOpen:true })
    }else{
      this.setState({ isOpen:false })
    }
    this.setState({ commingFrom : 'register' })
  }
  
  
  showLoginBox = () => {

    this.setState({ isLoginOpen:true, isRegisterOpen:false })
  
    if (this.state.commingFrom === 'register' || !this.state.isOpen){
      this.setState({ isOpen:true })
    }else{
      this.setState({ isOpen:false })
    }
    this.setState({ commingFrom : 'login' })
  }
  
  hideForm = () => {
    this.props.lightBackground()
    this.setState({ isLoginOpen:false , isRegisterOpen:false, isOpen:false })
  
  }

  render(){
   let notSelectedControler = ''
   if (this.state.isOpen){
    notSelectedControler = 'notselected'
   }
    return (
      <>
      {/* <nav className={ "Header" +( this.state.isOpen ? " Darken" : "")}> */}
      <nav className="Header">
      <div className={this.state.isOpen ? "login lighter": "login"} >
      
        <div className="loginNav">
          <div className={"controller " + (this.state.isLoginOpen && this.state.isOpen ? "selected-controller" : notSelectedControler)} onClick={this.showLoginBox}><p>Login</p></div>
          <div className={"controller " + (this.state.isRegisterOpen && this.state.isOpen? "selected-controller" : notSelectedControler)}   onClick={this.showRegisterBox}><p>Register</p></div>
        </div>
        <div className={this.state.isOpen ? "form" : "formHidden"} >
        {this.state.isLoginOpen ? <LoginBox/> : <RegisterBox/> }
        </div>
      
      </div>
          {/* <li><Link to="/">1</Link></li>
          <li><Link to="/">2</Link></li>
          <li><Link to="/">3</Link></li> */}

      </nav>
      </>
    )
  }
}




export default App;
