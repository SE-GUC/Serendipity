import React, { Component } from 'react';
import axios from 'axios';
import PendingPartners from './PendingPartners';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class PendingPartnersForm extends Component {
 
    state={
        _id:'',
        email: '',
        password: '',
    name: '',
        registered:''
       
     
    }

    constructor(props){
      super(props)
      this.state={
        pendingpartners:[],
        error:false,
        loading:true
       // updatedadmin:null
      }
    }

    componentDidMount() {
      const tokenB= localStorage.getItem('jwtToken');
      axios
      .get('http://localhost:5000/api/admins/p/pendingpartners',{
        Authorization: tokenB
      })
      .then(res=> this.setState({pendingpartners:res.data.data,loading:false}))
      .catch(error=> this.ERROR.bind(error))
    }

    approvepartner =(id)=>{
      const tokenB= localStorage.getItem('jwtToken');
        console.log(id)
        axios.put(`http://localhost:5000/api/admins/arpartner/${id}`,{registered:"yes"

            },{
              Authorization: tokenB
            }
          
         
          ).then(res => {this.setState({pendingpartners:[...this.state.PendingPartnersForm,res.data]})})
          
        
          .catch(e=> "error")
          alert('Partner was registered succesfully')
          
         
          window.location = '/admin/pendingpartners';
          
    }
    rejectpartner =(id)=>{
      const tokenB= localStorage.getItem('jwtToken');
        console.log(id)
        axios.put(`http://localhost:5000/api/admins/arpartner/${id}`,{registered:"rejected"

            },{
              Authorization: tokenB
            }
          
         
          ).then(res => {this.setState({pendingpartners:[...this.state.PendingPartnersForm,res.data]})})
          
        
          .catch(e=> "error")
          alert('Partner was rejected to register and removed succesfully')
          
            window.location = '/admin/pendingpartners';
            window.location = '/admin/pendingpartners';
            
    }
    


    render() {
    
   

        return this.state.error?<h1>process could not be complete</h1>:this.state.loading?
    <h1>loading please be patient</h1>
    :(
     
        <div className="Pending Jobs">
          <h1>Pending Partners</h1>
  
          <Link to="/admin">Admin Page</Link>
          <PendingPartners pendingpartners = {this.state.pendingpartners} approvepartner={this.approvepartner} rejectpartner={this.rejectpartner}/>
          <br />
      </div>  
    );
    }



ERROR=(error)=>{
    console.log(error)
    this.setState({error:true})
  }
}
export default PendingPartnersForm;