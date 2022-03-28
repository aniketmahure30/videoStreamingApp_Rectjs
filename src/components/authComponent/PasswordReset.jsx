import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Styles from "./auth.module.css";
import { toast } from "react-toastify";
import { auth } from "../../apis/firebase";
import { sendPasswordResetEmail } from "firebase/auth";


const PasswordReset = () => {
  let [email, setEmail] = useState("");
  let [loading, setLoading] = useState(false);
  let redirect = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await sendPasswordResetEmail(auth,email);
      toast.info(` password reset email has been send on ${email} address`)
      redirect('/');

    } catch (err) {
      console.log(err);
      toast.error(err.message.slice(9));
    }
    setLoading(false)
  };

  return (
    <section id={Styles.authSection}>
      <article className={Styles.authArticle}>
        <h2 style={{ padding: "20px 0" }}>Reset password</h2>
        <div className={Styles.formBlock}>
          <form onSubmit={handleSubmit}>
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
              <button className={Styles.btn}>
                {loading ? "Loading..." : "Sign In"}
              </button>
            </div>
          </form>
          <div className="form-group">
            <p className={Styles.gotoAuth}>
              go back to stream Gaze{" "}
              <Link to="/login" className={Styles.gotoAuthLink}>
                Signin
              </Link>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PasswordReset;
