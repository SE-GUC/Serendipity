import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
<header style={headerStyle}>
    <h1>LirtenHub</h1>
    <Link style={LinkStyle} to="/">Home</Link>{' '}|{' '}<Link style={LinkStyle} to="/about">About</Link>|{' '}
    <Link style={LinkStyle} to="/login">Login</Link> {' '}|{' '}<Link style={LinkStyle} to="/register">Register</Link>
    <Link style={LinkStyle} to="/eduorg">Educational Organization</Link>{' '}|{' '}<Link style={LinkStyle} to="/masterclass">MasterClasses</Link>|{' '}
    <Link style={LinkStyle} to="/workshop">Workshops</Link>{' '}|{' '}<Link style={LinkStyle} to="/member">Members</Link>|{' '}
    <Link style={LinkStyle} to="/partner">Partners</Link>{' '}|{' '}<Link style={LinkStyle} to="/job">Jobs</Link>|{' '}
    <Link style={LinkStyle} to="/partner">Partners</Link>{' '}|{' '}<Link style={LinkStyle} to="/job">Jobs</Link>|{' '}
    <Link style={LinkStyle} to="/assessment">Assessment</Link>{' '}
</header>
  )
}
export default Header;

const headerStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
  }
  const LinkStyle={
      color:'#fff'
  }