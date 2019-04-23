
import React, { Component } from 'react';
//import logo from './logo.svg';
import Workshops from './components/Workshops'
import './App.css';
import Axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

class WorkshopApp extends Component {
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
// Choose = (id)=>{
//   this.setState( 
//     { workshop : this.state.workshop.map( current => {
//        if(current._id===id ) {
//          if(clicked===false){
//            clicked==true;
//             var s=''
//             current.choice=!current.choice
//           current.title=s
//            for (var key in current) {
//              if (current.hasOwnProperty(key)) {
//                s+=(key + " : " + current[key]);
               
//              }
//          }

//          }
//          else{
//            clicked==false;
//          }
         
//        }
//        return current
//     }) })
//  }
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

delWorkshops =(_id) => {
  Axios.delete(`http://localhost:5000/api/workshops/${_id}`)
  window.location.reload()
  console.log(_id)
}
updateWorkshops =(_id) => {
  this.props.history.push(`workshop/updateWorkshop/${_id}`);
  console.log(_id)
}
applyWorkshop=(_id) => {
  var schema = {};
  schema["applicantId"] = '5c9cd4a3a5322632a423cf4a'
  Axios.put(`http://localhost:5000/api/workshops/${_id}/apply/`,schema)
  console.log(_id+"mayar")
}
onClick=() =>{
  this.props.history.push("/workshop/createWorkshop")
}

render(){
  return this.state.error?<h1>process couldnot be complete</h1>:this.state.loading?
  <h1>loading please be patient</h1>
  :
  (<div className='WorkshopApp'>

  <h2 style={this.getStyleWork()}>WORKSHOPS</h2>
  <p><button  onClick={this.onClick} style={btnStyle1}>create workshop</button></p>

  <Workshops workshop={this.state.workshop} delWorkshops={this.delWorkshops} updateWorkshops={this.updateWorkshops} applyWorkshop={this.applyWorkshop} />

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

export default WorkshopApp;

