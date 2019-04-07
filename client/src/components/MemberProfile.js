import React, { Component } from 'react';
import axios from 'axios';
import MemberID from './MemberID';
import { rmdirSync } from 'fs';

class MemberProfile extends Component {

       state = {
         email : null ,
         name : null , 
         userName : null ,
         availableDailyHours : null ,
         location : null,
         password: null,
         birthDate: null,
      interests : null,
      attendedEvents : null,
      previousJobs :null,
      previousTasks :null,
      previousProjects :null,
      reviews :null,
      reviewers : null,
      certificates :null,
      coursesTaken :null,
      contractSigned :null,
      expirationDate :null,
      age :null,
      skills :null
        };

getMember = (e) => {
  e.preventDefault();
  const member = e.target.elements.id.value;
  if(member){
  axios.get(`http://localhost:5000/api/members/${member}`).then((res) =>{
    console.log(res)
    this.setState({email : res.data.data.email , name : res.data.data.name , userName : res.data.data.userName , availableDailyHours : res.data.data.availableDailyHours , location : res.data.data.location , password : res.data.password , birthDate : res.data.data.birthDate , interests : res.data.data.interests ,
    attendedEvents :res.data.data.attendedEvents , previousJobs : res.data.data.previousJobs , previousTasks : res.data.data.previousTasks , previousProjects : res.data.data.previousProjects , reviews : res.data.data.reviews , reviewers : res.data.data.reviewers , 
  certificates : res.data.data.certificates , coursesTaken : res.data.data.coursesTaken , contractSigned : res.data.data.contractSigned , expirationDate : res.data.data.expirationDate , age : res.data.data.age , skills : res.data.data.skills })
})
} else return;
}
    render() {
    return (
    <div >

              <MemberID getMember={this.getMember}/>
<h1>
    Hello {this.state.name}
</h1>
  <form>

<div className = "personal info">
<div className="field">
    <label for="email">Email address</label> 
<input type="email" className="memberform" placeholder={this.state.email} value = {this.state.email} disabled>
</input><br></br>
</div>
<div class="field">
<label for="username">User name</label>
<input type="text" className="memberform" placeholder={this.state.userName} disabled>
</input><br></br></div>
<div class="field">
<label for="name">Name</label>
<input type="text" className="memberform" placeholder={this.state.name} disabled>
</input><br></br></div>
<div class="field">
<label for="passworf">password</label>
<input type="password" className="memberform" placeholder= {this.state.password} disabled>
</input><br></br></div>
<div class="field">
<label for="availableDailyHours ">availableDailyHours </label><br></br>
<input type="text" className="memberform" placeholder={this.state.availableDailyHours} disabled>
</input><br></br></div>
<div class="field">
<label for="location ">location </label>
<input type="text" className="memberform" placeholder={this.state.location} disabled>
</input><br></br></div>
<div class="field">
<label for="birthDate ">birthDate </label>
<input type="date" className="memberform" placeholder={this.state.birthDate} disabled>
</input><br></br></div>
<div class="field">
<label for="interests  ">interests  </label>
<input type="array" className="memberform" placeholder={this.state.interests} disabled>
</input><br></br></div>
<div class="field">
<label for="attendedEvents  ">attendedEvents  </label>
<input type="array" className="memberform" placeholder={this.state.attendedEvents} disabled>
</input><br></br></div>
<div class="field">
<label for="previousProjects  ">previousProjects  </label>
    <input type="array" className="memberform" placeholder={this.state.previousProjects} disabled>
</input><br></br></div>
<div class="field">
<label for="previousTasks  ">previousTasks </label>
<input type="array" className="memberform" placeholder={this.state.previousTasks} disabled>
</input><br></br></div>
<div class="field">
<label for="previousJobs  ">previousJobs </label>
<input type="array" className="memberform" placeholder={this.state.previousJobs} disabled>
</input><br></br></div>
<div class="field">
<label for="review  ">review  </label>
<input type="text" className="memberform" placeholder={this.state.reviews} disabled>
</input><br></br></div>
<div class="field">
<label for="reviewers   ">reviewers   </label>
<input type="text" className="memberform" placeholder={this.state.reviewers} disabled>
</input><br></br></div>
<div class="field">
<label for="certificates   ">certificates  </label>
<input type="text" className="memberform" placeholder={this.state.certificates} disabled>
</input><br></br></div>
<div class="field">
<label for="coursesTaken   ">coursesTaken   </label>
<input type="text" className="memberform" placeholder={this.state.coursesTaken} disabled>
</input><br></br></div>
<div class="field">
<label for="contractSigned">contractSigned   </label>
<input type="boolean" className="memberform" placeholder={this.state.contractSigned} disabled>
</input><br></br></div>
<div class="field">
<label for="age ">age    </label>
<input type="number" className="memberform" placeholder={this.state.age} disabled>
</input><br></br></div>
<div class="field">
<label for="skills ">skills </label>
<input type="array" className="memberform" placeholder={this.state.skills} disabled>
</input><br></br></div>
</div>
</form> 
</div>
      )  }


}
export default MemberProfile ;