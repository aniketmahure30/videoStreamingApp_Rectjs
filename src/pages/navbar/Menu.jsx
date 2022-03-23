import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./navbar.module.css";

const Menu = () => {
  return (
    
      <ul className={Styles.navbarUl}>
        <li>
          <NavLink to={{pathname:"/"}} activeClassName="active" className={Styles.navbarAnchor} >Home</NavLink>
        </li>
        <li>
          <NavLink to={{pathname:"/login"}} activeClassName="active" className={Styles.navbarAnchor} >Sign In</NavLink>
        </li>
        <li>
          <NavLink to={{pathname:"/signup"}} activeClassName="active" className={Styles.navbarAnchor} >Sign Up</NavLink>
        </li>
      </ul>
  );
};

export default Menu;