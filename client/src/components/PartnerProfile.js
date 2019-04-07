import React, { Component } from 'react';
import PartnerIdComponentForm from './PartnerIdComponentForm'
import axios from "axios"
//import { Router, Route, Link } from 'react-router'

class PartnerProfile extends Component {
  state = {
    email: null,
    name: null,
    boardOfMembers: null,
    vacancies: null,
    partners: null,
    pastProjects: null
  }
  
  getPartner = (e) => {
    e.preventDefault();
    const partner = e.target.elements.id.value;
    if(partner){
    axios.get(`http://localhost:5000/api/partners/${partner}`).then((res) =>{
      const email = res.data.email;
      const name = res.data.name;
      const boardOfMembers = res.data.boardOfMembers;
      const vacancies = res.data.vacancies;
      const partners = res.data.partners;
      const pastProjects = res.data.pastProjects;

      this.setState({email})
      this.setState({name})
      this.setState({boardOfMembers})
      this.setState({vacancies})
      this.setState({partners})
      this.setState({pastProjects})


    })
  } else return;
  }
  
  render() {
    return (
      <div>
        <PartnerIdComponentForm getPartner={this.getPartner}/>
        <center>
        { this.state.email ? <p><h4>Email:</h4> {this.state.email}</p>:<p></p>}
        { this.state.name ? <p><h4>Name:</h4> {this.state.name}</p>:<p></p>}
        { this.state.boardOfMembers ? <p><h4>Board Of Members:</h4><ol>{this.state.boardOfMembers.map(item => <li>{item}</li>)}</ol></p>:<p></p> }
        { this.state.vacancies ? <p><h4>Vacancies:</h4><ol>{this.state.vacancies.map(item => <li>{item.title}</li>)}</ol></p>:<p></p> }
        { this.state.partners ? <p><h4>Partners:</h4><ol>{this.state.partners.map(item => <li>{item.name}</li>)}</ol></p>:<p></p> }
        { this.state.pastProjects ? <p><h4>Past Projects:</h4><ol>{this.state.pastProjects.map(item => <li>{item}</li>)}</ol></p>:<p></p> }
        </center>
      </div>

);
  }
}

export default PartnerProfile;
