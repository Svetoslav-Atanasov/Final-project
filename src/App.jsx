import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import MenuToggleButton from "./SideMenu/MenuToggleButton";
import SideMenu from "./SideMenu/SideMenu";
import BackShadow from "./BackShadow/BackShadow";
import Home from "./Home/Home";

class App extends Component {
  state = {
    sideMenuOpen: false
  };
  sideMenuToggleOnClick = prevState => {
    const sideMenuOpen = !prevState.sideMenuOpen;
    this.setState({ sideMenuOpen });
  };

  sideMenuBack = () => {
    this.setState({ sideMenuOpen: false });
  };

  render() {
    let backShadow = null;
    if (this.state.sideMenuOpen) {
      backShadow = <BackShadow onClick={this.sideMenuBack} />;
    }
    return (
      <div>
        <Header />
        <MenuToggleButton onClick={this.sideMenuToggleOnClick} />
        {/* dobavqme si sv-vo show - true/false na baza nego shte dvijim meniuto s css */}
        <SideMenu show={this.state.sideMenuOpen} />
        {backShadow}
        {/* добавих временен примерен параграф */}
        <Home />
      </div>
    );
  }
}

class Menu extends Component {}

export default App;
