import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./navbar.module.css";
import { AuthContext } from "../../apis/AuthContext";
import { FaUser } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../apis/firebase";
import { toast } from "react-toastify";

const Menu = () => {
  let USER = useContext(AuthContext);
  // console.log(USER);
  let [toggle, setToggle] = useState(false);
  let toggleRef = useRef();
  let myRef = useRef();
  

  //!logout functionality
  let LogOut = async ()=>{
    await signOut(auth);
    toast.success("logged out");
    window.location.assign("/login")
  }

  let DropDownMenu = (e) => {
    setToggle(!toggle);

  };

  let handleClickOutside = (e)=>{
    if(!myRef.current.contains(e.target) && toggle){
      console.log(e.target)
      setToggle(!toggle);
    }
  }

  useEffect(()=>{
    document.addEventListener("mousedown", handleClickOutside);
    return ()=> document.removeEventListener("mousedown", handleClickOutside)
  })
  

  let AuthenticatedUser = () => {
    return (
      <>
        <li onClick={DropDownMenu}>
          <NavLink to={{ pathname: "/" }} className={Styles.navbarAnchor}>
            <img
              src={USER.photoURL}
              alt={USER.displayName}
              className={Styles.navbarIcon}
            />

            {/* {USER.displayName}  */}
            <span>{USER.displayName}</span>
          </NavLink>
          <div
            className={toggle ? "dropDown show" : "dropDown hide"}
            ref={toggleRef}
            // style={toggle ? { display: " block" } : { display:"none" }}
          >
            <ul>
              <li>
                
                <NavLink to="/myprofile">
                  <span style={{ marginRight: "5px" }}>
                    <FaUser />
                  </span>
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to={{ pathname: "/" }} onClick={LogOut } className={Styles.navbarAnchor}>
            Logout
          </NavLink>
        </li>
      </>
    );
  };

  let AnonymousUser = () => {
    return (
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
    );
  };

  return ( 
    <div ref={myRef} onClick={handleClickOutside} className={Styles.menu}>
      <ul>
        <li>
          <NavLink
            to={{ pathname: "/" }}
            activeClassName="active"
            className={Styles.navbarAnchor}
          >
            Home
          </NavLink>
        </li>

        {USER ? <AuthenticatedUser /> : <AnonymousUser />}
      </ul>
    </div>
  );
};

export default Menu;
