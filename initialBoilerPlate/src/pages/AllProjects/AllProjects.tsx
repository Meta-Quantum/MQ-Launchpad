import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import projectsData from '../../api/metaMask/mockup-allProjects'
import upcomingData from '../../api/mockup-upcoming'

import Cards from '../../components/Cards/Card'
import './AllProjects.scss'

function AllProjects() {
  return (
    <div className='projects__container'>
    <Navbar />
<div className='projects__container__element raisers'>

<h3 className='projects__container__element__title'>this month's best performers</h3>
<p className='projects__container__element__subtitle'>We keep you updated with the projects you need to keep an eye on...</p>
<div className='projects__container__content'>
        {upcomingData.map((item:any) => (<Cards props={item}/>))}
    </div>
</div>
        

<div className='projects__container__element'>
<h3 className='projects__container__element__title'>Feeling like exploring...</h3>
<p className='projects__container__element__subtitle'>Look below through all of our projects</p>
<div className='projects__container__content'>
        {projectsData.map((item:any) => (<Cards props={item}/>))}

    </div>
</div>
   
    </div>
  )
}

export default AllProjects