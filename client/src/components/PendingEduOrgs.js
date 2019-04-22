import React, { Component } from 'react';
import PendingEduOrgsItem from './PendingEduOrgsItem';
import PropTypes from 'prop-types';
import axios from 'axios';

class PendingEduOrgs extends Component {
//save
  state = {
    _id:null,
        name: null,
        email: null,
    password: null,
        registered:null,
        userName:null
       
  
        
      }
  getPendingEduOrgs = () => {
    axios.get('http://localhost:5000/api/admins/p/pendingeduorg')
    .then(res => this.setState({pendingeduorgs:[...this.state.PendingEduOrgs,res.data]}))
  }
  render() {
    
    return this.props.pendingeduorgs.map((pendingeduorg) => (
      <PendingEduOrgsItem key = {pendingeduorg._id} pendingeduorg = {pendingeduorg} approveeduorg={this.props.approveeduorg} rejecteduorg={this.props.rejecteduorg} />

    ));
  }
}

export default PendingEduOrgs;