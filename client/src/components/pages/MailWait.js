import React, { Component } from 'react'

export class MailWait extends Component {
  render() {
    return (
      <div>
        <h2 style={LineStyle}>Your Info has been recieved. Please wait shortly for our mail to verify.</h2>
      </div>
    )
  }
}
const LineStyle={
    //background:'#193E43',
   // width: '5rem',
    //height: '5rem',
    color:'#000',
    //textAlign:'center',
    fontFamily:'ariel',
    padding:'10px'
  }
export default MailWait
