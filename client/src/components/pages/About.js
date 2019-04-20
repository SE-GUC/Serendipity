import React from 'react';
// import {UserAuth} from '../../globalState/actions/authActions';
import '../../../src/App.css';
// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../globalState/actions/authentication';
import { withRouter } from 'react-router-dom';
import Navbar from '../layout/Navbar';

function About() {
  return (
    
   <React.Fragment>
       <h1 style={h1Style}>The Vision</h1>
       {/* <p>HERE: {userData.isAuthenticated}</p> */}
       <p style={pStyle}>Our vision is to give a chance to those who wish to contribute but are not given a chance.<br/> To empower and teach those who want to better their futures and finally to solve the mess of the freelancing world.</p>
       </React.Fragment>
  )
}

// console.log(authAction)
const h1Style={
  //background:'#193E43',
  color:'#00000',
  textAlign:'center',
  fontFamily:'ariel',
  padding:'10px'
}
const pStyle={
  //background:'#193E43',
  color:'#000',
  textAlign:'center',
  fontFamily:'ariel',
  padding:'10px'
}
export default About;