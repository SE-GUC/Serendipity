import React, { Component } from 'react';
import PendingPartnersItem from './PendingPartnersItem';
import PropTypes from 'prop-types';
import axios from 'axios';

class PendingPartners extends Component {
//save
  state = {
    _id:null,
        name: null,
        email: null,
    password: null,
        registered:null
       
  
        
      }
  getPendingPartners = () => {
    axios.get('http://localhost:5000/api/admins/p/pendingpartners')
    .then(res => this.setState({pendingpartners:[...this.state.PendingPartners,res.data]}))
  }
  render() {
    
    return this.props.pendingpartners.map((pendingpartner) => (
      <PendingPartnersItem key = {pendingpartner._id} pendingpartner = {pendingpartner} approvepartner={this.props.approvepartner} rejectpartner={this.props.rejectpartner} />

    ));
  }
}

export default PendingPartners;