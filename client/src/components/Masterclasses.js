import React, { Component } from 'react';
import MasterclassItem from './MasterclassItem'
import '../App.css'
class Masterclasses extends Component{
    render(){
        return this.props.masterclasses.map((current)=> <MasterclassItem key={current._id} current={current} Choose={this.props.Choose} delMasterclass={this.props.delMasterclass}/>)
        }
    }

    export default Masterclasses
    
