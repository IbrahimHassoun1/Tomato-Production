import React from 'react'
React
import './NavBar.css'
import {assets} from '../../assets/admin_assets/assets.js'
const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt=""  className='logo'/>
      <img src={assets.profile_image} alt=""  className='profile'/>
    </div>
  )
}

export default NavBar
