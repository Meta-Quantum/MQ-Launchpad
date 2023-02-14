import React from 'react'
import './Navbar.scss'
import Buttons from './Buttons/Buttons'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <div className='navbar__container'>
     <div className='navbar__container__element'>
     <Buttons />

     </div>
     <div className='navbar__container__element'>
     <img className='navbar__container__element__logo' src={logo} alt='meta-quantum-logo'/>
     <div>Menu</div>
        </div>
  
    </div>
  )
}

export default Navbar