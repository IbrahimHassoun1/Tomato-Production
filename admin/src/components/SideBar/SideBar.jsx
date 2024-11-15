import React from 'react'
React
import './SideBar.css'
import { assets } from '../../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List items</p>
        </NavLink>
        <NavLink to='orders' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Order</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar
