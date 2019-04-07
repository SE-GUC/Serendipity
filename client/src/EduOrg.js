import React, { Component } from 'react';
//import logo from './logo.svg';
import Masterclasses from './components/Masterclasses'
import './App.css';
import Axios from 'axios';

class EduOrg extends Component {
constructor(props){
  super(props)
  this.state={
    masterclasses:[],
    error:false,
    loading:true
  }
}
Choose = (id)=>{
  this.setState( 
    { masterclasses : this.state.masterclasses.map( current => {
       if(current._id===id) {
         var s=''
         current.choice=!current.choice
         for (var key in current) {
           if (current.hasOwnProperty(key)) {
              s+=(key + " : " + current[key]);
             
           }
       }
       current.title=s
      
       }
       return current
    }) })
 }
 delMasterclass= (id)=> {
  this.setState( 
    { masterclasses:[...this.state.masterclasses.filter((current)=>current._id!==id)]
    })
}
componentDidMount() {
  Axios
  .get('http://localhost:5000/api/masterclasses')
  .then(res=> this.setState({masterclasses:res.data.data,loading:false}))
  .catch(error=> this.ERROR.bind(error))
}
render(){
  return this.state.error?<h1>process couldnot be complete</h1>:this.state.loading?
  <h1>loading please be patient</h1>
  :
  (<div className='App'>
  <h1>MasterClasses</h1>
  <Masterclasses masterclasses={this.state.masterclasses} Choose={this.Choose} delMasterclass={this.delMasterclass}/>
  </div>
  )
}
ERROR=(error)=>{
  console.log(error)
  this.setState({error:true})
}
}

export default EduOrg;
