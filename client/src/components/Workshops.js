import React, { Component } from 'react';
import WorkshopsItem from './WorkshopsItem'
import '../App.css'
class Workshops extends Component{
    render(){
        return this.props.workshop.map((current)=> 
        <WorkshopsItem key={current._id} current={current}
         Choose={this.props.Choose} 
         delWorkshops={this.props.delWorkshops} updateWorkshops={this.props.updateWorkshops} />)
        
        }
    }
    const btnStyle={
        background:'#f4f4f4f4',
        color:'#000'
      }
    export default Workshops 
    
