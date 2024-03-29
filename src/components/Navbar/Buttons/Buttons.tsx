import React from 'react';
import loginIcon from '../../../assets/login-icon.png'
import walletIcon from '../../../assets/wallet-icon.png'
import './Buttons.scss'
import { useNavigate } from 'react-router'
import {useState, useEffect} from 'react'
import WalletConnect from '../../WalletConnect/WalletConnect';
import Web3 from 'web3'
import { Web3ReactProvider } from '@web3-react/core'
import { useWeb3React } from "@web3-react/core"


function Buttons() {
  const {deactivate} = useWeb3React()
  function getLibrary(provider:any) {
    return new Web3(provider)
  }

 const navigate = useNavigate()
const redirectDashboard= () =>  navigate('/dash')
const [showModal, setShowModal] = useState(false)
const openModal = ()  => setShowModal(true)
const loggedAccount = localStorage.getItem('account');

useEffect(() => {
  if (showModal === true) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
}, [showModal])

async function disconnect() {
  try{
  await deactivate()
   console.log('Disconnected')
   localStorage.clear();
   navigate('/')
   }
  catch(e) {
   console.log(e)
   }
   }


  return (
    
    <div className='buttons__container'>
        <div className='buttons__container__element'>
        { (loggedAccount != null) ?  <input className='buttons__container__element__dashboard' type='button' value='dashboard' onClick={redirectDashboard}/> :
           <input className='buttons__container__element__login' type='button' value='login' />
          }
            
        </div>
        <div className='buttons__container__element'>
          { (loggedAccount != null) ?  <div className='buttons__container__element__connected'>
            <span className='buttons__container__element__connected__address'>{loggedAccount}</span>
           
            <input className='buttons__container__element__wallet' type='button' value='disconnect' onClick={disconnect} ></input>
            </div> : <input className='buttons__container__element__wallet' type='button' value='wallet connect' onClick={openModal} />
          }
           
        </div>
        <Web3ReactProvider getLibrary={getLibrary}>
<WalletConnect showModal={showModal}  setShowModal={setShowModal} />
</Web3ReactProvider>
    </div>
  )
}

export default Buttons