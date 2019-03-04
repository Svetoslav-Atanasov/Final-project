import React, { Component } from "react";
// must be ontop
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import MenuToggleButton from "./SideMenu/MenuToggleButton";
import SideMenu from "./SideMenu/SideMenu";
import BackShadow from "./BackShadow/BackShadow";
import Home from "./Home/Home";
import LoginPage from "./LoginPage/LoginPage"
import Lognat from "./Home/Lognat";


class App extends Component {
  state = {
    sideMenuOpen: false
  };
  sideMenuToggleOnClick = prevState => {
    console.log('vika li go be')
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
        <BrowserRouter>
          <>
            <Header />
            <MenuToggleButton onClick={this.sideMenuToggleOnClick} />
            <SideMenu show={this.state.sideMenuOpen} onMouseOver={() => this.sideMenuToggleOnClick()} onMouseLeave={() => this.sideMenuToggleOnClick()} />
            {/* // <SideMenu show={this.state.sideMenuOpen} /> */}
            {backShadow}
            {/* добавих временен примерен параграф */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/lognat" component={Lognat} />
              <Route exact path="/loginPage" component={LoginPage} />

            </Switch>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

class Menu extends Component {}

export default App;
