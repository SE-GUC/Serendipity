import React, { Component } from 'react';
import axios from 'axios';
import PendingMembers from './PendingMembers';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class PendingMembersForm extends Component {
 
    state={
        _id:'',
        email: '',
        password: '',
    name: '',
        registered:'',
        userName:''
       
     
    }

    constructor(props){
      super(props)
      this.state={
        pendingmembers:[],
        error:false,
        loading:true
       // updatedadmin:null
      }
    }

    componentDidMount() {
      const tokenB= localStorage.getItem('jwtToken');
      axios
      .get('http://localhost:5000/api/admins/p/pendingmembers',{
        Authorization: tokenB
      })
      .then(res=> this.setState({pendingmembers:res.data.data,loading:false}))
      .catch(error=> this.ERROR.bind(error))
    }

    approvemember =(id)=>{
      const tokenB= localStorage.getItem('jwtToken');
     
        console.log(id)
        axios.put(`http://localhost:5000/api/admins/armember/${id}`,{registered:"yes"

            },{
              Authorization: tokenB
            }
          
         
          ).then(res => {this.setState({pendingmembers:[...this.state.PendingMembersForm,res.data]})})
          
        
          .catch(e=> "error")
          alert('Member was registered succesfully')
          
         
          window.location = '/admin/pendingmembers';
          
    }
    rejectmember =(id)=>{
      const tokenB= localStorage.getItem('jwtToken');
        console.log(id)
        axios.put(`http://localhost:5000/api/admins/armember/${id}`,{registered:"rejected"

            },{
              Authorization: tokenB
            }
          
         
          ).then(res => {this.setState({pendingmembers:[...this.state.PendingMembersForm,res.data]})})
          
        
          .catch(e=> "error")
          alert('Member was rejected to register and removed succesfully')
          
            window.location = '/admin/pendingmembers';
            window.location = '/admin/pendingmembers';
            
    }
    


    render() {
    
   

        return this.state.error?<h1>process could not be complete</h1>:this.state.loading?
    <h1>loading please be patient</h1>
    :(
     
        <div className="Pending Jobs">
          <h1>Pending Members</h1>
  
          <Link to="/admin">Admin Page</Link>
          <PendingMembers pendingmembers = {this.state.pendingmembers} approvemember={this.approvemember} rejectmember={this.rejectmember}/>
          <br />
      </div>  
    );
    }



ERROR=(error)=>{
    console.log(error)
    this.setState({error:true})
  }
}
export default PendingMembersForm;