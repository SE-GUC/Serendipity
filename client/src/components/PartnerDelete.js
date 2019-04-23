import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PartnerDelete extends Component {
 
    state={
            id: null,     
    }
    deletePartner=(id)=>{
      axios.delete(`http://localhost:5000/api/partners/${id}`)
      alert('Account deleted successfully')
    }    

    onSubmit=(e)=>{
        e.preventDefault();
         this.deletePartner(this.state.id);
       }
       onChange=(e)=>this.setState({[e.target.name]:e.target.value});

  render() {


    const {user} = this.props.auth;
    this.state.id={user}.user.id;


    return (
      <div >
      <form onSubmit={this.onSubmit}>
      {/* <label>
        id: *this will be removed later and will use the id of the signed-in partner
          <input
            name="id"
            type="text"
            value={this.state.id}
            onChange={this.onChange} 
            />
        </label> */}
        <br />
        <br />
        <h2>Are you sure you want to delete your account?</h2>
        <input 
          type="submit" 
          value="Yes" 
        style={{width:"200px"}}
        />
        
         </form>
         </div>
    );
  }
}


PartnerDelete.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(withRouter(PartnerDelete));

