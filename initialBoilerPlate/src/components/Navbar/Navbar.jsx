import React from 'react'
import './Navbar.scss'
import Buttons from './Buttons/Buttons.tsx'
import Menu from './Menu/Menu.tsx'
import logoWhite from '../../assets/logo_white.png'

function Navbar() {
  return (
    <div className='navbar__container'>
     <div className='navbar__container__element'>
     <Buttons />

     </div>
     <div className='navbar__container__element'>
     <img className='navbar__container__element__logo' src={logoWhite} alt='meta-quantum-logo'/>
   <Menu />
        </div>
  
    </div>
  )
}

export default Navbar