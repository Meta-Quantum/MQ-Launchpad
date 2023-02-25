import React from 'react'
import logoWhite from '../../../assets/logo_white.png'
import ElementsDash from './ElementsDash/ElementsDash'
import './NavbarDash.scss'

function NavbarDash() {
  return (
    <div className='navbarDash__container'>
    <div className='navbarDash__container__element'>
     <img className='navbarDash__container__element__logo' src={logoWhite} alt='meta-quantum-logo'/>
     <ElementsDash />
        </div>
<div className='navbarDash__container__element'>

</div>
    </div>
  )
}

export default NavbarDash