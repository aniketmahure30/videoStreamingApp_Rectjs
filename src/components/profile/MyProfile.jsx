import React from 'react'
import MainProfile from './MainProfile'
import Styles from "./myprofile.module.css"
import SidebarMenu from './SidebarMenu'
const MyProfile = () => {
  return (
    <section >
        <article className={Styles.profileBlock}>
            <div className={Styles.sidebarBlock} >
                <SidebarMenu/>
            </div>
            <div className={Styles.mainProfile}>
                <MainProfile/>
            </div>
        </article>
    </section>
  )
}

export default MyProfile