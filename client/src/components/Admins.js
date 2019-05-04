import React, { Component } from 'react';
import AdminItem from './AdminItem';
import PropTypes from 'prop-types';
import axios from 'axios';

class Admins extends Component {
//save
  state = {
    _id:null,
        username: null,
        full_name: null,
        password: null,
        email:null
  
        
      }
  getAdmin = () => {
    
    axios.get('http://localhost:5000/api/admins/'
     
  )
    .then(res =>this.setState({admins:[...this.state.Admins,res.data]}))
  }
  render() {
    
    return this.props.admins.map((admin) => (
      <AdminItem key = {admin._id} admin = {admin} deleteadmin={this.props.deleteadmin} updateadmin={this.props.updateadmin} showadmin={this.props.showadmin} />

    ));
  }
}

export default Admins;