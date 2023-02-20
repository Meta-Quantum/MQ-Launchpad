import React from 'react'
import coinRes from '../../api/mockup-carousel';
import './CryptoCarousel.scss'


interface Coins {
    name: string;
    symbol: string;
    price: number;
    change: number;

}

function CryptoCarousel() {
  return (
    <div className='coins__container'>
        
        {coinRes.map((coin:Coins) => (
            <div className='coins__container__element'>
                <div className='coins__container__element__wrap'>
                <p className='coins__container__element__wrap__symbol'>{coin.symbol}</p>
                <p className='coins__container__element__wrap__name'>{coin.name}</p>
                </div>
                <p className='coins__container__element__change'>{coin.change} %</p>
            </div>
        ))}
    

    </div>
  )
}

export default CryptoCarousel