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
//import Register from './components/pages/Register';
import AdminApp from './components/AdminApp';
import Footer from './components/layout/Footer';
import CourseApp from './components/Form';
// import Login from './components/pages/LoginPage';
//////trail yan pending
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
import Search from './Search';
import JobsSearch from './JobsSearch';
import PartnerApp from './components/PartnerApp';
import Register from './components/pages/Register';
import Partners from '../src/components/Partners'
import PartnerDelete from '../src/components/PartnerDelete'
import GetAllPartners from './components/getAllPartners';
import PartnerUpdate from '../src/components/PartnerUpdate'
import RegisterAll from '../src/components/pages/RegisterAll';
import UpdForm from './components/UpdForm';
import CreateForm from './components/CreateForm';
import CourseOver from './components/CourseOver';
import createWorkshop from './components/createWorkshop';
import updateWorkshop from './components/updateWorkshop';
import Allmembers from './components/allmembers';
import AdminCreate from './components/AdminCreate';
import PendingJobs from './components/PendingJobs';
import { setCurrentUser, logoutUser } from '../src/globalState/actions/authentication';
import AllExperts from './components/AllExperts';
import MemberProfile from './components/MemberProfile';
import PendingPartnersForm from './components/PendingPartnersForm';
import PendingMembersForm from './components/PendingMembersForm';
import PendingEduOrgsForm from './components/PendingEduOrgsForm';
import PendingAdminsForm from './components/PendingAdminsForm';
import RegWaitmail from './components/pages/MailWait';
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
    // const {isAuthenticated, user} = this.props.auth;
    // console.log({})
    return(
     


      <Router>

      <div id="page-container" className = 'App'>
      <Navbar/>
      <Header/> 
      {/* {isAuthenticated ? authLinks : guestLinks} */}
      <Route exact path = "/eduorg" component = {EduOrgApp}/> {/*Educational Organizations*/}
      <Route exact path = "/masterclass" component = {MClasses}/>{/*MaterClasses */}
      <Route exact path = "/workshop" component = {WorkshopApp}/> {/*workshop */}
      <Route exact path = "/workshop/createworkshop" component = {createWorkshop}/> {/*create workshop */}
      <Route exact path = "/workshop/updateworkshop/:id" component = {updateWorkshop}/> {/*create workshop */}
      <Route exact path = "/member" component = {MemberApp}/> 
      {/* <Route exact path = "/partner" component = {PartnerProfile}/> PartnerProfile */}
      <Route exact path = "/job" component = {Jobmain}/> 
      <Route exact path = "/admin" component = {AdminApp}/> 
      <Route exact path = "/admin/register" component = {AdminCreate}/> {/* should be hidden to normal Viewers*/ }
      <Route exact path = "/admin/pendingjobs" component = {PendingJobs}/>
      <Route exact path = "/admin/pendingpartners" component = {PendingPartnersForm}/>
      <Route exact path = "/admin/pendingmembers" component = {PendingMembersForm}/>
      <Route exact path = "/admin/pendingeduorgs" component = {PendingEduOrgsForm}/>
      <Route exact path = "/admin/pendingadmins" component = {PendingAdminsForm}/>

      <Route exact path ="/course"component = {CourseApp}/> 
      <Route exact path = "/about" component = {About}/> 
      <Route exact path = "/allmembers" component = {Allmembers}/>
      <Route exact path = "/memberprofile" component = {MemberProfile}/>
      <Route exact path = "/AllExperts" component = {AllExperts}/>

      <Route exact path = "/registerall" component = {RegisterAll}/> {/* register all yan */}
      {/* <Route exact path = "/register" component = {Register}/>  */}


   
      <Route exact path = "/job/Jobapp" component = {Jobapp}/> {/*create job */}
      <Route exact path = "/job/updateJobs/:id" component = {UpdateJobs}/> {/*update job */}
      {/* <Footer/> */}
      <Route exact path = "/partner/profile" component = {PartnerProfile}/> 
      {/* PartnerProfile */}
      {/* <Route exact path = "/job" component = {Jobapp}/>  */}
  {/* should be hidden to normal Viewers*/ }
      
      <Route exact path = "/login" component = {Login2}/> 
      <Route exact path = "/eduorg/create" component = {EduOrgAppCreate}/>
      <Route exact path = "/eduorg/update/:id" component = {EduOrgAppUpdate}/> 
      <Route exact path = "/eduorg/delete/:id" component = {EduOrgAppDelete}/> 
      <Route exact path = "/eduorg/myaccount" component = {EduOrgProfile}/> 

      
      <Route exact path = "/search" component = {Search}/> 
      <Route exact path = "/register" component = {Register}/>  {/* member */}
      <Route exact path = "/searchJobs" component = {JobsSearch}/> 
      <Route exact path = "/register/member" component = {Register}/>  {/* member */}
      <Route exact  path = "/register/partner" component = {PartnerApp}/>  {/* partner */}
      <Route exact path = "/partner" component = {Partners}/> 
      <Route exact path = "/partner/delete" component = {PartnerDelete}/> 
      <Route exact path = "/partner/view" component = {GetAllPartners}/> 
      <Route exact path = "/partner/update" component = {PartnerUpdate}/> 
      <Route exact path = "/register/wait" component = {RegWaitmail}/> 

      <Route path = "/updateCourse/:id" component = {UpdForm}/> 
      <Route path = "/createCourse" component = {CreateForm}/> 

      <Route exact path = "/courseOver" component = {CourseOver}/> 

      {/* <Footer/> hides some functionalities wont stick to bottom of page */}
      </div>

      </Router>
     

    )}
  }
export default App;

