import React, { Component } from 'react';
import EduOrgs from './components/EduOrgs';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EduOrgApp extends Component {
  getStyleEduOrg = () => {
    return {
      backgroundColor : '#000',
      color : '#f0f0f0'
    }
  
  }

  constructor(props){
    super(props)
    this.state={
      eduorgs:[],
      error:false,
      loading:true
    }
  }
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/educationalOrganizations/')
    .then(res=> this.setState({eduorgs:res.data.data,loading:false}))
    .catch(error=> this.ERROR.bind(error))
  }

  viewWorkshops =(_id) => {
   // axios.get(`http://localhost:5000/api/educationalOrganizations/w/${_id}`)
  //  window.location.reload()
    //var url = `http://localhost:3000/eduorg/view/workshops/${_id}`;
    this.props.history.push(`eduorg/view/workshops/${_id}`);
    //var url = `http://localhost:3000/salma/${_id}`;

    //window.location(url);
    //window.location.href = url;
    console.log(_id)
  }

  viewCourses =(_id) => {
   
     this.props.history.push(`eduorg/view/courses/${_id}`);
     
     console.log(_id)
   }

   viewMasterclasses =(_id) => {
   
    this.props.history.push(`eduorg/view/masterclasses/${_id}`);
    
    console.log(_id)
  }

  
  render() {
    return this.state.error?<h1>process couldnot be complete</h1>:this.state.loading?
  <h1>loading please be patient</h1>
  :(
      <div className="EduOrgApp">
        <h1 style = {this.getStyleEduOrg()}>Educational Organizations</h1>
        <br></br>
        <Link  to= {`/eduorg/myaccount`}>View my account</Link>{' '}
        <EduOrgs eduorgs = {this.state.eduorgs} viewWorkshops={this.viewWorkshops}
         viewCourses = {this.viewCourses} viewMasterclasses = {this.viewMasterclasses}/>
      </div>
    );
  }
  ERROR=(error)=>{
    console.log(error)
    this.setState({error:true})
  }
}

export default EduOrgApp;
