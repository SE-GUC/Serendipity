import React, { Component } from 'react';
import PendingMembersItem from './PendingMembersItem';
import PropTypes from 'prop-types';
import axios from 'axios';

class PendingMembers extends Component {
//save
  state = {
    _id:null,
        name: null,
        email: null,
    password: null,
        registered:null,
        userName:null
       
  
        
      }
  getPendingMembers = () => {
    const tokenB= localStorage.getItem('jwtToken');
    axios.get('http://localhost:5000/api/admins/p/pendingmembers',
    {Authorization: tokenB
  })
    .then(res => this.setState({pendingmembers:[...this.state.PendingMembers,res.data]}))
  }
  render() {
    
    return this.props.pendingmembers.map((pendingmember) => (
      <PendingMembersItem key = {pendingmember._id} pendingmember = {pendingmember} approvemember={this.props.approvemember} rejectmember={this.props.rejectmember} />

    ));
  }
}

export default PendingMembers;