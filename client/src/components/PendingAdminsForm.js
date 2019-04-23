import React, { Component } from 'react';
import axios from 'axios';
import PendingAdmins from './PendingAdmins';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class PendingAdminsForm extends Component {
 
    state={
        _id:'',
        email: '',
        password: '',
    username: '',
        registered:''
        
       
     
    }

    constructor(props){
      super(props)
      this.state={
        pendingadmins:[],
        error:false,
        loading:true
       // updatedadmin:null
      }
    }

    componentDidMount() {
      const tokenB= localStorage.getItem('jwtToken');
      axios
      .get('http://localhost:5000/api/admins/p/pendingadmins',{
        Authorization: tokenB
      })
      .then(res=> this.setState({pendingadmins:res.data.data,loading:false}))
      .catch(error=> this.ERROR.bind(error))
    }

    approveadmin =(id)=>{
      const tokenB= localStorage.getItem('jwtToken');
     
        console.log(id)
        axios.put(`http://localhost:5000/api/admins/aradmins/${id}`,{
          Authorization: tokenB
        },{registered:"yes"

            }
          
         
          ).then(res => {this.setState({pendingadmins:[...this.state.PendingAdminsForm,res.data]})})
          
        
          .catch(e=> "error")
          alert('Admin was registered succesfully')
          
         
          window.location = '/admin/pendingadmins';
          
    }
    rejectadmin =(id)=>{
      const tokenB= localStorage.getItem('jwtToken');
        console.log(id)
        axios.put(`http://localhost:5000/api/admins/aradmins/${id}`,{
          Authorization: tokenB
        },{registered:"rejected"

            }
          
         
          ).then(res => {this.setState({pendingadmins:[...this.state.PendingAdminsForm,res.data]})})
          
        
          .catch(e=> "error")
          alert('Admin was rejected to register and removed succesfully')
          
            window.location = '/admin/pendingadmins';
            window.location = '/admin/pendingadmins';
            
    }
    


    render() {
    
   

        return this.state.error?<h1>process could not be complete</h1>:this.state.loading?
    <h1>loading please be patient</h1>
    :(
     
        <div className="Pending Jobs">
          <h1>Pending Admins</h1>
  
          <Link to="/admin">Admin Page</Link>
          <PendingAdmins pendingadmins = {this.state.pendingadmins} approveadmin={this.approveadmin} rejectadmin={this.rejectadmin}/>
          <br />
      </div>  
    );
    }



ERROR=(error)=>{
    console.log(error)
    this.setState({error:true})
  }
}
export default PendingAdminsForm;