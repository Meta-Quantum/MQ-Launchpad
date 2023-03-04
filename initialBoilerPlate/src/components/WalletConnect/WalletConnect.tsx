import './WalletConnect.scss'
import logo from '../../assets/logo_white.png'
import qrCode from '../../assets/QR-code.png'
import metamask from '../../assets/wallets/metamask.png'
import trustWallet from '../../assets/wallets/trustWallet.png'
import coinbase from '../../assets/wallets/coinbase.png'
import walletConnect from '../../assets/wallets/walletConnect.png'


import React, {useRef} from 'react'

function WalletConnect() {

  // const switchDesktop = (event:any) => event.target.classList.add('active')

const desktopRef:any = useRef();
const qrRef:any = useRef();
const desktopContainerRef:any = useRef();
const qrContainerRef:any = useRef();

const switchDesktop = () => {
desktopRef.current.classList.add('active')
qrRef.current.classList.remove('active')
desktopContainerRef.current.classList.remove('hide')
qrContainerRef.current.classList.add('hide')
}

const switchQr = () => {
qrRef.current.classList.add('active')
desktopRef.current.classList.remove('active')
qrContainerRef.current.classList.remove('hide')
desktopContainerRef.current.classList.add('hide')
}


  return (
    <div className='modal__container'>
     <div className='modal__container__header'>
        <img src={logo} alt="meta-logo" className='modal__container__header__img' />
        <input type='button'className='modal__container__header__close' value='X' />
     </div>

      <div className='modal__container__element'>

<div className='modal__container__element__switch'>
      <button className='modal__container__element__switch__qr-btn active' ref={qrRef} onClick={switchQr}>Qr Code</button>
      <button className='modal__container__element__switch__desktop' ref={desktopRef} onClick={switchDesktop} >Desktop</button>
</div>


       <div className='modal__container__element__qr hide' ref={qrContainerRef}>
       <p className='modal__container__element__qr__text'>Scan the QR code within a WalletConnect compatible wallet</p>
       <img src={qrCode} alt='qr-code' className='modal__container__element__qr__img' />
       </div>

<div ref={desktopContainerRef} className='modal__container__element__desktop '>
<p className='modal__container__element__desktop__text'>
Choose your preferred wallet:
</p>
<input type='text' className='modal__container__element__desktop__input' placeholder='search' />
<div className='modal__container__element__desktop__wallets'>
<img src={metamask} alt='metamask' className='modal__container__element__desktop__wallets__img' />
<img src={trustWallet} alt='trustWallet' className='modal__container__element__desktop__wallets__img' />
<img src={coinbase} alt='coinbase' className='modal__container__element__desktop__wallets__img' />
<img src={walletConnect} alt='walletConnect' className='modal__container__element__desktop__wallets__img' />
</div>
</div>


      </div>


    </div>
  )
}

export default WalletConnect