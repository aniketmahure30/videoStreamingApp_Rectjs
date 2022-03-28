import React, { useState, useContext } from "react";
import Styles from "../authComponent/auth.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { storage } from "./../../apis/firebase"; //?  for storage in firebase
import {
  ref as photoRef,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage"; //? upload file in firebase
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../apis/AuthContext";
const UploadProfilePhoto = () => {
  let USER = useContext(AuthContext);
  let [loading, SetLoading] = useState(false);
  let [photo, setPhoto] = useState("");
  let [progress, setProgress] = useState(0);
  let [barStatus, setBarStatus] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();
    // fire base event
    try {
      SetLoading(true);
      let storageRef = photoRef(storage, `/profile-photo/${photo.name}`);
      let uploadTask = uploadBytesResumable(storageRef, photo);
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          //   progressing upload photo snaps
          let progressBar =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setProgress(progressBar);
          setBarStatus(true);
          SetLoading(true);
        },
        (err) => {},
        async () => {
          //   complettion of task to uplaod photo and get photoURl stored in firebase
          let downloadURl = await getDownloadURL(storageRef);
          updateProfile(USER, {
            photoURL: downloadURl,
          });
          setBarStatus(false);
          SetLoading(false);
          toast.success("successfully photo uploaded");
          window.location.assign("/");
        }
      );
    } catch (err) {
      toast.error(err);
    }
    SetLoading(false);
  };

  let ProgressUI = () => {
    return (
      <div className="progress">
        <div className="bar" style={{ width: `${progress}%` }}>
          <p className="percent">{Math.round(progress)}</p>
        </div>
      </div>
    );
  };

  return (
    <section id={Styles.authSection}>
      <header>
        <span>{barStatus === true ? <ProgressUI /> : ""}</span>
      </header>
      <article className={Styles.authArticle}>
        <h2 style={{ padding: "20px 0" }}>Upload Photo</h2>
        <div className={Styles.formBlock}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="" className={Styles.formLabel}>
                Upload Photo
              </label>
              <input
                type="file"
                className={Styles.formControl}
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>

            <div className="form-group">
              <button className={Styles.btn}>
                {loading ? "Loading..." : "UPLOAD"}
              </button>
            </div>
          </form>
          <div className="form-group">
            <p className={Styles.gotoAuth}>
              Go back to home page
              <Link to="/myprofile" className={Styles.gotoAuthLink}>
                GO BACK
              </Link>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default UploadProfilePhoto;
