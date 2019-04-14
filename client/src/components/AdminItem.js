import React, { Component } from 'react';
//import PropTypes from 'prop-types';


class AdminItem extends Component {
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
      const {_id,username,password,email,full_name} = this.props.admin
    return(
        <div style={this.getStyle()}>
     
            {/* <p>Name: {full_name}</p>
            <p>Email: {email}</p> */}
            <p>Username: {username}</p>
            <button onClick={this.props.deleteadmin.bind(this, _id)}>Delete Admin</button>
            <button onClick={this.props.updateadmin.bind(this, _id)}>Update Admin(*you will go to form automatically*)</button>
            <button onClick={this.props.showadmin.bind(this, _id)}>Show Profile</button>
        
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
export default AdminItem;
