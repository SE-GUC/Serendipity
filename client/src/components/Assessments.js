import React from 'react'
import {Link} from 'react-router-dom';


function Assessments() {
  return (
   <React.Fragment>
       <h2><Link style={LinkStyle} to="/assessment/create">Book an assessment</Link>{' '}</h2>
       {/* <h2><Link style={LinkStyle} to="/assessment/delete">Delete my Account</Link>{' '}</h2>
       <h2><Link style={LinkStyle} to="/partner/update">Update My Profile</Link>{' '}</h2> */}
       <h2><Link style={LinkStyle} to="/assessment/view">View all assessments</Link>{' '}</h2>
   </React.Fragment>
  )
}
export default Assessments;

const LinkStyle={
    color:'#000'
}