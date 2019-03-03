import React, { Component } from "react";
// must be ontop
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import { Link } from "react-router-dom";
import Header from "./Header/Header";
import MenuToggleButton from "./SideMenu/MenuToggleButton";
import SideMenu from "./SideMenu/SideMenu";
import BackShadow from "./BackShadow/BackShadow";
import Home from "./Home/Home";
import Culture from "./SideMenuDetails/Culture/Culture";
import Eating from "./SideMenuDetails/Eating/Eating";
import Vacations from "./SideMenuDetails/Vacations/Vacations";

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
      <BrowserRouter>
        <div>
          <Header />
          <MenuToggleButton onClick={this.sideMenuToggleOnClick} />
          <SideMenu show={this.state.sideMenuOpen} />
          {backShadow}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/culture" component={Culture} />
            <Route exact path="/eating" component={Eating} />
            <Route exact path="/vacations" component={Vacations} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

class Menu extends Component {}

export default App;
