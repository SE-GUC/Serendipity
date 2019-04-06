import React, { Component } from 'react';
import EduOrgs from './components/EduOrgs';
import './App.css';
import axios from 'axios';
import EduOrgApp from './EduOrgApp';

class App extends Component {

  render(){
    return(
      <div className = 'App'>
      <EduOrgApp/>
      </div>

    )}
  }
export default App;
