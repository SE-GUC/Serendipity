import React, { Component } from 'react'
import '../App.css'

export class EduOrgCourseItem extends Component {

  addCourse = (e) => {
    e.preventDefault();
    this.props.addCourse(this.props.current._id);
  }

  getStyle = () => {
    return {
      backgroundColor : '#f4f4f4f4',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.current.reviewed? 'line-through':'none'
    }

  }

  render () {
    const {_id,title,educator,price,description,location} = this.props.current
    return(
      <div style={this.getStyle()}>
             <p>Title: {title}</p>
             <p>Educator: {educator}</p>
             <p>Price: {price}</p>
             <p>Description: {description}</p>
             <p>Location: {location}</p>
             <p>
              <button onClick={this.addCourse} >Add Course to this Masterclass</button>
             </p>
             </div>
    )
  }
  
}

export default EduOrgCourseItem