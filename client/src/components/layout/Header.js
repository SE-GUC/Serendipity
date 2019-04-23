import React from 'react';
import {Link} from 'react-router-dom';
import '../../../src/App.css';
function Header() {
  return (
<header style={headerStyle}>
    {/* <h1>LirtenHub</h1> */}
    {/* <Link style={LinkStyle} to="/">Home</Link>{' '}| */}
    {/* // {' '}<Link style={LinkStyle} to="/about">About</Link>|{' '}
    {/* <Link style={LinkStyle} to="/login">Login</Link> {' '}|{' '}<Link style={LinkStyle} to="/register">Register</Link> |{' '} */}
     {/* <Link style={LinkStyle} to="/eduorg">Educational Organization</Link>{' '}|{' '}<Link style={LinkStyle} to="/masterclass">MasterClasses</Link>|{' '}
     <Link style={LinkStyle} to="/workshop">Workshops</Link>{' '}|{' '}<Link style={LinkStyle} to="/member">Members</Link>|{' '}
     <Link style={LinkStyle} to="/partner">Partners</Link>{' '}|{' '}<Link style={LinkStyle} to="/job">Jobs</Link>|{' '} */} 
    {/* <h1>LirtenHub</h1> */}
    {/* <Link style={LinkStyle} to="/">Home</Link>{' '}|{' '} */}
    <Link style={LinkStyle} to="/about">About</Link>|{' '}
    {/* <Link style={LinkStyle} to="/login">Login</Link> {' '}|{' '} */}
    {/* <Link style={LinkStyle} to="/register">Register Member</Link>{' '}|{' '} */}
    {/* <Link style={LinkStyle} to="/register/partner">Register Partner</Link>{' '}|{' '} */}
    <Link style={LinkStyle} to="/eduorg">Educational Organization</Link>{' '}|{' '}
    <Link style={LinkStyle} to="/masterclass">MasterClasses</Link>|{' '}
    <Link style={LinkStyle} to="/workshop">Workshops</Link>{' '}|{' '}
    <Link style={LinkStyle} to="/member">Members</Link>|{' '}
    <Link style={LinkStyle} to="/partner">Partners</Link>{' '}|{' '}
    <Link style={LinkStyle} to="/job">Jobs</Link>|{' '}
    <Link style={LinkStyle} to="/course">Courses</Link> |{' '}
    <Link style={LinkStyle} to="/assessment"> Assessments </Link>{' '}
   {/* <Link style={LinkStyle} to="/searchJobs">search jobs</Link>{' '} */}
    <Link style={LinkStyle} to="/search">Search </Link>{' '} 
</header>
  )
}
export default Header;
//#194D33
//#22555B
//#193E43
//#e5e8e8
const headerStyle={
    background:'#000000',
    color:'#e5e8e8',
    textAlign:'center',
    padding:'10px'
  }
  const LinkStyle={
      color:'#e5e8e8'
  }