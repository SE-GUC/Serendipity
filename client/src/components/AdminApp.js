import React, { Component } from 'react';
import axios from 'axios';
import Admins from './Admins';
import {Link} from 'react-router-dom';


import {BrowserRouter as Router,Route} from 'react-router-dom';

//import './';
//import Popup from 'reactjs-popup'
//import { useAlert } from 'react-alert'

class AdminApp extends Component {
 
    state={
      _id:'',
      full_name:'',
      email:'',
      password:'',
      username:''
     
    }

    constructor(props){
      super(props)
      this.state={
        admins:[],
        error:false,
        loading:true,
        updatedadmin:null
      }
    }

    componentDidMount() {
      axios
      .get('http://localhost:5000/api/admins/')
      .then(res=> this.setState({admins:res.data.data,loading:false}))
      .catch(error=> this.ERROR.bind(error))
    }


    // getAdmin = (e) => {
    //   e.preventDefault();
    //   const admin = e.target.elements.id.value;
    //   if(admin){
    //   axios.get(`http://localhost:5000/api/admins/${admin}`).then((res) =>{
    //     const email = res.data.email;
    //     const username = res.data.username;
    //     const full_name = res.data.full_name
    //     const password = res.data.password
        
    //     this.setState({email})
    //     this.setState({full_name})
    //     this.setState({password})
    //     this.setState({username})
    
  
  
    //   })
    // } else return;
    // }


    getAdmins= async ()  => {
      
      return await axios.get("http://localhost:5000/api/admins/");
    
    }
    // addadmin=(full_name,email,password,username)=>{
    
    //   axios.post("http://localhost:5000/api/admins/",{

    //     full_name:full_name,email:email,password:password,username:username
    //   }
     
    //   ).then(res => {this.setState({admin:[...this.state.AdminApp,res.data]})})
      
    
    //   .catch(e=> "error")
    //   alert('Admin was created succesfully')
    //   window.location = '/admin';
    //  // <Redirect to="/HomePage" /> 


    //     // <Popup> 
    //     //   <div> 
    //     //     Admincouldn't be created, you did not meet validations, try again
    //     //   </div>
    //     // </Popup>


    //  // )
    // }
    showadmin = (id) => {
      window.location = `http://localhost:5000/api/admins/${id}`;
    }
    deleteadmin = (id) => {
      axios.delete(`http://localhost:5000/api/admins/${id}`)
        .then(res => this.setState({ admins: [...this.state.admins.filter(admin => admin._id !== id)] }));
        
    }


    updateadmin = (id) => {
      this.setState({updatedadmin:id})
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
   
    updateadminreal=(id,full_name,email,password,username)=>{
      axios.put(`http://localhost:5000/api/admins/${id}`,{

        full_name:full_name,email:email,password:password,username:username}
      
     
      ).then(res => {this.setState({admin:[...this.state.AdminApp,res.data]})})
      
    
      .catch(e=> "error")
      alert('Admin was updated succesfully')
      for(var i=0;i<2;i++){
      window.location = '/admin';}
    
      //window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);


    }
  

   

    
    onSubmitUpdate= async(e)=>{
      e.preventDefault();
      var f=true;
      if (this.state.password && this.state.password.length<8){
        f = false;
      alert('password cannot be less than 8 characters')
      }
      const adminsdb =  await this.getAdmins()
      for(var i=0;i<adminsdb.data.data.length;i++){
               
        if(this.state.email && adminsdb.data.data[i].email===this.state.email){
       alert('this email already exists or is your old email,please enter another one')
       f =false;
        }

       if(this.state.username && adminsdb.data.data[i].username===this.state.username){
       alert('this username already exists or your old username,please enter another one')
       f =false;
       }
      
    }
   
       if(f===true)
     
       this.updateadminreal(this.state.updatedadmin,this.state.full_name,this.state.email,this.state.password,this.state.username);
      

    }
      
     
    //  onSubmit= async(e)=>{
    //    e.preventDefault();
    //    var f=true;
  
    //    if(!this.state.full_name){
    //      f = false;
    //      alert('full name cannot be empty')
    //    }
    //    else if (!this.state.password || this.state.password.length<8){
    //      f= false;
    //   alert('password cannot be empty or less than 8 characters')
    //    }
    //   else if (!this.state.username){
    //     f = false;
    //   alert('username cannot be empty')
    //   }
    //   else if (!this.state.email){
    //     f = false;
    //   alert('email cannot be empty')
    //   }
    //  //const adminsdb
  
        
          
    //       const adminsdb =  await this.getAdmins()
         
          

           
    //        // to check that username and email do not exist before when creating 
   
    //            for(var i=0;i<adminsdb.data.data.length;i++){
               
    //                if(adminsdb.data.data[i].email===this.state.email){
    //               alert('this email already exists,please enter another one')
    //               f =false;
    //                }

    //               if(adminsdb.data.data[i].username===this.state.username){
    //               alert('this username already exists,please enter another one')
    //               f =false;
    //               }
                 
    //            }
              
             
      
    //    if(f===true){
    //     // alert(''+adminsdb.data.data.length)
       
    //    this.addadmin(this.state.full_name,this.state.email,this.state.password,this.state.username);
    //    }
     
   
    //   }
    
   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  render() {
    
   

      return this.state.error?<h1>process could not be complete</h1>:this.state.loading?
  <h1>loading please be patient</h1>
  :(
   
      <div className="Admins">
        <h1>Admins</h1>

        <Link to="/admin/pendingjobs">View Pending Jobs</Link>
        <Admins admins = {this.state.admins} deleteadmin={this.deleteadmin} updateadmin={this.updateadmin} showadmin={this.showadmin}/>
        <br />
      
        {/* <div>
        <AdminIdComponentForm getAdmin={this.getAdmin}/>
        <center>
        { this.state.email ? <p><h4>Email:</h4> {this.state.email}</p>:<p></p>}
        { this.state.full_name ? <p><h4>Name:</h4> {this.state.full_name}</p>:<p></p>}
        { this.state.username ? <p><h4>User Name:</h4> {this.state.username}</p>:<p></p>}
       
        </center>
      </div> */}


    
        {/* <label> Admin Register</label>
        <br/>
        <br />
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
        {/* <input 
          type="submit" 
          value="Submit" 
          //className="btn"
         // style={{flex: '1'}}
        />
         </form>
         <br/>
         <br/> */} 

         {/* <form onSubmit={this.onSubmitget}>
         <label> Get an Admin</label>
         <br/>
         ID (just for now use id until we log in):
          <input
            name="id"
            type="text"
            value={this.state._id}
            onChange={this.onChange} 
            />

<input 
          type="submit" 
          value="Submit" 
          //className="btn"
         // style={{flex: '1'}}
        />

            
        
        <br />
        <br /> */}
        
         {/* </form> */}
         <label> Update Profile</label>
        <br/>
        <br />
         <form onSubmit={this.onSubmitUpdate}>
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

  ERROR=(error)=>{
    console.log(error)
    this.setState({error:true})
  }
}
const btnStyle={
background:'#000000',
color:'#fff'

}


export default AdminApp;
