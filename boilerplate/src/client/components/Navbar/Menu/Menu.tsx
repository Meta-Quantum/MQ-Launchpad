import React from 'react'
import './Menu.scss'
import { useNavigate } from 'react-router'

function Menu() {

    const navigate = useNavigate()

    const redirectPortofolio = () => {
        navigate('/projects')
    }

  return (
    <div className='menu__container'>
       
        {/* our fundamentals */}
        <div className='menu__container__element'>
            <p className='menu__container__element__link'>our fundamentals</p>
        </div>
       {/* portfolio */}
       <div className='menu__container__element'>
            <p className='menu__container__element__link' onClick={redirectPortofolio}>portfolio</p>
        </div>
    {/* blogs */}
    <div className='menu__container__element'>
            <p className='menu__container__element__link'>blogs</p>
        </div> 
      {/* investor relations */}
      <div className='menu__container__element'>
            <p className='menu__container__element__link'>investor relations</p>
        </div>
        {/* careers */}
        <div className='menu__container__element'>
            <p className='menu__container__element__link'>careers</p>
        </div>
         {/* about */}
         <div className='menu__container__element'>
            <p className='menu__container__element__link'>about</p>
        </div>
    </div>
  ) 
}

export default Menu