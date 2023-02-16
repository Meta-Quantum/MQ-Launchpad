import React from 'react'
import coindesk_logo from '../../assets/coindesk_logo.png'
import forbes_logo from './../../assets/forbes_logo.svg'
import  business_insider_logo from './../../assets/business_insider_logo.png'
import yahoo_finance_logo from './../../assets/yahoo_finance_logo.png'
import './Sponsors.scss';

function Sponsors() {
  return (
    <div className='sponsors__container'>
    <div className='sponsors__container__element'>
<img className='sponsors__container__element__logo' src={coindesk_logo} alt='coindesk logo' />
    </div>

    <div className='sponsors__container__element'>
<img className='sponsors__container__element__logo' src={forbes_logo} alt='forbes logo' />
    </div>

    <div className='sponsors__container__element'>
<img className='sponsors__container__element__insider' src={business_insider_logo} alt='business_insider_logo' />
    </div>

    <div className='sponsors__container__element'>
<img className='sponsors__container__element__yahoo' src={yahoo_finance_logo} alt='yahoo_finance_logo' />
    </div>

    </div>
  )
}

export default Sponsors