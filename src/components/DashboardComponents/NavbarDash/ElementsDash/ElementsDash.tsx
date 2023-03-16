import React from 'react'
import './ElementsDash.scss'

function ElementsDash() {
  return (
    <div className='elementDash__container'>
      <div className='elementDash__container__element'>
<p className='elementDash__container__element__coinIcon'></p>
<p className='elkementDash__container__element__coinNumber'>0</p>
      </div>

      <div className='elementDash__container__element'>
<p className='elementDash__container__element__coinValue'>0.0 ETH</p>
<p className='elementDash__container__element__walletAddress'>0x377...37E5</p>
</div>

<div className='elementDash__container__element'>
<p className='elementDash__container__element__coinName'>
    ETHEREUM
</p>
 
</div>

    </div>
  )
}

export default ElementsDash