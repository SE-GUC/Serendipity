import React from 'react'

function About() {
  return (
   <React.Fragment>
       <h1 style={h1Style}>The Vision</h1>
       <p style={pStyle}>Our vision is to give a chance to those who wish to contribute but are not given a chance.<br/> To empower and teach those who want to better their futures and finally to solve the mess of the freelancing world.</p>
       </React.Fragment>
  )
}

const h1Style={
  //background:'#193E43',
  color:'#193E43',
  textAlign:'center',
  padding:'10px'
}
const pStyle={
  //background:'#193E43',
  color:'#000',
  textAlign:'center',
  padding:'10px'
}
export default About;