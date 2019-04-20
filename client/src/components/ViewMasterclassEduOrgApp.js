
import React, { Component } from 'react';
//import logo from './logo.svg';
import ViewMasterclassesEduOrg from './ViewMasterclassesEduOrg'
//import Workshops from './Woekshops'

//import './App.css';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
//import viewWorkshopsEduOrgItem from './viewWorkshopEduOrgItem';

class ViewMasterclassEduOrgApp extends Component {
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
  axios
  .get('http://localhost:5000/api/masterclasses')
  .then(res=> this.setState({workshop:res.data.data,loading:false}))
  .catch(error=> this.ERROR.bind(error))
}

render(){
  return this.state.error?<h1>process couldnot be complete</h1>:this.state.loading?
  <h1>loading please be patient</h1>
  :
  (<div className='ViewMasterclassEduOrgApp'>

  <h2 style={this.getStyleWork()}>Masterclasses</h2>
  {/* <h2 style={this.getStyleWork()}>WORKSHOPSaa</h2> */}

  {/* <p><button  onClick={this.onClick} style={btnStyle1}>create workshop</button></p> */}

  <ViewMasterclassesEduOrg workshop={this.state.workshop}  />

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

export default ViewMasterclassEduOrgApp;

