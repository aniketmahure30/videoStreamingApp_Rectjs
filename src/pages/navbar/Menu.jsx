import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./navbar.module.css";
import { AuthContext } from "../../apis/AuthContext";

const Menu = () => {
  let USER = useContext(AuthContext);
  console.log(USER);

  let AuthenticatedUser = () => {
    return (
      <>
        <li>
          <NavLink to={{ pathname: "/" }} className={Styles.navbarAnchor}>
            {USER.displayName}
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: "/" }} className={Styles.navbarAnchor}>
            Logout
          </NavLink>
        </li>
      </>
    );
  };

  let AnonymousUser = () => {
    return(
      <>
      <li>
        <NavLink
          to={{ pathname: "/login" }}
          activeClassName="active"
          className={Styles.navbarAnchor}
        >
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{ pathname: "/signup" }}
          activeClassName="active"
          className={Styles.navbarAnchor}
        >
          Sign Up
        </NavLink>
      </li>
      </>
    )
  };

  return (
    <ul className={Styles.navbarUl}>
      <li>
        <NavLink
          to={{ pathname: "/" }}
          activeClassName="active"
          className={Styles.navbarAnchor}
        >
          Home
        </NavLink>
      </li>

      { USER ? <AuthenticatedUser/> :  <AnonymousUser/>}
      
    </ul>
  );
};

export default Menu;
