
import React, { Component } from 'react';
//import logo from './logo.svg';
import Workshops from './components/Workshops'
import './App.css';
import Axios from 'axios';

class WorkshopApp extends Component {
constructor(props){
  super(props)
  this.state={
    workshop:[],
    error:false,
    loading:true
  }
}
Choose = (id)=>{
  this.setState( 
    { workshop : this.state.workshop.map( current => {
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
//  delMasterclass= (id)=> {
//   this.setState( 
//     { workshop:[...this.state.workshop.filter((current)=>current._id!==id)]
//     })
// }
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
  (<div className='WorkshopApp'>
  <Workshops workshop={this.state.workshop} Choose={this.Choose} />
  </div>
  )
}
ERROR=(error)=>{
  console.log(error)
  this.setState({error:true})
}
}

export default WorkshopApp;

