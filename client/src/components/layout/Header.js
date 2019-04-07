import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
<header style={headerStyle}>
    <h1>LirtenHub</h1>
    <Link style={LinkStyle} to="/">Home</Link>{' '}|{' '}<Link style={LinkStyle} to="/about">About</Link>|{' '}
    <Link style={LinkStyle} to="/login">Login</Link> {' '}|{' '}<Link style={LinkStyle} to="/register">Register</Link>
    
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