import './WalletConnect.scss'
import logo from '../../assets/logo_white.png'
import qrCode from '../../assets/QR-code.png'


import React from 'react'

function WalletConnect() {
  return (
    <div className='modal__container'>
     <div className='modal__container__header'>
        <img src={logo} alt="meta-logo" className='modal__container__header__img' />
        <input type='button'className='modal__container__header__close' value='X' />
     </div>

      <div className='modal__container__element'>

<div className='modal__container__element__switch'>
      <button className='modal__container__element__switch__qr-btn'>Qr Code</button>
      <button className='modal__container__element__switch__desktop'>Desktop</button>
</div>


       <div className='modal__container__element__qr'>
       <p className='modal__container__element__qr__text'>Scan the QR code within a WalletConnect compatible wallet</p>
       <img src={qrCode} alt='qr-code' className='modal__container__element__qr__img' />
       </div>



      </div>


    </div>
  )
}

export default WalletConnect