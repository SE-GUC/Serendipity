import React, { Component } from 'react';
import EduOrgItem from './EduOrgItem';
import PropTypes from 'prop-types';
import axios from 'axios';

class EduOrgs extends Component {

  state = {
        id: null,
        userName: null,
        name: null,
        password: null,
        email: null,
        masterClasses:null,
        courses: null,
        workshops: null,
        trainers: null,
        educators: null,
        trainingPrograms: null,
        description: null,
        contract: null,
        expirationDate: null
        
      }
  getEdu = () => {
    axios.get('http://localhost:5000/api/educationalOrganizations/')
    .then(res => this.setState({eduorgs:[...this.state.EduOrgs,res.data]}))
  }
  render() {
    
    return this.props.eduorgs.map((eduorg) => (
      <EduOrgItem key = {eduorg.id} eduorg = {eduorg} mark = {this.props.mark}
      viewWorkshops = {this.props.viewWorkshops} viewCourses = {this.props.viewCourses} viewMasterclasses = {this.props.viewMasterclasses} />

    ));
  }
}

export default EduOrgs;
