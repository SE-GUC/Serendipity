import React, { Component } from 'react';
import AssessmentsItem from './AssessmentsItem'
import '../App.css'

class ViewAssessment extends Component{
    render(){
        return this.props.assessment.map((current)=> 
        <AssessmentsItem key={current._id} 
        current={current} Choose={this.props.Choose} 
        //deleteAssessment={this.props.deleteAssessment}
         assess={this.props.assess}/>)
        }
    }
    const btnStyle={
        background:'#f4f4f4f4',
        color:'#000'
      }
    export default ViewAssessment
     