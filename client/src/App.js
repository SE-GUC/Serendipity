import React, { Component } from 'react';
import AdminApp from './components/AdminApp';
import './App.css';
import axios from 'axios';
class App extends Component {
  state={
admin:[]
  }
      
  render() {
 
    return (
  
      <div className="App">
         <h1> Admin sign up </h1>
         <AdminApp  />
      
      
    
        
         </div>
    );
  }
}

export default App;

