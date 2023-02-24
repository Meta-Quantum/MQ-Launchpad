import React from 'react'
import './MyApplications.scss'
import applicationsData from '../../../api/mockup-myApplications'

function MyApplications() {
  return (
    <div className='apps__container'>
     <h1 className='apps__container__title'>Your applications</h1>
     <table className='apps__container__table'>
        <tr className='apps__container__table__row__head'>
            <th className='apps__container__table__row__head__name'>Project Name</th>
            <th className='apps__container__table__row__head__date'>Sale Date</th>
            <th className='apps__container__table__row__head__status'>Status</th>
        </tr>
            {applicationsData.map((app =>(
                <tr className='apps__container__table__row__data'>
                <td className='apps__container__table__row__data__name'>{app.name}</td>
                <td className='apps__container__table__row__data__date'>{app.saleDate}</td>
                <td className='apps__container__table__row__data__status'>{app.status}
                <input type="button" value="Claim" className='apps__container__table__row__data__status__btn'/>
                </td>
                </tr>
            ) ))}
     </table>
     <input type="button" value="Go to projects" className='apps__container__btn'/>
    </div>
  )
}

export default MyApplications