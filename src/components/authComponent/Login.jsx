import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Styles from "./auth.module.css";
import { toast } from "react-toastify";
import { auth } from "../../apis/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let [toggle, setToggle] = useState(false);
  let [PasswordShow, setPasswordShow] = useState(false);
  let redirect = useNavigate();

  let ChangeIcon = () => {
    setToggle(!toggle);
    setPasswordShow(!PasswordShow);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let userData = await signInWithEmailAndPassword(auth, email, password);

      if (userData.user.emailVerified === true) {
        toast.success("Login Successfully");
        redirect("/");
      } else {
        redirect("/login");
        toast.error("user not verified");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message.slice(9));
    }
    setLoading(false);
    setEmail("");
    setPassword("");
  };

  return (
    <section id={Styles.authSection}>
      <article className={Styles.authArticle}>
        <h2 style={{ padding: "20px 0" }}>Sign In</h2>
        <div className={Styles.formBlock}>
          <form onSubmit={handleSubmit}>
          <div className="form-group" style={{display:"block", }}>
              <Link to="/phone-auth" className={Styles.gotoAuthLink}>
                Login with Number
              </Link>
          </div>

            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                email
              </label>
              <input
                type="email"
                className={Styles.formControl}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                password
              </label>
              <input
                type={PasswordShow === true ? "text" : "password"}
                className={Styles.formControl}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={Styles.eyeIcon} onClick={ChangeIcon}>
                {toggle !== true ? (
                  <FaEyeSlash className={Styles.eyeIconSVG} />
                ) : (
                  <FaEye className={Styles.eyeIconSVG} />
                )}
              </span>
            </div>
            <div className="form-group">
              <button className={Styles.btn}>
                {loading ? "Loading..." : "Sign In"}
              </button>
            </div>
          </form>
          <div className="form-group">
            <p className={Styles.gotoAuth}>
              I am new User{" "}
              <Link to="/signup" className={Styles.gotoAuthLink}>
                Signup
              </Link>
            </p>
          </div>
          <div className="form-group" style={{display:"block", }}>
              <Link to="/password-reset" className={Styles.gotoAuthLink}>
                Forgot password
              </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Login;
