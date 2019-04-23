import React, { Component } from 'react';
import PendingAdminsItem from './PendingAdminsItem';
import PropTypes from 'prop-types';
import axios from 'axios';

class PendingAdmins extends Component {
//save
  state = {
    _id:null,
        name: null,
        email: null,
    password: null,
        registered:null,
        username:null
       
  
        
      }
  getPendingAdmins = () => {
    const tokenB= localStorage.getItem('jwtToken');
    axios.get('http://localhost:5000/api/admins/p/pendingadmins',{
      Authorization: tokenB
    })
    .then(res => this.setState({pendingadmins:[...this.state.PendingAdmins,res.data]}))
  }
  render() {
    
    return this.props.pendingadmins.map((pendingadmin) => (
      <PendingAdminsItem key = {pendingadmin._id} pendingadmin = {pendingadmin} approveadmin={this.props.approveadmin} rejectadmin={this.props.rejectadmin} />

    ));
  }
}

export default PendingAdmins;