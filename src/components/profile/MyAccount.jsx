import React, { useContext } from "react";

import { AuthContext } from "./../../apis/AuthContext";
import Styles from "./myprofile.module.css";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyAccount = () => {
  let USER = useContext(AuthContext);
  let { displayName, email, emailVerified, photoURL } = USER;

  return (
    <section>
      <article>
        <div className={Styles.photoURL}>
          <aside className={Styles.asideIcon}>
            <Link to="/myprofile/upload-photo">
              <figure>
                <img src={photoURL} alt={displayName} />
              </figure>
              <main> 
                <FaCamera />
              </main>
            </Link>
          </aside>

          <footer>
            <h2>{displayName}</h2>
          </footer>
        </div>
        <div className={Styles.userInfo}>
          <p>{email}</p>
        </div>
      </article>
    </section>
  );
};

export default MyAccount;
