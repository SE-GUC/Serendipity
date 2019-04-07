import React, { Component } from 'react';
import workshopItem from './workshopItem';
import PropTypes from 'prop-types';
import axios from 'axios';

class workshop extends Component {

  state = {
    title : null,
    eduOrganisation : null,
    duration :null,
    educator : null,
    price : null,
    description : null,
    location :null
        
      }
  getworkshop = () => {
    axios.get('http://localhost:5000/api/workshops/')
    .then(res => this.setState({workshops:[...this.state.workshop,res.data]}))
  }
  render() {
    
    return this.props.workshops.map((work) => (
      <workshopItem key = {work.id} work = {work}/>

    ));
  }
}
//proptypes
// EduOrgs.propTypes = {
//   eduorgs: PropTypes.array.isRequired,
//   mark: PropTypes.func.isRequired,
//   delEduOrg: PropTypes.func.isRequired
// }
export default workshop;