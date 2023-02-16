import React from 'react'
// import * as  loginIcon from '../../../assets/login-icon.png'
// import * as walletIcon from '../../../assets/wallet-icon.png'
import './Buttons.scss'

function Buttons() {
  return (
    <div className='buttons__container'>
        <div className='buttons__container__element'>
            <img className='buttons__container__element__icon'   alt='login-icon'/>
            <input className='buttons__container__element__login' type='button' value='login'/>
        </div>
        <div className='buttons__container__element'>
            <img className='buttons__container__element__icon'  alt='wallet-icon'/>
            <input className='buttons__container__element__wallet' type='button' value='wallet connect' />
        </div>


    </div>
  )
}

export default Buttons