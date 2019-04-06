import React, { Component } from 'react';
import axios from 'axios';
//import './';
//import Popup from 'reactjs-popup'
//import { useAlert } from 'react-alert'

class AdminApp extends Component {
 
    state={
      full_name:'',
      email:'',
      password:'',
      username:''
     
    }
    addadmin=(full_name,email,password,username)=>{
      axios.post("http://localhost:5000/api/admins/",{

        full_name:full_name,email:email,password:password,username:username
      }
     
      ).then(res => this.setState({admin:[...this.state.AdminApp,res.data]}))
      .catch(e=> alert('failed to create,please meet the validations'))
     
        // <Popup> 
        //   <div> 
        //     Admincouldn't be created, you did not meet validations, try again
        //   </div>
        // </Popup>


     // )
      
     } 
     onSubmit=(e)=>{
       e.preventDefault();
       this.addadmin(this.state.full_name,this.state.email,this.state.password,this.state.username);
     
   
      }
    
   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  render() {
    
    return (
      <div >
      <form onSubmit={this.onSubmit}>
      <label>
        Full Name:
          <input
            name="full_name"
            type="text"
            value={this.state.full_name}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            name="password"
            type="text"
            value={this.state.password}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
   
        {/* <button onClick={this.addjob.bind(this)} style={btnStyle}> Submit</button> */}
        <input 
          type="submit" 
          value="Submit" 
          //className="btn"
         // style={{flex: '1'}}
        />
         </form>
         </div>
    );
  }
}
const btnStyle={
background:'#000000',
color:'#fff'

}
export default AdminApp;
