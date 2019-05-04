import React, { Component } from 'react';
import EduOrg from './EduOrg';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import MasterclassCreate from './components/MasterclassCreate';
import MasterclassUpdate from './components/MasterclassUpdate';
import MasterclassProfile from './components/MasterclassProfile';
import JobsSearch from './JobsSearch';
import WorkshopsSearch from './WorkshopsSearch';
import CoursesSearch from './CoursesSearch';
import MasterclassSearch from './MasterclassSearch';
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
         
           <Link  to="/searchJobs">search Jobs</Link>{' '}|{' '}
           <Link  to="/searchWorkshops">search Workshops</Link>{' '}|{' '}
           <Link  to="/searchCourses">search Courses</Link>{' '}|{' '}
           <Link  to="/searchMasterclasses">search Masterclasses</Link>{' '}|{' '}
         </div>
         <Route exact path = "/searchJobs" component = {JobsSearch}/> 
         <Route exact path = "/searchWorkshops" component = {WorkshopsSearch}/> 
         <Route exact path = "/searchCourses" component = {CoursesSearch}/> 
         <Route exact path = "/searchMasterclasses" component = {MasterclassSearch}/> 
      </div>

      </Router>

    )}
  }
export default MClasses;

