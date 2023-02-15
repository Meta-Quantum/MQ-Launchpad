import React from 'react'
import './Menu.scss'

function Menu() {
  return (
    <div className='menu__container'>
        {/* about */}
        <div className='menu__container__element'>
            <p className='menu__container__element__link'>about</p>
        </div>
        {/* our fundamentals */}
        <div className='menu__container__element'>
            <p className='menu__container__element__link'>our fundamentals</p>
        </div>
       {/* portfolio */}
       <div className='menu__container__element'>
            <p className='menu__container__element__link'>portfolio</p>
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
    </div>
  ) 
}

export default Menu