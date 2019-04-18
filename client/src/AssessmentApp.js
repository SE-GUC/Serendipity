
import React, { Component } from 'react';
import Assessments from './components/Assessments'
import './App.css';
import Axios from 'axios';

//import { withStyles } from '@material-ui/core/styles';

class AssessmentApp extends Component {
  getStyleWork = () => {
    return {
      backgroundColor : '#000',
      color : '#f0f0f0'
    }
  
  }
  constructor(props){
  super(props)
  this.state={
    assessment:[],
    error:false,
    loading:true,
    clicked:false,
  }
}

componentDidMount() {
  Axios
  .get('http://localhost:5000/api/assessments')
  .then(res=> this.setState({assessment:res.data.data,loading:false}))
  .catch(error=> this.ERROR.bind(error))
}

deleteAssessment =(_id) => {
  Axios.delete(`http://localhost:5000/api/assessments/${_id}`)
  window.location.reload()
  console.log(_id)
}
updateAssessments =(_id) => {
  this.props.history.push(`assessment/updateAssessment/${_id}`);
  console.log(_id)
}
onClick=() =>{
  this.props.history.push("/assessment/createAssessment")
}

render(){
  return this.state.error?<h1> The process could not be completed </h1>:this.state.loading?
  <h1> Loading, please be patient... </h1>
  :
  (<div className='AssessmentApp'>

  <h2 style={this.getStyleWork()}> Assessments </h2>
  {/* <p><button  onClick={this.onClick} style={btnStyle}> Create assessment</button></p> */}

 <Assessments assessment={this.state.assessment} deleteAssessment={this.deleteAssessment} updateAssessments={this.updateAssessments} />

  </div>
  )
}
ERROR=(error)=>{
  console.log(error)
  this.setState({error:true})
}
}
// const btnStyle1={
//   background:'grey',
//   color:'black',
//   fontSize: 20,
//   borderColor: 'black',
//   borderWidth: 3,
//   padding:'5px 10px',
 
// }
const btnStyle={
  background:'#f4f4f4f4',
  color:'#000'
}

export default AssessmentApp;

