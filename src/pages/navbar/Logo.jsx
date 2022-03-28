import React from 'react'
import { Link } from 'react-router-dom'
 import Styles from "./navbar.module.css"
 import{MdCameraRoll} from "react-icons/md"

 
const Logo = () => {
  return (
    <div className='logoBlock' >
        <Link to="/" className={Styles.logoBlockAnchor}>
        <span >
          <img src="" alt="" />
            <MdCameraRoll className={Styles.logoBlockSpanIcon}/>
        </span>
        <span>Stream Gaze</span>
        </Link>
    </div>
  )
}

export default Logo