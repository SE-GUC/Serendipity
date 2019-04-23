import React, { Component } from 'react';
import axios from 'axios';

class PartnerApp extends Component {
 
    state={
      name:'',
      email:'',
      password:'',
     
    }
    addPartner=(name,email,password)=>{
    
      axios.post("http://localhost:5000/api/partners/",{
        name:name,email:email,password:password
      }
     
      ).then(res => { alert('Account created successfully!') 
        window.location.href='/register/wait';
        this.setState({partner:[...this.state.PartnerApp,res.data]})
       
      })
      
    
      .catch(e=> "error")
     // alert('Account created successfully!')
    }
      
     
     onSubmit=(e)=>{
       e.preventDefault();
       if(!this.state.name){
         alert('Name cannot be empty')
       }
        else if (!this.state.password || this.state.password.length<8)
        alert('Password cannot be empty or less than 8 characters')
        else if (!this.state.email)
        alert('Email cannot be empty')
        else
        this.addPartner(this.state.name,this.state.email,this.state.password);
      }
    
   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  render() {
    
    return (
      <div >
      <form onSubmit={this.onSubmit}>
      <label>
        Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input
            name="email"
            type="email"
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
        
        <input 
          type="submit" 
          value="Submit" 
        />
         </form>
        
         </div>
    );
  }
}

export default PartnerApp;
