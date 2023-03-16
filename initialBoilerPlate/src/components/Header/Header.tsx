import React from 'react'
import Navbar from '../Navbar/Navbar'
import CardsContainer from '../Cards/CardsContainer'
import Sponsors from '../Sponsors/Sponsors'
import './Header.scss'

function Header() {
  return (
    <div className='header__container'>
     <Navbar />
     <div className='header__container__element_1' >
      <p className='header__container__element__title'>multichain launchpad
      incubator for<br/>
      web3 & metaverse</p>
     </div>
     <div className='header__container__element_2'>
     <p className='header__container__element__sub-title'>“ the best way to predict the future is to create it ”</p>
     </div>
     <Sponsors />
     <CardsContainer />
    </div>
  )
}

export default Header