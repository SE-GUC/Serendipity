import React, { Component } from 'react';
import viewWorkshopEduOrgItem from './viewWorkshopEduOrgItem'
import WorkshopsItem from './WorkshopsItem'

import '../App.css'
class viewWorkshopsEduOrg extends Component{
    render(){
        return this.props.workshop.map((current)=>
         <WorkshopsItem key={current._id} current={current} />)

        
        }
    }
    
    export default viewWorkshopsEduOrg 
    
