import React, { Component } from 'react';
import EduOrg from './EduOrg';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import MasterclassCreate from './components/MasterclassCreate';
import MasterclassUpdate from './components/MasterclassUpdate';
import MasterclassProfile from './components/MasterclassProfile';
import UpdateMasterclass from './components/UpdateMasterclass';

import {Link} from 'react-router-dom';


class MClasses extends Component {
  state={
    jobapp:[],
    masterclass:[]
      }
  render(){
    return(
      <Router>
        
      <div id="page-container" className = 'App'>
      <div>
      <Link  to="/getMasterclass">get All</Link>{' '}|{' '}
      <Link  to="/createMasterclass">create</Link>{' '}|{' '}
      <Link  to="/updateMasterclass">update</Link>{' '}|{' '}
      <Link  to="/getMasterclassby">get by id</Link>{' '}|{' '}
         </div>
      <Route exact path = "/getMasterclass" component = {EduOrg}/>{/*get MaterClasses */}
      <Route exact path = "/createMasterclass" component = {MasterclassCreate}/>{/*create MaterClasses */}
      <Route exact path = "/updateMasterclass" component = {MasterclassUpdate}/>{/*update MaterClasses */} 
      <Route exact path = "/getMasterclassby" component = {MasterclassProfile}/> 
      <Route exact path = "/getMasterclass/update/:id" component = {UpdateMasterclass}/>
  
      </div>

      </Router>

    )}
  }
export default MClasses;

