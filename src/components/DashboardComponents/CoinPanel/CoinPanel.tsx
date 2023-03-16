import React from 'react'
import './CoinPanel.scss'

function CoinPanel() {
  return (
    <div className='coinPanel__container'>
        <div className='coinPanel__container__header'>
            <div className='coinPanel__container__header__titleContainer1'><div className='coinPanel__container__header__titleContainer1__title1'>Deposit & Lock</div></div>
        <div className='coinPanel__container__header__titleContainer2'><div className='coinPanel__container__header__titleContainer2__title2'>Withdraw</div></div>
        </div>

<div className='coinPanel__container__card'>
        <div className='coinPanel__container__card__wrap'>
        <p className='coinPanel__container__card__wrap__text'>Stake QTH to participate in allowlists for upcoming sale project.<br />
        <a href='#' className='coinPanel__container__card__wrap__text__link'> Learn More</a></p>
        </div> 
        
        <div className='coinPanel__container__card__element'>
            <div className='coinPanel__container__card__element__wrap'>
                <div className='coinPanel__container__card__element__wrap__left'>
                <div className='coinPanel__container__card__element__wrap__left__coin'>
                <p className='coinPanel__container__card__element__wrap__left__coin__icon'></p>
                <p className='coinPanel__container__card__element__wrap__left__coin__number'>0.0</p>
                </div>
                <p className='coinPanel__container__card__element__wrap__left__text'>QTH</p>
                </div>
                <div className='coinPanel__container__card__element__wrap__right'>
                <p className='coinPanel__container__card_element__wrap__right__text'>MAX</p>
                <p className='coinPanel__container__card__element__wrap__right__text'>= $0</p>
                </div>
                </div>
            </div>
           
            <input type="button" value="Unstake QTH" className='coinPanel__container__card__button'/>
               
        </div>
    </div>
  )
}

export default CoinPanel