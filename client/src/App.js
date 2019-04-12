import React, { Component } from 'react';
import Jobapp from '../src/components/Jobapp';
import './App.css';
import WorkshopApp from '../src/WorkshopApp';
import EduOrgApp from './EduOrgApp';
import MemberApp from './MemberApp';
import EduOrgs from './components/EduOrgs';
import EduOrg from './EduOrg';
import PartnerProfile from '../src/components/PartnerProfile';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AdminApp from './components/AdminApp';
import Footer from './components/layout/Footer';
import axios from 'axios';
import CourseApp from './components/Form';
import UpdForm from './components/UpdForm';
import CreateForm from './components/CreateForm';

class App extends Component {
  state={
    jobapp:[],
    admin:[]
      }
  render(){
    return(
      <Router>

      <div id="page-container" className = 'App'>
      <Header/> 
            
      <Route exact path = "/eduorg" component = {EduOrgApp}/> {/*Educational Organizations*/}
      <Route exact path = "/masterclass" component = {EduOrg}/>{/*MaterClasses */}
      <Route exact path = "/workshop" component = {WorkshopApp}/> {/*workshop */}
      <Route exact path = "/member" component = {MemberApp}/> 
      <Route exact path = "/partner" component = {PartnerProfile}/> {/*PartnerProfile */}
      <Route exact path = "/job" component = {Jobapp}/> 
      <Route exact path = "/admin" component = {AdminApp}/>  {/* should be hidden to normal Viewers*/ }
      <Route exact path ="/course"component = {CourseApp}/> 
      <Route exact path = "/about" component = {About}/> 
      <Route path = "/updateCourse/:id" component = {UpdForm}/> 
      <Route path = "/createCourse" component = {CreateForm}/> 
      <Footer/>
      </div>

      </Router>

    )}
  }
export default App;

