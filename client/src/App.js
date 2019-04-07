
////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//import logo from './logo.svg';
//import Workshops from './component/Workshops'
import './App.css';
//import Axios from 'axios';
import WorkshopApp from '../src/WorkshopApp';
import EduOrgs from './components/EduOrgs';
import './App.css';
import axios from 'axios';
import EduOrgApp from './EduOrgApp';
import EduOrg from './EduOrg';
import PartnerProfile from '../src/components/PartnerProfile';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {

  render(){
    return(
      <Router>

      <div className = 'App'>
      {/* <EduOrgApp/> */}
      <Route exact path = "/eduorg" component = {EduOrgApp}/> {/*Educational Organizations */}
      <Route exact path = "/masterclass" component = {EduOrg}/>{/*MaterClasses */}
      <Route exact path = "/workshop" component = {WorkshopApp}/> {/*workshop */}
      <Route exact path = "/partner" component = {PartnerProfile}/> {/*PartnerProfile */}

      </div>

      </Router>

    )}
  }
export default App;
