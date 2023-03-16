import React from 'react'
import Navbar from '../../Navbar/Navbar'
import CoinPanel from '../CoinPanel/CoinPanel'
import './HeaderDash.scss'
import CoinText from '../CoinText/CoinText'

function HeaderDash() {
  return (
    <div className='headerDash__container'>
<Navbar/>
<div className='headerDash__container__element'>
<p className='headerDash__container__element__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Est lorem ipsum dolor sit amet. 
    Sed adipiscing diam donec adipiscing tristique.</p>
    <a href='#' target='_blank' className='headerDash__container__element__link'>Learn More</a>
</div>
<div className='headerDash__container__element'>
<CoinText />
<CoinPanel />
</div>


    </div>
  )
}

export default HeaderDash