import React from 'react'
import {Link} from 'react-router-dom';


function Assessments() {
  return (
   <React.Fragment>
       <h2><Link style={LinkStyle} to="/assessment/createAssessment"> Book an assessment </Link>{' '}</h2>
       <h2><Link style={LinkStyle} to="/assessment/deleteAssessment"> Delete your booked assessment </Link>{' '}</h2>
       <h2><Link style={LinkStyle} to="/assessment/updateAssessment"> Update your booked assessment </Link>{' '}</h2>
   </React.Fragment>
  )
}
export default Assessments;

const LinkStyle={
    color:'#000'
}