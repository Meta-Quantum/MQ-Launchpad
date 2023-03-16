import React from 'react'
import './Video.scss'
import logoIcon from '../../assets/logo-icon-white.png'

function Video() {
  return (
    <div className='video__container'>
        <div className='video__container__element'>
  <p className='video__container__element__text'>shopping the future of <br /> <span className='video__container__element__text__title'>WEB</span><br /> <span className='video__container__element__text__number'>3.0</span> </p>


   <img className='video__container__element__img' src={logoIcon} alt='meta-quantum logo'></img>
   <input className='video__container__element__btn' type='button' value='details'/>
        </div>
        </div>
  )
}

export default Video