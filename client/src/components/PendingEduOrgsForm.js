import React, { Component } from 'react';
import axios from 'axios';
import PendingEduOrgs from './PendingEduOrgs';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class PendingEduOrgsForm extends Component {
 
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
        pendingeduorgs:[],
        error:false,
        loading:true
       // updatedadmin:null
      }
    }

    componentDidMount() {
      axios
      .get('http://localhost:5000/api/admins/p/pendingeduorg')
      .then(res=> this.setState({pendingeduorgs:res.data.data,loading:false}))
      .catch(error=> this.ERROR.bind(error))
    }

    approveeduorg =(id)=>{
     
        console.log(id)
        axios.put(`http://localhost:5000/api/admins/areduorg/${id}`,{registered:"yes"

            }
          
         
          ).then(res => {this.setState({pendingeduorgs:[...this.state.PendingEduOrgsForm,res.data]})})
          
        
          .catch(e=> "error")
          alert('EduOrg was registered succesfully')
          
         
          window.location = '/admin/pendingeduorgs';
          
    }
    rejecteduorg =(id)=>{
        console.log(id)
        axios.put(`http://localhost:5000/api/admins/areduorg/${id}`,{registered:"rejected"

            }
          
         
          ).then(res => {this.setState({pendingeduorgs:[...this.state.PendingEduOrgsForm,res.data]})})
          
        
          .catch(e=> "error")
          alert('EduOrg was rejected to register and removed succesfully')
          
            window.location = '/admin/pendingeduorgs';
            window.location = '/admin/pendingeduorgs';
            
    }
    


    render() {
    
   

        return this.state.error?<h1>process could not be complete</h1>:this.state.loading?
    <h1>loading please be patient</h1>
    :(
     
        <div className="Pending Jobs">
          <h1>Pending EduOrgs</h1>
  
          <Link to="/admin">Admin Page</Link>
          <PendingEduOrgs pendingeduorgs = {this.state.pendingeduorgs} approveeduorg={this.approveeduorg} rejecteduorg={this.rejecteduorg}/>
          <br />
      </div>  
    );
    }



ERROR=(error)=>{
    console.log(error)
    this.setState({error:true})
  }
}
export default PendingEduOrgsForm;