import React from 'react'
import coinRes from '../../api/mockup-carousel';
import './Slider.scss'


interface Coins {
    name: string;
    symbol: string;
    price: number;
    change: number;

}

function Slider() {
  return (
    
    <div className='coins__container'>

      <h4 className='coins__container__title'>Project's Charts:</h4>
      <div className='coins__container__wrap slider'>
        <div className='slide-track'>
        
        {coinRes.map((coin:Coins) => (
         
            <div className='coins__container__element'>
                <div className='coins__container__element__wrap slide'>
                <p className='coins__container__element__wrap__symbol'>{coin.symbol}</p>
                <p className='coins__container__element__wrap__name'>{coin.name}</p>
                </div>
                <p className='coins__container__element__change'>{coin.change} %</p>
            </div>
    
        ))}
        {coinRes.map((coin:Coins) => (
          
            <div className='coins__container__element'>
                <div className='coins__container__element__wrap slide'>
                <p className='coins__container__element__wrap__symbol'>{coin.symbol}</p>
                <p className='coins__container__element__wrap__name'>{coin.name}</p>
                </div>
                <p className='coins__container__element__change'>{coin.change} %</p>
            </div>
    
        ))}
    </div>
</div>

<div className='coins__container__wrap slider_2'>
  <div className='slide-track'> 
        
        {coinRes.map((coin:Coins) => (
         
            <div className='coins__container__element '>
                <div className='coins__container__element__wrap slide'>
                <p className='coins__container__element__wrap__symbol'>{coin.symbol}</p>
                <p className='coins__container__element__wrap__name'>{coin.name}</p>
                </div>
                <p className='coins__container__element__change'>{coin.change} %</p>
            </div>
    
        ))}
        {coinRes.map((coin:Coins) => (
          
            <div className='coins__container__element '>
                <div className='coins__container__element__wrap slide'>
                <p className='coins__container__element__wrap__symbol'>{coin.symbol}</p>
                <p className='coins__container__element__wrap__name'>{coin.name}</p>
                </div>
                <p className='coins__container__element__change'>{coin.change} %</p>
            </div>
    
        ))}
    </div>
</div>

<div className='coins__container__wrap slider'>
        <div className='slide-track'>
        
        {coinRes.map((coin:Coins) => (
         
            <div className='coins__container__element'>
                <div className='coins__container__element__wrap slide'>
                <p className='coins__container__element__wrap__symbol'>{coin.symbol}</p>
                <p className='coins__container__element__wrap__name'>{coin.name}</p>
                </div>
                <p className='coins__container__element__change'>{coin.change} %</p>
            </div>
    
        ))}
        {coinRes.map((coin:Coins) => (
          
            <div className='coins__container__element'>
                <div className='coins__container__element__wrap slide'>
                <p className='coins__container__element__wrap__symbol'>{coin.symbol}</p>
                <p className='coins__container__element__wrap__name'>{coin.name}</p>
                </div>
                <p className='coins__container__element__change'>{coin.change} %</p>
            </div>
    
        ))}
    </div>
</div>

<button className='coins__container__btn'>view all our projects</button>
    </div>
  )
}

export default Slider;