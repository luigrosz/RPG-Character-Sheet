import React from 'react'

export default function PersonalDetails() {
  return (
    <div className='personal-details-div'>
      <div>
        <div>
          <h3>Personal Details</h3>
          <div className='personal-details'>
            <ul>
              <li><label>Name:<input type="text" /></label></li>
              <li><label>Ocupation:<input type="text" /></label></li>
              <li><label>Age:<input type="text" /></label></li>
              <li><label>Gender:<input type="text" /></label></li>
              <li><label>Birthplace:<input type="text" /></label></li>
            </ul>    
          </div>
        </div>
        <div>
          <h3>a</h3>
        </div>
      </div>
    </div>
  )
}
