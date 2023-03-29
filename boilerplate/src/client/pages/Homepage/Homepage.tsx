import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import Video from '../../components/Video/Video'
import Slider from '../../components/Slider/Slider'
import CoinTable from '../../components/CoinTable/CoinTable'
import ApplyLaunchpad from '../../components/ApplyLaunchpad/ApplyLaunchpad'




function Homepage() {
  return (
    <div>
<Header/>
<Slider />
     <Video />
     <CoinTable />
     <ApplyLaunchpad />
    </div>
  )
}

export default Homepage