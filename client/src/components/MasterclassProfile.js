import React, { Component } from 'react';
//import PartnerIdComponentForm from './PartnerIdComponentForm'
import axios from "axios"
import Masterclassform from './Masterclassform';
//import { Router, Route, Link } from 'react-router'

class MasterclassProfile extends Component {
  state = {
           title:null,
    duration:null,
    price:null,
    description:null,
    location:null,  
    Eduorganization:null,
    courseIDs :null, 
    workshopsIDs :null,
    applicants:null
  }
  
  getMasterclass = (e) => {
    e.preventDefault();
    const masterclass = e.target.elements.id.value;
    if(masterclass){
    axios.get(`http://localhost:5000/api/masterclasses/${masterclass}`).then((res) =>{
      const title = res.data.data.title;
      const duration = res.data.data.duration;
      const price = res.data.data.price;
      const description = res.data.data.description;
      const location = res.data.data.Eduorganization;
      const courseIDs = res.data.data.courseIDs;
      const workshopsIDs = res.data.data.workshopsIDs;
      const applicants = res.data.data.applicants;

      this.setState({title})
      this.setState({duration})
      this.setState({price})
      this.setState({description})
      this.setState({location})
      this.setState({courseIDs})
      this.setState({workshopsIDs})
      this.setState({applicants})


    })
  } else return;
  }
  
  render() {
    return (
      <div>
          
        <Masterclassform getMasterclass={this.getMasterclass}/>
        
        { this.state.title ? <p><h4>Title:</h4> {this.state.title}</p>:<p></p>}
        { this.state.duration ? <p><h4>Duration:</h4> {this.state.durtion}</p>:<p></p>}
        { this.state.price ? <p><h4>Price:</h4> {this.state.durtion}</p>:<p></p>}
        { this.state.description? <p><h4>Description:</h4> {this.state.description}</p>:<p></p>}
        { this.state.location ? <p><h4>Location:</h4> {this.state.location}</p>:<p></p>}
        { this.state.Eduorganization ? <p><h4>Eduorganization:</h4> {this.state.Eduorganization}</p>:<p></p>}
        { this.state.workshopsIDs ? <p><h4>workshops:</h4><ol>{this.state.workshopsIDs.map(item => <li>{item.title}</li>)}</ol></p>:<p></p> }
        { this.state.courseIDs ? <p><h4>Courses:</h4><ol>{this.state.courseIDs.map(item => <li>{item.title}</li>)}</ol></p>:<p></p> }
        { this.state.applicants ? <p><h4>Applicants:</h4><ol>{this.state.applicants.map(item => <li>{item.name}</li>)}</ol></p>:<p></p> }
        
        
      </div>

);
  }
}

export default MasterclassProfile;
