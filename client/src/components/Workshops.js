import React, { Component } from 'react';
import WorkshopsItem from './WorkshopsItem'
import '../App.css'
class Workshops extends Component{
    render(){
        return this.props.workshop.map((current)=> <WorkshopsItem key={current._id} current={current} Choose={this.props.Choose} />)
        }
    }

    export default Workshops 
    
