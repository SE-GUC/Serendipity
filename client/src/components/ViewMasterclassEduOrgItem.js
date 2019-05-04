import React, { Component } from 'react'
import '../App.css'

export class ViewMasterclassEduOrgItem extends Component {
  getStyle = () => {
    return {
      backgroundColor : '#f4f4f4f4',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.current.reviewed? 'line-through':'none'
    }

  }

  render () {
    const {title,Eduorganization,duration,price,location} = this.props.current
    return(
        <div style={this.getStyle()}>
             <p>Title: {title}</p>
            <p>Educational organization: {Eduorganization}</p>
            <p>Location: {location}</p>
            <p>Duration: {duration}</p>
            <p>price: {price}</p>

        </div>
    )
  }
  
}



export default ViewMasterclassEduOrgItem