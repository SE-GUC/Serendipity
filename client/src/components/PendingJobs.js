import React, { Component } from 'react';
import axios from 'axios';
import Pendingjobslist from './Pendingjobslist';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class PendingJobs extends Component {
 
    state={
        _id:'',
        title: '',
        location: '',
    startdate: '',
        enddate:'',
        salary:'',
        dailyhours:'',
        partner:'',
        description:''
     
    }

    constructor(props){
      super(props)
      this.state={
        pendingjobs:[],
        error:false,
        loading:true
       // updatedadmin:null
      }
    }

    componentDidMount() {
      axios
      .get('http://localhost:5000/api/admins/p/pendingjobs')
      .then(res=> this.setState({pendingjobs:res.data.data,loading:false}))
      .catch(error=> this.ERROR.bind(error))
    }

    approvejob =(id)=>{
     
        console.log(id)
        axios.put(`http://localhost:5000/api/admins/approverejectjob/${id}`,{state:"approved"

            }
          
         
          ).then(res => {this.setState({pendingjobs:[...this.state.PendingJobs,res.data]})})
          
        
          .catch(e=> "error")
          alert('Job was approved succesfully')
          
          window.location = '/admin/pendingjobs';
          window.location = '/admin/pendingjobs';
          
    }
    rejectjob =(id)=>{
        console.log(id)
        axios.put(`http://localhost:5000/api/admins/approverejectjob/${id}`,{state:"rejected"

            }
          
         
          ).then(res => {this.setState({pendingjobs:[...this.state.PendingJobs,res.data]})})
          
        
          .catch(e=> "error")
          alert('Job was rejected and removed succesfully')
          
            window.location = '/admin/pendingjobs';
            window.location = '/admin/pendingjobs';
            
    }
    


    render() {
    
   

        return this.state.error?<h1>process could not be complete</h1>:this.state.loading?
    <h1>loading please be patient</h1>
    :(
     
        <div className="Pending Jobs">
          <h1>Pending Jobs</h1>
  
          <Link to="/admin">Admin Page</Link>
          <Pendingjobslist pendingjobs = {this.state.pendingjobs} approvejob={this.approvejob} rejectjob={this.rejectjob}/>
          <br />
      </div>  
    );
    }



ERROR=(error)=>{
    console.log(error)
    this.setState({error:true})
  }
}
export default PendingJobs;