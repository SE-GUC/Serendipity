import React, { Component } from 'react';
//import PropTypes from 'prop-types';


class PendingPartnersItem extends Component {
  getStyle =() => {
      return{
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          //textDecoration: this.props.eduorg.flag?
          'line-through' : 'none'
      }
  }

  
  render() {
      const {_id,name,email,password,registered} = this.props.pendingpartner
    return(
        <div style={this.getStyle()}>
     
            {/* <p>Name: {full_name}</p>
            <p>Email: {email}</p> */}
            <p>Email: {email}</p>
            
            <p>Name: {name}</p>
           
            <button onClick={this.props.approvepartner.bind(this, _id)}>Approve</button>
            <button onClick={this.props.rejectpartner.bind(this, _id)}>Reject</button>
            
        
        </div>
    )
   
  }
}


const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right'
}
export default PendingPartnersItem;
