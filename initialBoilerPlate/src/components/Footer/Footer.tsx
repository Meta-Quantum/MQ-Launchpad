import React from 'react'
import './Footer.scss';
import logoWhite from '../../assets/logo_white.png';

function Footer() {
  return (
    <div className='footer__container'>
<div className='footer__container__element'>
<img src={logoWhite} alt='logo' className='footer__container__element__logo'/>
<div className='footer__container__element__wrap'> 
<div className='footer__container__element__wrap__grid'>
  <p className='footer__container__element__wrap__grid__title'>product</p>

  <a className='footer__container__element__wrap__grid__link' href='#'>Launchpad</a>
  <a className='footer__container__element__wrap__grid__link' href='#'>Stake</a>
  <a className='footer__container__element__wrap__grid__link' href='#'>Comunity Voted</a>
  <a className='footer__container__element__wrap__grid__link' href="#">Forms & Vesting</a>
  <a className='footer__container__element__wrap__grid__link' href="#">Gouvernance</a>
</div>

<div className='footer__container__element__wrap__grid'>
  <p className='footer__container__element__wrap__grid__title' >company</p>

  <a className='footer__container__element__wrap__grid__link' href='#'>Brand Assets</a>
 
</div>

<div className='footer__container__element__wrap__grid'>
  <p className='footer__container__element__wrap__grid__title'>resources</p>

  <a className='footer__container__element__wrap__grid__link' href='#'>Blog</a>
  <a className='footer__container__element__wrap__grid__link' href='#'>FAQ</a>
  <a className='footer__container__element__wrap__grid__link' href='#'>Sitemap</a>
 
</div>

<div className='footer__container__element__wrap__grid'>
  <p className='footer__container__element__wrap__grid__title'>social</p>

  <a className='footer__container__element__wrap__grid__link' href='#'>Twitter</a>
  <a className='footer__container__element__wrap__grid__link' href='#'>Telegram</a>
  <a className='footer__container__element__wrap__grid__link' href='#'>Instagram</a>
  <a className='footer__container__element__wrap__grid__link' href='#'>TikTok</a>
  <a className='footer__container__element__wrap__grid__link' href='#'>Youtube</a>
  <a className='footer__container__element__wrap__grid__link' href='#'>Discord</a>
 
</div>

<div className='footer__container__element__wrap__grid'>
  <p className='footer__container__element__wrap__grid__title'>legal</p>

  <a className='footer__container__element__wrap__grid__link' href='#'>Terms</a>
  <a className='footer__container__element__wrap__grid__link' href='#'>Privacy</a>
  <a className='footer__container__element__wrap__grid__link' href='#'>Cookies</a>

 
</div>


</div>
</div>

<div className='footer__container__element'>
<p className='footer__container__element__text'>
This web page and any other contents published on this website shall not 
consitute investment advice, financial advice, trading advice or any other
 kind of advice, and you should not treat any of the website’s content as such. 
 You alone assume the sole resposability of evaluating the merits and risks associated 
 wwith using any information or other content on this website before making any decisions 
 base on such information. You understand that the crypto market is characterised by high volatility, 
 and you should be aware of the concrete posibility of loosing the entirety of the funds alocated in the 
 crypto market. You should refrain from using frunds you can’t afford to lise purchasing cryptocurrencies 
 and other digital tokens.
</p>
</div>

    </div>
  )
}

export default Footer