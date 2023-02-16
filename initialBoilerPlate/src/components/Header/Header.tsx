import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Cards from '../Cards/Cards.jsx'
import Sponsors from '../Sponsors/Sponsors.jsx'
import './Header.scss'

function Header() {
  return (
    <div className='header__container'>
     <Navbar />
     <div className='header__container__element' >
      <p className='header__container__element__title'>multichain launchpad
      incubator for<br/>
      web3 & metaverse</p>
     </div>
     <div className='header__container__element'>
     <p className='header__container__element__sub-title'>“ the best way to predict the future is to create it ”</p>
     </div>
      <Sponsors />
     <Cards /> 
    </div>
  )
}

export default Header