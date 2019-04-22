import React, { Component } from 'react';
import './App.css';
import MemberProfile from './components/MemberProfile';
import Allmembers from './components/allmembers';
import JobItem from './components/JobItem';
import axios from 'axios';


class MemberApp extends Component {
constructor (){
super ()
this.state = {
    id :'',
    profile : false ,
    job : false , 
    course : false ,
    masterclass : false ,
    workshop : false , 
    all : false ,
    recommendations :[]

}
this.onChange = this.onChange.bind(this)
this.profile = this.profile.bind(this)
this.job = this.job.bind(this)
this.course = this.course.bind(this)
this.masterclass = this.masterclass.bind(this)
this.workshop = this.workshop.bind(this)
this.all = this.all.bind(this)
this.experts = this.experts.bind(this)
}
onChange = (e) => {
  
    this.setState({ [e.target.name]: e.target.value });

}
all =  function(e){
    this.setState({ all : true }); 
  this.props.history.push("/allmembers");
}
experts =  function(e){
    //this.setState({ all : true }); 
  this.props.history.push("/AllExperts");
}
profile=  function(e){
    this.setState({ profile : true }); 
    this.props.history.push("/memberprofile");
}
job =  function(e){
    this.setState({ job : true }); 
    this.props.history.push("/job");
}
course =  function(e){
    this.setState({ course : true }); 
    this.props.history.push("/course");
}
masterclass =  function(e){
    this.setState({ masterclass : true }); 
    this.props.history.push("/masterclass");
}
workshop =  function(e){
    this.setState({ workshop : true }); 
    this.props.history.push("/workshop");
       
}
/*componentDidMount() {
    axios
      .get("http://localhost:5000/api/members")
      .then(res => {
        this.setState({ recommendations: res.recommendations })
        console.log(this.state.recommendations)
    })
      .catch(error => console.log("blabizo"));
} 
*/
    render(){
        const btnstyle = {
            position: 'absolute' , 
            right:100   , 
            color: '#e5e8e',
            margin: 20,
            padding: 20, 
            backgroundColor:'#00000',
           borderStyle: 'outset',
            width : 500
        }
        return(
            <div className="App">
           <recommendations id = {this.state.id} />
     <label>
    ID : 
    <input name="id" type="text" value={this.state.id}  onChange={this.onChange} />                
</label>

<button onClick ={this.profile} style={btnstyle} > View Profile  </button> 
<br/><br/><br/><br/>

<button onClick ={this.all}  style={btnstyle} > View all members  </button><br/><br/><br/><br/>
<button onClick ={this.experts}  style={btnstyle} > View all experts  </button><br/><br/><br/><br/>
<button onClick ={this.job}  style={btnstyle} >  Apply for a job  </button><br/><br/><br/><br/>
<button onClick ={this.course} style={btnstyle} > Apply for a Course  </button><br/><br/><br/><br/>
<button onClick ={this.masterclass} style={btnstyle} > Apply for a master Class  </button><br/><br/><br/><br/>
<button onClick ={this.workshop} style={btnstyle}> Apply for a workshop  </button><br/><br/><br/><br/>
            { this.state.profile ? <MemberProfile id ={this.state.id}/> : null  }
            { this.state.all ? <Allmembers /> : null }
            </div>
        );
    }
}
export default MemberApp;