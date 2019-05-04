import React, { Component } from 'react';
import ViewMasterclassEduOrgItem from './ViewMasterclassEduOrgItem'
import '../App.css'
class ViewMasterclassesEduOrg extends Component{
    render(){
        return this.props.workshop.map((current)=> 
        <ViewMasterclassEduOrgItem key={current._id} current={current}
         Choose={this.props.Choose} 
         delWorkshops={this.props.delWorkshops} updateWorkshops={this.props.updateWorkshops} />)
        
        }
    }
    export default ViewMasterclassesEduOrg 
    
