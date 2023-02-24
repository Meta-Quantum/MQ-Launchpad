import React from 'react';
import './CoinText.scss';

function CoinText() {
  return (
    <div className='coinText__container'>
    <div className='coinText__container__element'>
<p className='coinText__container__element__title'>Total QTH Power</p>
<p className='coinText__container__element__number'>0.0</p>
    </div>

    <div className='coinText__container__element'>
    <p className='coinText__container__element__title'>QTH Staked on Ethereum</p>
    <p className='coinText__container__element__number'>0.0</p>
    </div>

    <div className='coinText__container__buttons'>
    <input type="button" value="Unstake QTH" className='coinText__container__buttons__btn'/>
    <a href='#' className='coinText__container__buttons__link'>Learn more</a>
    </div>
    </div>
  )
}

export default CoinText