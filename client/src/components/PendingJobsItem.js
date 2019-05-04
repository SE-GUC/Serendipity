import React, { Component } from 'react';
//import PropTypes from 'prop-types';


class PendingJobsItem extends Component {
  getStyle =() => {
      return{
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          //textDecoration: this.props.eduorg.flag?
          'line-through' : 'none'
      }
  }

  
  render() {
      const {_id,title,location,startdate,enddate,salary,dailyhours,partner,description,state} = this.props.pendingjob
    return(
        <div style={this.getStyle()}>
     
            {/* <p>Name: {full_name}</p>
            <p>Email: {email}</p> */}
            <p>Title: {title}</p>
            
            <p>Location: {location}</p>
            <p>Start date: {startdate}</p>
            <p>End date: {enddate}</p>
            <p>Salary: {salary}</p>
            {/* <p>Partner: {partner}</p> */}
            <p>Description: {description}</p>
            <p>State: {state}</p>
            <button onClick={this.props.approvejob.bind(this, _id)}>Approve</button>
            <button onClick={this.props.rejectjob.bind(this, _id)}>Reject</button>
            
        
        </div>
    )
   
  }
}


const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right'
}
export default PendingJobsItem;
