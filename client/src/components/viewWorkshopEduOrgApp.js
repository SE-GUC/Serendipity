
import React, { Component } from 'react';
//import logo from './logo.svg';
import viewWorkhopsEduOrg from './viewWorkhopEduOrg'
import Workshops from './Woekshops'

import './App.css';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
//import viewWorkshopsEduOrgItem from './viewWorkshopEduOrgItem';

class viewWorkshopEduOrgApp extends Component {
  getStyleWork = () => {
    return {
      backgroundColor : '#000',
      color : '#f0f0f0'
    }
  
  }
  constructor(props){
  super(props)
  this.state={
    workshop:[],
    error:false,
    loading:true,
    clicked:false,//yara amr
  }
}

componentDidMount() {
  Axios
  .get('http://localhost:5000/api/workshops')
  .then(res=> this.setState({workshop:res.data.data,loading:false}))
  .catch(error=> this.ERROR.bind(error))
}

render(){
  return this.state.error?<h1>process couldnot be complete</h1>:this.state.loading?
  <h1>loading please be patient</h1>
  :
  (<div className='viewWorkshopEduOrgApp'>

  <h2 style={this.getStyleWork()}>WORKSHOPS</h2>
  <h2 style={this.getStyleWork()}>WORKSHOPSaa</h2>

  {/* <p><button  onClick={this.onClick} style={btnStyle1}>create workshop</button></p> */}

  <Workshops workshop={this.state.workshop}  />

  </div>
  )
}
ERROR=(error)=>{
  console.log(error)
  this.setState({error:true})
}
}
const btnStyle1={
  background:'grey',
  color:'black',
  fontSize: 20,
  borderColor: 'black',
  borderWidth: 3,
  padding:'5px 10px',
 
}
const btnStyle={
  background:'#f4f4f4f4',
  color:'#000'
}

export default viewWorkshopEduOrgApp;

