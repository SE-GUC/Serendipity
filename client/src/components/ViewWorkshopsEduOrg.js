import React, { Component } from 'react';
import ViewWorkshopEduOrgItem from './ViewWorkshopEduOrgItem'
import '../App.css'
class ViewWorkshopsEduOrg extends Component{
    render(){
        return this.props.workshop.map((current)=> 
        <ViewWorkshopEduOrgItem key={current._id} current={current}
         Choose={this.props.Choose} 
         delWorkshops={this.props.delWorkshops} updateWorkshops={this.props.updateWorkshops} />)
        
        }
    }
    const btnStyle={
        background:'#f4f4f4f4',
        color:'#000'
      }
    export default ViewWorkshopsEduOrg 
    
