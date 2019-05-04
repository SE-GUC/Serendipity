import React, { Component } from 'react';
import MasterclassItemEO from './MasterclassItemEO'

import '../App.css'
class MasterclassesEO extends Component{
    render(){
        //return this.props.masterclasses.map((current)=> <MasterclassItem key={current._id} current={current}  delMasterclass={this.props.delMasterclass}/>)
        return this.props.masterclasses.map((current)=> <MasterclassItemEO key={current._id} current={current} Choose={this.props.Choose} delMasterclass={this.props.delMasterclass}
        updateMasterclasses={this.props.updateMasterclasses} />)
        }
    

    }

    export default MasterclassesEO