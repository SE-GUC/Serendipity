import React, { Component } from 'react'
import '../App.css'

export class WorkshopsItem extends Component {
  getStyle = () => {
    return {
      backgroundColor : '#f4f4f4f4',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.current.reviewed? 'line-through':'none'
    }

  }

  render () {
    return (
      <div style = {this.getStyle()} >
        <p>
        <input type='checkbox' onChange={this.props.Choose.bind(this,this.props.current._id)}/> {'  '}
        { this.props.current.title}
     </p>
      </div>
    )   
  }
  
}

const btnStyle={
 background:'#ff0000',
 color:'#ffff',
 border:'none',
 padding:'5px 10px',
 borderRadius:'pointer',
 float:'right'
}
export default WorkshopsItem