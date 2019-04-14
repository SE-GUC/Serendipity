import React, { Component } from 'react';
//import logo from './logo.svg';
import EduOrg from './client'
import './App.css';
import axios from 'axios';
import MemberProfile from './components/MemberProfile';


class MemberApp extends Component {
    render(){
        return(
            <div className="App">
             <MemberProfile/>
            </div>
        );
    }
}
export default MemberApp;
