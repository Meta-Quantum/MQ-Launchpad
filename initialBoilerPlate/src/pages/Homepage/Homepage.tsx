import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import Video from '../../components/Video/Video'
import CryptoCarousel from '../../components/CryptoCarousel/CryptoCarousel'
import CoinTable from '../../components/CoinTable/CoinTable'
import ApplyLaunchpad from '../../components/ApplyLaunchpad/ApplyLaunchpad'




function Homepage() {
  return (
    <div>
<Header/>
     <Video />
     <CryptoCarousel />
     <CoinTable />
     <ApplyLaunchpad />
    </div>
  )
}

export default Homepage