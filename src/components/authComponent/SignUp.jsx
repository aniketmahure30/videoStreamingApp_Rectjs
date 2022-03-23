import React, { useState } from "react";
import Styles from "./auth.module.css";
import { toast } from "react-toastify";
import { auth } from "../../apis/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmpassword, setConfrimPassword] = useState("");
  let [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (password !== confirmpassword) {
        toast.error("Password not matched");
      } else {
        console.log({ username, email, password });
        let userData = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        toast.success("succesfully Registered");
        console.log(userData);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message.slice(9));
    }
    setLoading(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setConfrimPassword("");
  };

  return (
    <section id={Styles.authSection}>
      <article className={Styles.authArticle}>
        <h2 style={{ padding: "20px 0" }}>Sign Up</h2>
        <div className={Styles.formBlock}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                username
              </label>
              <input
                type="text"
                className={Styles.formControl}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
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
                type="password"
                className={Styles.formControl}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                confirm password
              </label>
              <input
                type="password"
                className={Styles.formControl}
                value={confirmpassword}
                onChange={(e) => setConfrimPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button className={Styles.btn}>
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default SignUp;
