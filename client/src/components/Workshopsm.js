import React, { Component } from 'react';
import WorkshopItems from './workshopItems'
import '../App.css'
class Workshopsm extends Component{
    render(){
        return this.props.workshop.map((current)=> <WorkshopItems key={current._id} current={current} Choose={this.props.Choose}  applyWorkshop={this.props.applyWorkshop} />)
        
        }
    }
    const btnStyle={
        background:'#f4f4f4f4',
        color:'#000'
      }
    export default Workshopsm 
    
