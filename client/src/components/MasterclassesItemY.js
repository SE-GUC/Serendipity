import React, { Component } from 'react';
class MasterclassesItemY extends Component {
  getStyle =() => {
      return{
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted'
      }
  }
  render() {
      const {_id,title,Eduorganization,duration,price,description,location,applicants,courseIDs,workshopsIDs} = this.props.masterclass
    return(
        <div style={this.getStyle()}>
            <p>{"Title:"}{title}</p>
            <p>{"Duration:"}{duration}</p>
            <p>{"Price:"}{price}</p>
            <p>{"Description:"}{description}</p>
            <p>{"Location:"}{location}</p>
            <p>{"Eduorganization:"}{Eduorganization}</p>
            <p>{"Courses:"}{courseIDs.map(item => <li>{item.title}</li>)}</p>
            <p>{"Workshops:"}{workshopsIDs.map(item => <li>{item.title}</li>)}</p>
           <p>{"applicants:"}{applicants.map(item => <li><p>Applicant Name:{item.name} , Applicant Username:{item.userName} , Applicant email:{item.email}</p></li>)}</p>
        </div>
    )
  }
}

export default MasterclassesItemY;


