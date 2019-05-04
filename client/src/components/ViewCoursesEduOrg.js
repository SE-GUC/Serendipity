import React, { Component } from 'react';
import ViewCourseEduOrgItem from './ViewCourseEduOrgItem'
import '../App.css'
class ViewCouresEduOrg extends Component{
    render(){
        return this.props.workshop.map((current)=> 
        <ViewCourseEduOrgItem key={current._id} current={current}
         Choose={this.props.Choose} 
         delWorkshops={this.props.delWorkshops} updateWorkshops={this.props.updateWorkshops} />)
        
        }
    }
    const btnStyle={
        background:'#f4f4f4f4',
        color:'#000'
      }
    export default ViewCouresEduOrg 
    
