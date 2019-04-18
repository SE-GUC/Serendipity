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
    const {_id,title: memberName,expertName,masterClass,educationalOrg} = this.props.current
    return(
        <div style={this.getStyle()}>
             <h1>Member Name: {memberName}</h1>
            <p>Expert Name: {expertName}</p>
            <p>Master Class: {masterClass}</p>
            <p>Educational Org.: {educationalOrg}</p>
            <p>
              <button onClick={this.props.deleteAssessment.bind(this,_id)} style={btnStyle}> Delete </button>
              <button onClick={this.props.updateAssessment.bind(this,_id)} style={btnStyle1}> Update </button>
          </p>
         

        </div>
    )
  }
  
}

const btnStyle={
  color: 'white',
  background:'blue',
  fontSize: 21,
  borderColor: 'white',
  borderWidth: 2,
  borderRadius:'80%',
  cursor:'pointer'
}
const btnStyle1={
    color: 'white',
    background:'blue',
    fontSize: 21,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius:'80%',
  cursor:'pointer'
 }
export default AssessmentsItem