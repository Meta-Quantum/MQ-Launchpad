import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import logoWhite from '../../assets/logo_white.png'
import'./Project.scss'
import upcomingData from '../../api/mockup-upcoming'

function Project() {
  return (
    <div className='project'>
          <Navbar />
          <h3 className='project__name'>Upcoming Project</h3>
          
          <div className='project__container'>
       <div className='project__container__element'>
       
        <div className='project__container__element__image'>
        <img src={logoWhite} className="project__container__element__image__img" />
        <h3 className='project__container__element__image__title'>{upcomingData[0].title}</h3>
        </div>
        </div>
        <div className='project__container__element'>
        <div className='project__container__element__content'>
         <p className='project__container__element__content__pitch'>{upcomingData[0].pitch}</p>
         <p className='project__container__element__content__coin'>{upcomingData[0].coin}</p>
      <p className='project__container__element__content__fundRaise'>
        <span className='project__container__element__content__fundRaise__span'>Fundraise Goal:</span>
         {upcomingData[0].fundRaise}</p>
      <p className='project__container__element__content__allocation'>
        <span className='project__container__element__content__allocation__span'>Max Allocation:</span> 
        {upcomingData[0].maxAllocation}</p>
        </div>
        </div>
       </div>
       <button className='project__btn'>Tokken Sale</button>
       <p className='project__description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nihil
         tempora possimus ipsum architecto pariatur numquam earum adipisci, quos, rem 
         repellendus soluta reprehenderit, sunt magni! Nobis sed nisi, eaque unde, voluptatum 
         ratione tenetur laboriosam eligendi atque quod quisquam doloribus reiciendis sunt 
         cupiditate consequatur delectus odit quia, veniam ad iste cumque architecto! <br/><br/>
         Quidem 
         officiis fuga ad soluta accusantium delectus eos iure, quae voluptatum, labore laudantium
          exercitationem doloribus fugiat necessitatibus deleniti repellendus reiciendis repudiandae 
          ab inventore. Perferendis officia molestiae corrupti praesentium saepe ducimus cupiditate 
          sit pariatur commodi hic est impedit omnis laborum obcaecati tenetur, repudiandae cum quos
           atque aut consequatur dolorum veniam?</p>
       </div>
  )
}

export default Project