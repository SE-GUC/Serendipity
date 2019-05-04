import React, { Component } from 'react';
class CoursesItemY extends Component {
  getStyle =() => {
      return{
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted'
      }
  }
  render() {
      const {_id,title,eduOrganisation,duration,educator,price,description,location,applicants} = this.props.course
    return(
        <div style={this.getStyle()}>
            <p>{"Title:"}{title}</p>
            <p>{"EduOrganization:"}{eduOrganisation}</p>
            <p>{"Description:"}{description}</p>
            <p>{"Location:"}{location}</p>
            <p>{"Applicants:"}{applicants.map(item => <li>{item.name}</li>)}</p>
            <p>{"Duration:"}{duration}</p>
            <p>{"Eduacator:"}{educator}</p>
           <p>{"Price:"}{price}</p>
        </div>
    )
  }
}

export default CoursesItemY;


