
import React, { Component } from 'react';
//import ViewAssessment from './ViewAssessment'
//import '../App.css';
import Axios from 'axios';
import ViewAssessment from './components/ViewAssessment';


class getAllAssessments extends Component {
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
render(){
  return this.state.error?<h1> This request could not be complete</h1>:this.state.loading?
  <h1>Loading... Please, be patient</h1>
  :
  (<div className='getAllAssessments'>
  <h2 style={this.getStyleWork()}> Assessments </h2>
  <ViewAssessment assessment={this.state.assessment}  />
  </div>
  )
}
ERROR=(error)=>{
  console.log(error)
  this.setState({error:true})
}
}

export default getAllAssessments;