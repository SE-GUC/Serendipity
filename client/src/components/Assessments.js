import React from 'react'
import {Link} from 'react-router-dom';


function Assessments() {
  return (
   <React.Fragment>
       <h2><Link style={LinkStyle} to="/assessment/delete">Delete my assessment</Link>{' '}</h2>
       <h2><Link style={LinkStyle} to="/assessment/update">Update my assessment</Link>{' '}</h2>
       

   </React.Fragment>
  )
}
export default Assessments;

const LinkStyle={
    color:'#000'
}