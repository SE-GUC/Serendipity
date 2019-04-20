import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EduOrgItem extends Component {
  getStyle =() => {
      return{
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
         
      }
  }
  render() {
      const {_id,name,userName,email,description} = this.props.eduorg
    return(
        <div style={this.getStyle()}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>
            <button onClick={this.props.viewWorkshops.bind(this,_id)} >View workshops offered</button>
            <button onClick={this.props.viewCourses.bind(this,_id)} >View Courses offered</button>
         
            </p>


        </div>
    )
   
  }
}


export default EduOrgItem;




