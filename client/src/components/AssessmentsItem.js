import React, { Component } from 'react'
import '../App.css'

export class AssessmentsItem extends Component {
  getStyle = () => {
    return {
      backgroundColor : '#f4f4f4f4',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.current.reviewed? 'line-through':'none'
    }

  }

  render () {
    const {_id,memberName,expertName,phoneNumber,daysAvailable} = this.props.current
    return(
        <div style={this.getStyle()}>
             <p>Member name: {memberName}</p>
            <p>Expert name: {expertName}</p>
            <p>Phone number: {phoneNumber}</p>
            <p>Days available: {daysAvailable}</p>
            <p>
              {/* <button onClick={this.props.deleteAssessment} style={btnStyle}>delete</button>
              <button onClick={this.props.updateAssessment} style={btnStyle}>update</button> */}
          </p>
         

        </div>
    )
  }
  
}

const btnStyle={
  color: 'white',
  background:'black',
  fontSize: 18,
  borderColor: 'white',
  borderWidth: 4,
  borderRadius:'80%',
  cursor:'pointer'
  // float:'down-right'
}
export default AssessmentsItem