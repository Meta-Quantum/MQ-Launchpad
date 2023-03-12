import React from 'react'
import './Cards.scss'
import upcomingData from '../../api/mockup-upcoming'
import logoWhite from '../../assets/logo_white.png'


function Cards() {
  return (
    <div className='cards'>
      <h1 className='cards__title'>Upcoming on MetaQuantum:</h1>
 <div className='cards__container'>
  {upcomingData.map((data) => (
  <div className='cards__container__element'>

<div className='cards__container__element__header'>
<img src={logoWhite} className="cards__container__element__header__img" />
  <h3 className='cards__container__element__header__title'>{data.title}</h3>
</div>


<div className='cards__container__element__content'>
   <p className='cards__container__element__content__pitch'>{data.pitch}</p>
   <p className='cards__container__element__content__coin'>{data.coin}</p>
<p className='cards__container__element__content__fundRaise'>
  <span className='cards__container__element__content__fundRaise__span'>Fundraise Goal:</span>
   {data.fundRaise}</p>
<p className='cards__container__element__content__allocation'>
  <span className='cards__container__element__content__allocation__span'>Max Allocation:</span> 
  {data.maxAllocation}</p>
  </div>

<button className='cards__container__element__btn'>Tokken Sale</button>

  </div>
  ))}
    </div>
    </div>
   
  )
}

export default Cards