import React from 'react'
import './Card.scss'
import logoWhite from '../../assets/logo_white.png'
import { useNavigate } from 'react-router-dom'
import { access } from 'fs';


function Card(props:any) {
    const navigate = useNavigate();
    const accessProject = () => {
      navigate('/mockUpProject') 
    }
  return (
      <div className='cards__container__element' onClick={accessProject}>

      <div className='cards__container__element__header'>
      <img src={logoWhite} className="cards__container__element__header__img" />
        <h3 className='cards__container__element__header__title'>{props.props.title}</h3>
      </div>
      
      <div className='cards__container__element__content'>
         <p className='cards__container__element__content__pitch'>{props.pitch}</p>
         <p className='cards__container__element__content__coin'>{props.props.coin}</p>
      <p className='cards__container__element__content__fundRaise'>
        <span className='cards__container__element__content__fundRaise__span'>Fundraise Goal:</span>
         {props.props.fundRaise}</p>
      <p className='cards__container__element__content__allocation'>
        <span className='cards__container__element__content__allocation__span'>Max Allocation:</span> 
        {props.props.maxAllocation}</p>
        </div>
      
      <button className='cards__container__element__btn' onClick={accessProject}>Tokken Sale</button>
      
        </div>
  )
    }
    
 



export default Card