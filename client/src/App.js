

import Jobapp from '../src/components/Jobapp';
import './App.css';
import WorkshopApp from '../src/WorkshopApp';
import EduOrgApp from './EduOrgApp';
import MemberApp from './MemberApp';
import EduOrg from './EduOrg';
import PartnerProfile from '../src/components/PartnerProfile';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import AdminApp from './components/AdminApp';
import Footer from './components/layout/Footer';
import axios from 'axios';
import React, { Component } from 'react';



class App extends Component {
  state={
    jobapp:[],
    admin:[]
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
      <Route exact path = "/admin" component = {AdminApp}/>
      
      <Footer/>
      </div>

      </Router>

    )}
  }
export default App;

