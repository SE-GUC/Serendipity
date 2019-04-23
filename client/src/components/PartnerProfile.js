import React, { Component } from 'react';
import PartnerIdComponentForm from './PartnerIdComponentForm'
import axios from "axios"
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from './layout/Navbar';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../globalState/actions/authentication';

//import { Router, Route, Link } from 'react-router'

class PartnerProfile extends Component {
  state = {
    _id:null,
    email: null,
    name: null,
    boardOfMembers: null,
    vacancies: null,
    partners: null,
    pastProjects: null,
    description: null,
    fieldOfWork: null,

  }
  
  getPartner = (e) => {
    e.preventDefault();
    //console.log("in get partner")
    const {isAuthenticated, user} = this.props.auth;
    this.state._id={user}.user.id;
    //console.log(this.state._id)
    const partner =this.state._id;
    const tokenB= localStorage.getItem('jwtToken');

    //const partner = e.target.elements.id.value;
    if(partner){
    axios.get(`http://localhost:5000/api/partners/${partner}`, {
      Authorization: tokenB
    }).then((res) =>{
      const _id = partner;
      const email = res.data.email;
      const name = res.data.name;
      const boardOfMembers = res.data.boardOfMembers;
      const vacancies = res.data.vacancies;
      const partners = res.data.partners;
      const pastProjects = res.data.pastProjects;
      const description = res.data.description;
      const fieldOfWork = res.data.fieldOfWork;

      this.setState({_id})
      this.setState({email})
      this.setState({name})
      this.setState({boardOfMembers})
      this.setState({vacancies})
      this.setState({partners})
      this.setState({pastProjects})
      this.setState({description})
      this.setState({fieldOfWork})

    })
  } else return;
  }
  
  render() {
    const {isAuthenticated, user} = this.props.auth;
    //console.log({user}.user.id)
    this.state._id={user}.user.id;
    //this.getPartner;
    //console.log(this.state._id)

    return (
      <div>
        {/* <PartnerIdComponentForm getPartner={this.getPartner}/> */}
        <center>
         {/* { this.getPartner} */}
        { this.state.email ? <p><h4>Email:</h4> {this.state.email}</p>:<p></p>}
        { this.state.name ? <p><h4>Name:</h4> {this.state.name}</p>:<p></p>}
        { this.state.boardOfMembers ? <p><h4>Board Of Members:</h4>{this.state.boardOfMembers}</p>:<p></p> }
        { this.state.vacancies ? <p><h4>Vacancies:</h4><ol>{this.state.vacancies.map(item => <li>{item.title}</li>)}</ol></p>:<p></p> }
        { this.state.partners ? <p><h4>Partners:</h4>{this.state.partners}</p>:<p></p> }
        { this.state.pastProjects ? <p><h4>Past Projects:</h4>{this.state.pastProjects}</p>:<p></p> }
        { this.state.description ? <p><h4>Description:</h4> {this.state.description}</p>:<p></p>}
        { this.state.fieldOfWork ? <p><h4>Field Of Work:</h4> {this.state.fieldOfWork}</p>:<p></p>}
        <button onClick={this.getPartner}>View My Profile </button>
        </center>
      </div>

);
  }
}

PartnerProfile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

/*
EduOrgProfile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

//export default EduOrgProfile;
export default connect(mapStateToProps)(withRouter(EduOrgProfile));
*/
export default connect(mapStateToProps)(withRouter(PartnerProfile));

//export default PartnerProfile;
