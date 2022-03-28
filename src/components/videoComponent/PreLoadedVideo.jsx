import React, { useRef, useState } from "react";
import Styles from "./video.module.css"
import VIDEO from "./Avicii - The Nights.mp4";
import { FaPlay , FaPause} from "react-icons/fa";
const PreLoadedVideo = () => {
  let videoRef = useRef();
  let [play, setPlay] = useState(true);

  let VideoControls = () => {
    setPlay(!play);
    if (play) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    } else {
      videoRef.current.play();
      videoRef.current.muted = false;
    }
  };

  return (
    <section id={Styles.videoBlock}>
      <div id={Styles.videoDesc} >
        <h2>Streming latest movies.</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          dolore in pariatur. Magni, dolorum inventore!
        </p>
        <p>
          <main onClick={VideoControls}>
          { play ? (
              <aside className={Styles.videoAside} >
                          <FaPause className={Styles.videoPlay} />
                          <span>Pause</span>
              </aside>
            ) : (
              <aside className={Styles.videoAside}>
                          <FaPlay className={Styles.videoPlay} />
                          <span>Play</span>
              </aside>
            )

          }
          </main>
        </p>
      </div>
      <video
        src={VIDEO}
        ref={videoRef}
        autoPlay
        muted
        className={Styles.videoBlockPlayer}
      ></video>
    </section>
  );
};

export default PreLoadedVideo;
