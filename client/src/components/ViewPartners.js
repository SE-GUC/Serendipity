import React, { Component } from 'react';
import PartnerItem from './PartnerItem'
import '../App.css'
class ViewPartners extends Component{
    render(){
        return this.props.partner.map((current)=> <PartnerItem key={current._id} current={current} Choose={this.props.Choose} />)
        }
    }

    export default ViewPartners 
    
