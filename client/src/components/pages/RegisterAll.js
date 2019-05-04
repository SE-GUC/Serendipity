import React, { Component } from 'react'

export class RegisterAll extends Component {
  render() {
    return (
      <div  style={boxStyle}>
          <h1>How do you want to Sign up ? </h1>
          <br/>
        {/* <div  class="btn-group" role="group" aria-label="Basic example"> */}
        <a style={btnStyle}  href="register/member" role="button">Member</a>
        <a style={btnStyle}  href="register/partner" role="button">Partner</a>
        <a  style={btnStyle} href="/eduorg/create" role="button">Educational Organization</a>
 
</div>
    //   </div>
    )
  }
}
const boxStyle={
    textAlign:'center',
}
const btnStyle={
    bordercolor:'#000',
    // borderradius:'20',
    background:'#000000',
    color:'#e5e8e8',
    textAlign:'center',
    fontFamily:'ariel',
    padding:'17px',
    margin:'30px'
    // background:'#193E43',
    // color:'#fff',
    // textAlign:'center',
    // padding:'10px'
    
  }

export default RegisterAll
