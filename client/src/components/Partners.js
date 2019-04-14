import React from 'react'
import {Link} from 'react-router-dom';


function Partners() {
  return (
   <React.Fragment>
       <h2><Link style={LinkStyle} to="/partner/profile">View My Profile</Link>{' '}</h2>
       <h2><Link style={LinkStyle} to="/partner/delete">Delete My Account</Link>{' '}</h2>
       <h2><Link style={LinkStyle} to="/partner/update">Update My Profile</Link>{' '}</h2>
       <h2><Link style={LinkStyle} to="/partner/view">View All Partners</Link>{' '}</h2>

   </React.Fragment>
  )
}
export default Partners;

const LinkStyle={
    color:'#000'
}