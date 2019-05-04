import React, { Component } from 'react';
//import logo from './logo.svg';
import Workshops from './components/Workshopsm'
import './App.css';
import Axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import { logoutUser } from '../globalState/actions/authentication';
import PropTypes from 'prop-types';


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
  // const { user} = this.props.auth;
  const mem =this.state.id;
  const tokenB= localStorage.getItem('jwtToken');
  var schema = {};
  schema["applicantId"] = mem
  Axios.put(`http://localhost:5000/api/workshops/${_id}/apply/`,schema)
  .then(res =>alert(res.data.err))
  console.log(_id+"mayar")
  
 
}
onClick=() =>{
  this.props.history.push("/workshop/createWorkshop")
}

render(){
  const {user} = this.props.auth;
  this.state.id={user}.user.id;
  return this.state.error?<h1>process couldnot be complete</h1>:this.state.loading?
  <h1>loading please be patient</h1>
  :
  (<div className='WorkshopApp'>

  <h2 style={this.getStyleWork()}>WORKSHOPS</h2>
  <p><button  onClick={this.onClick} style={btnStyle1}>create workshop</button></p>

  <Workshops workshop={this.state.workshop} applyWorkshop={this.applyWorkshop} />

  </div>
  )
}
ERROR=(error)=>{
  console.log(error)
  this.setState({error:true})
}
}
WorkshopApp.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth
})
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

//export default WorkshopApp;
export default connect(mapStateToProps)(withRouter(WorkshopApp));

