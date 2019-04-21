import React, { Component } from 'react';
import axios from 'axios';
class AdminCreate extends Component {
    state={
        _id:'',
        full_name:'',
        email:'',
        password:'',
        username:'',
        super:''
       
      }

      getAdmins= async ()  => {
      
        return await axios.get("http://localhost:5000/api/admins/");
      
      }
      addadmin=(full_name,email,password,username,supe)=>{
    
        axios.post("http://localhost:5000/api/admins/",{
  
          full_name:full_name,email:email,password:password,username:username,super:supe
        }
       
        ).then(res => {this.setState({admin:[...this.state.AdminApp,res.data]})})
        
      
        .catch(e=> "error")
        alert('Admin was created succesfully')
        window.location = '/admin';
       // <Redirect to="/HomePage" /> 
  
  
          // <Popup> 
          //   <div> 
          //     Admincouldn't be created, you did not meet validations, try again
          //   </div>
          // </Popup>
  
  
       // )
      }
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

      onSubmit= async(e)=>{
        e.preventDefault();
        var f=true;
   
        if(!this.state.full_name){
          f = false;
          alert('full name cannot be empty')
        }
        else if (!this.state.password || this.state.password.length<8){
          f= false;
       alert('password cannot be empty or less than 8 characters')
        }
       else if (!this.state.username){
         f = false;
       alert('username cannot be empty')
       }
       else if (!this.state.email){
         f = false;
       alert('email cannot be empty')
       }
       else if (!this.state.super){
        f = false;
      alert('please specify if you are the super admin or not')
      }
      //const adminsdb
   
         
           
           const adminsdb =  await this.getAdmins()
          
           
 
            
            // to check that username and email do not exist before when creating 
    
                for(var i=0;i<adminsdb.data.data.length;i++){
                
                    if(adminsdb.data.data[i].email===this.state.email){
                   alert('this email already exists,please enter another one')
                   f =false;
                    }
 
                   if(adminsdb.data.data[i].username===this.state.username){
                   alert('this username already exists,please enter another one')
                   f =false;
                   }
                   if(this.state.super==='yes' && adminsdb.data.data[i].super===this.state.super){
                    alert('there is already a super admin')
                    f =false;
                    }
                  
                }
               
              
       
        if(f===true){
         // alert(''+adminsdb.data.data.length)
        
        this.addadmin(this.state.full_name,this.state.email,this.state.password,this.state.username,this.state.super);
        }
      
    
       }
       onChange=(e)=>this.setState({[e.target.name]:e.target.value});
       render() {
        return(
            <div>
        <label> Admin Register</label>
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
        <label>
          Super:
          <input
            name="super"
            type="text"
            value={this.state.super}
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
        )    

}
}


export default AdminCreate;