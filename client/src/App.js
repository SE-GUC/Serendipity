import React, { Component } from 'react';
import Jobapp from '../src/components/Jobapp';
import './App.css';
import WorkshopApp from '../src/WorkshopApp';
import EduOrgApp from './EduOrgApp';
import MemberApp from './MemberApp';
import EduOrg from './EduOrg';
import PartnerProfile from '../src/components/PartnerProfile';
import {BrowserRouter as Router,Route} from 'react-router-dom';




class App extends Component {
  state={
    jobapp:[]
      }
  render(){
    return(
      <Router>

      <div className = 'App'>      
      <Route exact path = "/eduorg" component = {EduOrgApp}/> {/*Educational Organizations */}
      <Route exact path = "/masterclass" component = {EduOrg}/>{/*MaterClasses */}
      <Route exact path = "/workshop" component = {WorkshopApp}/> {/*workshop */}
      <Route exact path = "/member" component = {MemberApp}/> 
      <Route exact path = "/partner" component = {PartnerProfile}/> {/*PartnerProfile */}
      <Route exact path = "/job" component = {Jobapp}/> 
      </div>

      </Router>

    )}
  }
export default App;
