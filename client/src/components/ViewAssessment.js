import React, { Component } from 'react';
import PartnerItem, { AssessmentsItem } from './AssessmentsItem'
import '../App.css'
class ViewAssessment extends Component{
    render(){
        return this.props.partner.map((current)=> <AssessmentsItem key={current._id} current={current} Choose={this.props.Choose} />)
        }
    }

    export default ViewAssessment 
    
