

import React, { Component } from 'react';

import MasterclassItem from './MasterclassItemNew';

import PropTypes from 'prop-types';

import axios from 'axios';



class MasterclassesNew extends Component {



  // state = {

  //       userName: null,

  //       title:null,
  //   duration:null,
  //   price:null,
  //   description:null,
  //   location:null,  
  //   Eduorganization:null,
  //   courseIDs :null, 
  //   workshopsIDs :null,
  //   applicants:null

        

  //     }

  // getMasterclass = () => {

  //   axios.get('http://localhost:5000/api/masterclasses/')

  //   .then(res => this.setState({masterclasses:[...this.state.Masterclasses,res.data]}))

  // }

  render() {
    return (
      this.props.masterclasses.map((masterclass) => {
        return <MasterclassItem  masterclass = {masterclass} applyMasterclass = {this.props.applyMasterclass}/>
        // return <MasterclassItem  masterclass = {masterclass} delMasterclass = {this.props.delMasterclass}  applyMasterclass = {this.props.applyMasterclass} />
 })
 )
}

}

//proptypes

// EduOrgs.propTypes = {

//   eduorgs: PropTypes.array.isRequired,

//   mark: PropTypes.func.isRequired,

//   delEduOrg: PropTypes.func.isRequired

// }

export default MasterclassesNew;
    
