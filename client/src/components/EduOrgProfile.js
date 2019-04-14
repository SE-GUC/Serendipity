import React, { Component } from 'react';
import EduOrgForm from './EduOrgForm';
import axios from "axios"
import {Link} from 'react-router-dom';

//import { Router, Route, Link } from 'react-router'

class EduOrgProfile extends Component {
  btnStyle= () => {
    return{
        background:'#333',
        padding: '5px',
        margin: '10px',
        align: 'center',
        float: 'center',
        textAlign: 'center',
        borderRadius: '10px',
        color:'#fff',
        width: '130px',
        height: '50px'
    
  }


}
  state = {
    id: null,
    userName: null,
    name: null,
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
  onDelete=() =>{
    //<Link  to={`/eduorg/delete/${this.state.id}`}>Delete my account</Link>{'       |      '}
    this.props.history.push(`/eduorg/delete/${this.state.id}`);

  }
  getEduOrg = (e) => {
    e.preventDefault();
    const edu = e.target.elements.id.value;
   
    if(edu){
    axios.get(`http://localhost:5000/api/educationalOrganizations/${edu}`).then((res) =>{

      const id = edu;
      const userName = res.data.userName;
      const name = res.data.name;
      const email = res.data.email;
      const masterClasses = res.data.masterClasses;
      const courses = res.data.courses;
      const workshops = res.data.workshops;
      const trainers = res.data.trainers;
      const educators = res.data.educators;
      const trainingPrograms = res.data.trainingPrograms;
      const description = res.data.description;
      const contract = res.data.contract;
      const expirationDate = res.data.expirationDate;

      this.setState({id})
      this.setState({userName})
      this.setState({name})
      this.setState({email})
      this.setState({masterClasses})
      this.setState({courses})
      this.setState({workshops})
      this.setState({trainers})
      this.setState({educators})
      this.setState({trainingPrograms})
      this.setState({description})
      this.setState({contract})
      this.setState({expirationDate})


    })
  } else return;
  }
  
  render() {
    return (
      <div>
        <EduOrgForm getEduOrg={this.getEduOrg}/>
        <center>
        { this.state.userName ? <p><h4>User Name:</h4> {this.state.userName}</p>:<p></p>}
        { this.state.name ? <p><h4>Name:</h4> {this.state.name}</p>:<p></p>}
        { this.state.email ? <p><h4>Email:</h4> {this.state.email}</p>:<p></p>}
        { this.state.masterClasses ? <p><h4>Master Classes:</h4><ol>{this.state.masterClasses.map(item => <li>{item}</li>)}</ol></p>:<p></p> }
        { this.state.courses ? <p><h4>Courses:</h4><ol>{this.state.courses.map(item => <li>{item}</li>)}</ol></p>:<p></p> }
        { this.state.workshops ? <p><h4>Workshops:</h4><ol>{this.state.workshops.map(item => <li>{item}</li>)}</ol></p>:<p></p> }
        { this.state.trainers ? <p><h4>Trainers:</h4><ol>{this.state.trainers.map(item => <li>{item}</li>)}</ol></p>:<p></p> }
        { this.state.educators ? <p><h4>Educators:</h4><ol>{this.state.educators.map(item => <li>{item}</li>)}</ol></p>:<p></p> }
        { this.state.trainingPrograms ? <p><h4>Training Programs:</h4><ol>{this.state.trainingPrograms.map(item => <li>{item}</li>)}</ol></p>:<p></p> }
        { this.state.description ? <p><h4>Description:</h4> {this.state.description}</p>:<p></p>}
        { this.state.contract ? <p><h4>Contract:</h4> {this.state.contract}</p>:<p></p>}
        { this.state.expirationDate ? <p><h4>Expiration Date:</h4> {this.state.expirationDate}</p>:<p></p>}
        </center>
   
        <button style ={this.btnStyle()}onClick={this.onDelete} > delete my account</button>
        <br></br>
        {/* <Link  to={`/eduorg/delete/${this.state.id}`}>Delete my account</Link>{'       |      '} */}
        <Link  to= {`/eduorg/update/${this.state.id}`}>Update my account</Link>{' '}


       
      </div>

);
  }
}

export default EduOrgProfile;
