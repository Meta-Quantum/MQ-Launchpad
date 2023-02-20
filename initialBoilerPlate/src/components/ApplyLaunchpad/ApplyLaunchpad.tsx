import React from 'react'
import rocket from '../../assets/rocket.png'
import './ApplyLaunchpad.scss'

function ApplyLaunchpad() {
  return (
    <div className='apply__container'>
        <div className='apply__container__wrap'>
        <div className='apply__container__wrap__element__text'>
    <p className='apply__container__wrap__element__text__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Est lorem ipsum dolor sit amet. Sed adipiscing 
        diam donec adipiscing tristique. Dolor purus non enim praesent 
        elementum facilisis leo vel fringilla. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Et egestas quis ipsum suspendisse 
        ultrices.</p>
</div>


<div className='apply__container__wrap__element__image'>
    <img className='apply__container__wrap__element__image__img' src={rocket} alt='rocket' />
</div>

        </div>


<input className='apply__container__btn' type='button' value='apply to launchpad' />
    </div>
  )
}

export default ApplyLaunchpad