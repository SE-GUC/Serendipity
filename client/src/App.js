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
import Login from './components/pages/LoginPage';
//////trail yan pending
// import { Provider } from 'react-redux'; //yan
// import store from '../src/globalState/store'; //yan
import Login2 from './components/pages/Login';//trial yan
import 'bootstrap/dist/css/bootstrap.min.css'; //trial yan
import Navbar from './components/layout/Navbar';//trial yan
import store from '../src/globalState/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './helpers/setAuthToken';
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
    jobapp:[],
    admin:[]
      }
  render(){
    return(
      
      <Router>

      <div id="page-container" className = 'App'>
      <Navbar/>
      <Header/> 
            
      <Route exact path = "/eduorg" component = {EduOrgApp}/> {/*Educational Organizations */}
      <Route exact path = "/masterclass" component = {EduOrg}/>{/*MaterClasses */}
      <Route exact path = "/workshop" component = {WorkshopApp}/> {/*workshop */}
      <Route exact path = "/member" component = {MemberApp}/> 
      <Route exact path = "/partner" component = {PartnerProfile}/> {/*PartnerProfile */}
      <Route exact path = "/job" component = {Jobapp}/> 
      <Route exact path = "/admin" component = {AdminApp}/>  {/* should be hidden to normal Viewers*/ }
      <Route exact path ="/course"component = {CourseApp}/> 
      <Route exact path = "/about" component = {About}/> 
      <Route exact path = "/login" component = {Login}/> 
      <Route exact path = "/loginp" component = {Login2}/> 
      <Footer/>
      </div>

      </Router>
     

    )}
  }
export default App;

