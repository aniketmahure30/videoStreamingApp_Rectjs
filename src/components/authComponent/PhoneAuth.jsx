import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Styles from "./auth.module.css";
import { toast } from "react-toastify";
import { auth } from "../../apis/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const PhoneAuth = () => {
  let [phone, setPhone] = useState("+91");
  let [loading, setLoading] = useState(false);
  let redirect = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let recaptchaVerifier = new RecaptchaVerifier(
        "captcha-container",
        {
          size: "invisible",
          callback: (response) => {
            //   reCAPTCHA solved, allow signInWithPhoneNumber
          },
        },
        auth
      );
      //   send OTP
      let sendOTP = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
      let confirmationMessage = window.prompt("please enter OTP");
      await sendOTP.confirm(confirmationMessage);
      toast.success("successfully logged in");

      redirect("/");
    } catch (err) {
      console.log(err);
      toast.error(err.message.slice(9));
    }
    setLoading(false)
  };

  return (
    <section id={Styles.authSection}>
      <article className={Styles.authArticle}>
        <h2 style={{ padding: "20px 0" }}>Sign in with Phone Number</h2>
        <div className={Styles.formBlock}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                Phone Number
              </label>
              <input
                type="text"
                className={Styles.formControl}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className={Styles.btn}>
                {loading ? "Loading..." : "send OTP"}
              </button>
            </div>
          </form>
          <div id="captcha-container"> </div>
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

export default PhoneAuth;
