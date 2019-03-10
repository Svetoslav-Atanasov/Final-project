import React, { Component } from "react";
// must be ontop
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";

// import { Link } from "react-router-dom";
import Header from "../Header/Header";
import MenuToggleButton from "../SideMenu/MenuToggleButton";
import SideMenu from "../SideMenu/SideMenu";
import BackShadow from "../BackShadow/BackShadow";
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import Culture from "../SideMenuDetails/Culture/Culture";
import Eating from "../SideMenuDetails/Eating/Eating";
import Vacations from "../SideMenuDetails/Vacations/Vacations";
import MyVouchers from "../MyVouchers/MyVouchers";
import Profile from "../Profile/profile";
import Footer from "../Footer/Footer";
import OfferDetails from "../OfferDetails/OfferDetails";
import ShoppingCart from '../ShoppingCartPage/ShoppingCartPage';
import Serched from "../Serched/Serched"
import Statistic from "../Admin/Statistic"
import AddOffer from "../Admin/addOffer"


// import { NavLink} from "react-router-dom";

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
          {/* <MenuToggleButton onClick={this.sideMenuToggleOnClick} /> */}
          {/* <SideMenu show={this.state.sideMenuOpen} onMouseOver={() => this.sideMenuToggleOnClick()} onMouseLeave={() => this.sideMenuToggleOnClick()} /> */}
          <div className="wrapper">
            <SideMenu
              show={this.state.sideMenuOpen}
              onClick={this.sideMenuToggleOnClick}
            />
            {backShadow}

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/loginPage" component={LoginPage} />
              <Route exact path="/category/culture" component={Culture} />
              <Route exact path="/category/eating-оut" component={Eating} />
              <Route exact path="/category/vacations" component={Vacations} />
              <Route exact path="/addOffer" component={AddOffer} />
              {/* <Route exact path="/category/:categoryType" component={Home} /> */}
              {this.props.currentUser ? 
                <>
                  <Route exact path="/myProfile" component={Profile} />
                  <Route exact path="/myVouchers" component={MyVouchers} />
                  <Route exact path="/myShoppingCart" component={ShoppingCart} />
                  <Route exact path="/statistic" component={Statistic} />
                  {/* <Route exact path="/addOffer" component={AddOffer} /> */}
                </>
                :null}
              }
              {/* here */}
              <Route exact path="/offerDetails/:id" component={OfferDetails} />
              <Route path="/Search/:param" component={Serched} />

              {/* Page Not Found */}
              <Route
                render={() => <p className="pageNotFound"> Page Not Found</p>}
              />
            </Switch>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

export default connect(mapStateToProps,null)(App);
