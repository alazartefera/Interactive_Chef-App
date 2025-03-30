import React from 'react'
import cheflogo from "../assets/logo.png"
const Header = () => {
  return (
    <div className='header'>
        <img src={cheflogo} alt="AT logo" className='logo' />
       <h1>Chef Snop</h1>
      </div>
  )
}

export default Header