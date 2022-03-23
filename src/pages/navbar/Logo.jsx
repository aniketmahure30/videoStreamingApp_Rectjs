import React from 'react'
//  import {FaPhotoVideo} from "react-icons/fa"
 import Styles from "./navbar.module.css"
 import{MdCameraRoll} from "react-icons/md"
 
const Logo = () => {
  return (
    <div className='logoBlock' >
        <a href="#" className={Styles.logoBlockAnchor}>
        <span >
          <img src="" alt="" />
            <MdCameraRoll className={Styles.logoBlockSpanIcon}/>
        </span>
        <span>Stream Gaze</span>
        </a>
    </div>
  )
}

export default Logo