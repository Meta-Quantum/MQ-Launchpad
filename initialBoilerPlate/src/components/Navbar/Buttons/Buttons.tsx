import React from 'react'
import loginIcon from '../../../assets/login-icon.png'
import walletIcon from '../../../assets/wallet-icon.png'
import './Buttons.scss'
import { useNavigate } from 'react-router'

function Buttons() {

 const navigate = useNavigate()
const redirectDashboard= () =>  navigate('/dash')


  return (
    <div className='buttons__container'>
        <div className='buttons__container__element'>
            <img className='buttons__container__element__icon' src={loginIcon}  alt='login-icon'/>
            <input className='buttons__container__element__login' type='button' value='login' onClick={redirectDashboard}/>
        </div>
        <div className='buttons__container__element'>
            <img className='buttons__container__element__icon' src={walletIcon} alt='wallet-icon'/>
            <input className='buttons__container__element__wallet' type='button' value='wallet connect' />
        </div>


    </div>
  )
}

export default Buttons