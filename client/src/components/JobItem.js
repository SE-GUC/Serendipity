import React, { Component } from 'react';
class JobItem extends Component {
  getStyle =() => {
      return{
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted'
      }
  }
  render() {
      const {_id,title,state,
        location,
        startdate,
        enddate,  
        salary,
        dailyhours, 
        partner,
        description,
        applicants} = this.props.job
    return(
        <div style={this.getStyle()}>
            <p>{"Title:"}{title}</p>
            <p>{"dailyhours:"}{dailyhours}</p>
            <p>{"State:"}{state}</p>
            <p>{"Description:"}{description}</p>
            <p>{"Location:"}{location}</p>
            <p>{"Applicants:"}{applicants.map(item => <li>{item.name}</li>)}</p>
            <p>{"Start Date:"}{startdate}</p>
            <p>{"End Date:"}{enddate}</p>
           <p>{"Salary:"}{salary}</p>
        </div>
    )
  }
}

export default JobItem;