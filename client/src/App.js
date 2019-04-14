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
import Jobmain from './Jobmain';
import UpdateJobs from './components/UpdateJobs';
import MClasses from './MClasses';
import JobsSearch from './JobsSearch';
import PartnerApp from './components/PartnerApp';
import Register from './components/pages/Register';
import Partners from '../src/components/Partners'
import PartnerDelete from '../src/components/PartnerDelete'
import GetAllPartners from './components/getAllPartners';
import PartnerUpdate from '../src/components/PartnerUpdate'

import UpdForm from './components/UpdForm';
import CreateForm from './components/CreateForm';
import createWorkshop from './components/createWorkshop';
import updateWorkshop from './components/updateWorkshop';

class App extends Component {
  state={
    masterclass:[],
    jobapp:[],
    admin:[]
      }
  render(){
    return(
     


      <Router>

      <div id="page-container" className = 'App'>
      <Header/> 
            
      <Route exact path = "/eduorg" component = {EduOrgApp}/> {/*Educational Organizations*/}
      <Route exact path = "/masterclass" component = {MClasses}/>{/*MaterClasses */}
      <Route exact path = "/workshop" component = {WorkshopApp}/> {/*workshop */}
      <Route exact path = "/workshop/createworkshop" component = {createWorkshop}/> {/*create workshop */}
      <Route exact path = "/workshop/updateworkshop/:id" component = {updateWorkshop}/> {/*create workshop */}
      <Route exact path = "/member" component = {MemberApp}/> 
      <Route exact path = "/partner" component = {PartnerProfile}/> {/*PartnerProfile */}
      <Route exact path = "/job" component = {Jobmain}/> 
      <Route exact path = "/admin" component = {AdminApp}/>  {/* should be hidden to normal Viewers*/ }
      <Route exact path ="/course"component = {CourseApp}/> 
      <Route exact path = "/about" component = {About}/> 
      <Route exact path = "/job/Jobapp" component = {Jobapp}/> {/*create job */}
      <Route exact path = "/job/updateJobs/:id" component = {UpdateJobs}/> {/*update job */}
      {/* <Footer/> */}
      <Route exact path = "/partner/profile" component = {PartnerProfile}/> {/*PartnerProfile */}
      {/* <Route exact path = "/job" component = {Jobapp}/>  */}
      <Route exact path = "/admin" component = {AdminApp}/>  {/* should be hidden to normal Viewers*/ }
      <Route exact path ="/course"component = {CourseApp}/> 
      <Route exact path = "/about" component = {About}/> 
      <Route exact path = "/searchJobs" component = {JobsSearch}/> 
      <Route exact path = "/register" component = {Register}/> 
      <Route exact path = "/register/partner" component = {PartnerApp}/> 
      <Route exact path = "/partner" component = {Partners}/> 
      <Route exact path = "/partner/delete" component = {PartnerDelete}/> 
      <Route exact path = "/partner/view" component = {GetAllPartners}/> 
      <Route exact path = "/partner/update" component = {PartnerUpdate}/> 


      <Route path = "/updateCourse/:id" component = {UpdForm}/> 
      <Route path = "/createCourse" component = {CreateForm}/> 
      <Footer/>
      </div>

      </Router>

    )}
  }
export default App;

