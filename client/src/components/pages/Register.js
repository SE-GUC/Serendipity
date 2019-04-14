import React from 'react'
import {Link} from 'react-router-dom';


function Register() {
  return (
   <React.Fragment>
       <h2><Link style={LinkStyle} to="/register/partner">Create a Partner Account</Link>{' '}</h2>
   </React.Fragment>
  )
}
export default Register;

const LinkStyle={
    color:'#000'
}