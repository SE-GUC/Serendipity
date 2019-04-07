import React, { Component } from 'react';
import EduOrgs from './components/EduOrgs';
import './App.css';
import axios from 'axios';
import EduOrgApp from './EduOrgApp';
import EduOrg from './EduOrg';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {

  render(){
    return(
      <Router>

      <div className = 'App'>
      {/* <EduOrgApp/> */}
      <Route exact path = "/eduorg" component = {EduOrgApp}/> {/*Educational Organizations */}
      <Route exact path = "/masterclass" component = {EduOrg}/>{/*MaterClasses */}
      
      </div>

      </Router>

    )}
  }
export default App;
