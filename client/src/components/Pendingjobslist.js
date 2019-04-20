import React, { Component } from 'react';
import PendingJobsItem from './PendingJobsItem';
import PropTypes from 'prop-types';
import axios from 'axios';

class Pendingjobslist extends Component {
//save
  state = {
    _id:null,
        title: null,
        location: null,
    startdate: null,
        enddate:null,
        salary:null,
        dailyhours:null,
        partner:null,
        description:null
  
        
      }
  getPendingJobs = () => {
    axios.get('http://localhost:5000/api/admins/p/pendingjobs')
    .then(res => this.setState({pendingjobs:[...this.state.Pendingjobslist,res.data]}))
  }
  render() {
    
    return this.props.pendingjobs.map((pendingjob) => (
      <PendingJobsItem key = {pendingjob._id} pendingjob = {pendingjob} approvejob={this.props.approvejob} rejectjob={this.props.rejectjob} />

    ));
  }
}

export default Pendingjobslist;