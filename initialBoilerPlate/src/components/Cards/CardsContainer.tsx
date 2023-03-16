import React from 'react'
import './CardsContainer.scss'
import upcomingData from '../../api/mockup-upcoming'
import logoWhite from '../../assets/logo_white.png'
import Card from './Card'

interface props{
  title?: string;
  pitch?: string;
  coin?: string;
  fundRaise?: string;
  maxAllocation?: string;
}

function CardsContainer() {
  return (
    <div className='cards'>
      <h1 className='cards__title'>Upcoming on MetaQuantum:</h1>
 <div className='cards__container'>
  {
    upcomingData.map((item:any) => (
      <Card props={item}/>
    ))
  }
    </div>
    </div>
   
  )
}

export default CardsContainer