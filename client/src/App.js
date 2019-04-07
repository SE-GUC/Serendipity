import React, { Component } from 'react';
import Jobapp from '../src/components/Jobapp';
import './App.css';
//import axios from 'axios';
class App extends Component {
  state={
jobapp:[]
  }
      
  render() {
    // <Jobapp jobapp ={this.state.jobapp} />
    
    return (
  
      <div className="jobapp">
         <h1> Job Application </h1>
         <Jobapp  />
      
      
    
        
         </div>
    );
  }
}

export default App;
