import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideMenu.module.css";
import theatre from "../assets/images/theatre.png";
import pochivki from "../assets/images/pochivki.png";
import meal from "../assets/images/meal.png";
import all from '../assets/images/all.png'
import LiNavLink from '../UI/Li-NavLink/LiNavLink'

const sideMenu = props => {
  let classes = [styles.sideMenu];
  if (props.show) {
    classes.push(styles.open);
  }
  return (
    <aside>
<nav className={classes.join(" ")} onClick={props.onClick} >
      <ul>
        {/* <li>
          <NavLink to="/category/culture"> Culture </NavLink>
          <span>
            <img width="30" height="30" src={theatre} />
          </span>
        </li>
        <li>
          <NavLink to="/category/eating out"> Eating Out </NavLink>
          <span>
            <img width="30" height="30" src={meal} />
          </span>
        </li>
        <li>
          <NavLink to="/category/vacations"> Vacations </NavLink>
          <span>
            <img width="30" height="30" src={pochivki} />
          </span>
        </li> */}
        <LiNavLink to="/" title="ALL" src={all}/>
        <LiNavLink to="/category/culture" title="Culture" src={theatre}/>
        <LiNavLink to="/category/eating out" title="Eating Out" src={meal}/>
        <LiNavLink to="/category/vacations" title="Vacations" src={pochivki}/>

      
      
      </ul>
    </nav>
    </aside>
    
  );
};

export default sideMenu;
