import React from 'react';
import loginIcon from '../../../assets/login-icon.png'
import walletIcon from '../../../assets/wallet-icon.png'
import './Buttons.scss'
import { useNavigate } from 'react-router'
import {useState, useEffect} from 'react'
import WalletConnect from '../../WalletConnect/WalletConnect';

function Buttons() {

 const navigate = useNavigate()
const redirectDashboard= () =>  navigate('/dash')
const [showModal, setShowModal] = useState(false)
const openModal = ()  => setShowModal(true)

useEffect(() => {
  if (showModal === true) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
}, [showModal])


  return (
    <div className='buttons__container'>
        <div className='buttons__container__element'>
            <input className='buttons__container__element__login' type='button' value='login' onClick={redirectDashboard}/>
        </div>
        <div className='buttons__container__element'>
            <input className='buttons__container__element__wallet' type='button' value='wallet connect' onClick={openModal} />
        </div>
<WalletConnect showModal={showModal}  setShowModal={setShowModal} />

    </div>
  )
}

export default Buttons