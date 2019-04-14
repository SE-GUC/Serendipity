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
import CourseApp from './components/Form';
// import Login from './components/pages/LoginPage';
//////trail yan pending
// import { Provider } from 'react-redux'; //yan
// import store from '../src/globalState/store'; //yan
import Login2 from './components/pages/Login';//trial yan
import 'bootstrap/dist/css/bootstrap.min.css'; //trial yan
import Navbar from './components/layout/Navbar';//trial yan
import store from '../src/globalState/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './helpers/setAuthToken';
import EduOrgAppCreate from './EduOrgAppCreate';
import EduOrgAppUpdate from './EduOrgAppUpdate';
import EduOrgAppDelete from './EduOrgAppDelete';
import EduOrgProfile from './components/EduOrgProfile';
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
import { setCurrentUser, logoutUser } from '../src/globalState/actions/authentication';
if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}
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
      <Navbar/>
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
  {/* should be hidden to normal Viewers*/ }
      
      <Route exact path = "/login" component = {Login2}/> 
      <Route exact path = "/eduorg/create" component = {EduOrgAppCreate}/>
      <Route exact path = "/eduorg/update/:id" component = {EduOrgAppUpdate}/> 
      <Route exact path = "/eduorg/delete/:id" component = {EduOrgAppDelete}/> 
      <Route exact path = "/eduorg/myaccount" component = {EduOrgProfile}/> 

      
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

