import React, { Component } from 'react';
import axios from 'axios';
import MemberID from './MemberID';
import { rmdirSync } from 'fs';

class MemberProfile extends Component {
constructor (){
  super();     
  this.state = {
      email : '' ,
         name : '' , 
         userName : '' ,
         availableDailyHours : '' ,
         location : '',
         password: '',
         birthDate: '',
      interests : [],
      attendedEvents : [],
      previousJobs : [] ,
      previousTasks : [],
      previousProjects :[],
      reviews :[],
      reviewers : [],
      certificates :[],
      coursesTaken :[],
      contractSigned :'',
      expirationDate :'',
      age :'',
      skills :[] ,
      up_email : '' ,
         up_name : '' , 
         up_userName : '' ,
         up_availableDailyHours : '' ,
         up_location : '',
         up_password: '',
         up_birthDate: '',
      up_interests : [],
      up_attendedEvents : [],
      up_previousJobs : [],
      up_previousTasks :[],
      up_previousProjects :[],
      up_reviews :[],
      up_reviewers : [],
      up_certificates :[],
      up_coursesTaken : [] ,
      up_contractSigned :[],
      up_expirationDate :'',
      up_age :'',
      up_skills :[] ,
      edit :  false ,
      view : true ,
      id : null ,
      delete : false
        };

this.getMember = this.getMember.bind(this);
this.edit = this.edit.bind(this);
this.onChange = this.onChange.bind(this);
this.delete =  this.delete.bind(this);
}



getMember = function()
{
  const member = this.props.id ;
  if(member){
  axios.get(`http://localhost:5000/api/members/${member}`).then((res) =>{
    console.log(res)
    this.setState({email : res.data.data.email , name : res.data.data.name , userName : res.data.data.userName , availableDailyHours : res.data.data.availableDailyHours , location : res.data.data.location , password : res.data.password , birthDate : res.data.data.birthDate , interests : res.data.data.interests ,
    attendedEvents :res.data.data.attendedEvents , previousJobs : res.data.data.previousJobs , previousTasks : res.data.data.previousTasks , previousProjects : res.data.data.previousProjects , reviews : res.data.data.reviews , reviewers : res.data.data.reviewers , 
  certificates : res.data.data.certificates , coursesTaken : res.data.data.coursesTaken , contractSigned : res.data.data.contractSigned , expirationDate : res.data.data.expirationDate , age : res.data.data.age , skills : res.data.data.skills })
})
} else return;
}

onChange = (e) => {
  
  this.setState({ [e.target.name]: e.target.value });
}

handleSubmit = async event => {
  const member = this.props.id ;
  event.preventDefault();
  
  axios.put(`http://localhost:5000/api/members/${member}`,{
    email: this.state.up_email ? this.state.up_email : this.state.email ,
    }
  )
    .catch(e=> e)
    axios.put(`http://localhost:5000/api/members/${member}`,{

   userName : this.state.up_userName ? this.state.up_userName : this.state.userName ,
    }
  )
    .catch(e=> e)
    axios.put(`http://localhost:5000/api/members/${member}`,{
    name : this.state.up_name ? this.state.up_name : this.state.name ,
    }
  )
    .catch(e=> e)
    axios.put(`http://localhost:5000/api/members/${member}`,{
    availableDailyHours : this.state.up_availableDailyHours ? this.state.up_availableDailyHours : this.state.availableDailyHours,
    }
  )
    .catch(e=> e)
    axios.put(`http://localhost:5000/api/members/${member}`,{
       location : this.state.up_location ? this.state.up_location : this.state.location ,
      }
    )
      .catch(e=> e)
      axios.put(`http://localhost:5000/api/members/${member}`,{
       birthDate : this.state.up_birthDate ? this.state.up_birthDate : this.state.birthDate 
      }
    )
      .catch(e=> e)
      axios.put(`http://localhost:5000/api/members/${member}`,{
         password : this.state.up_password ? this.state.up_password : this.state.password 
        }
      )
        .catch(e=> e)
     alert('Updated!');
}

edit = function(){
  this.setState({edit : true , view : false })
}

delete =  function(e){
  e.preventDefault();
  const member = this.props.id
  this.setState({edit : false , view : false , delete : true})
  console.log(member)
axios.delete(`http://localhost:5000/api/members/${member}`)
.then( res => console.log(res))
    
    alert('Account deleted successfully')
}

render() {
  return (
  
    <div >
<h1>
<button onClick={this.getMember} > View profile </button><br/>
    Hello {this.state.name} <br/>
</h1>

{ this.state.view && !this.state.edit ?
  <form >

Email address :  
<input type="email"   value={this.state.email} disabled /><br></br>


User name : 
<input type="text"   value={this.state.userName} disabled/><br></br>

Name : 
<input type="text"   value={this.state.name} disabled /><br></br>
Password :
<input type="password"   value= {this.state.password} disabled /><br></br>
Available Daily Hours :
<input type="text"   value={this.state.availableDailyHours} disabled/><br></br>
Location :
<input type="text"   value={this.state.location} disabled/><br></br>
BirthDate :
<input type="text"   value={this.state.birthDate} disabled/><br></br>
Interests :
<input type="array"   value={this.state.interests} disabled/><br></br>
Attended Events : 
<input type="array"   value={this.state.attendedEvents} disabled/><br></br>
Previous Projects :
<input type="array"   value={this.state.previousProjects} disabled/><br></br>
Previous Tasks :
<input type="array"   value={this.state.previousTasks} disabled/><br></br>
Previous Jobs :
<input type="array"   value={this.state.previousJobs} disabled/><br></br>
Review :
<input type="text"   value={this.state.reviews} disabled/><br></br>
Reviewers :
<input type="text"   value={this.state.reviewers} disabled/><br></br>
Certificates :
<input type="text"   value={this.state.certificates} disabled/><br></br>
Courses Taken :
<input type="text"   value={this.state.coursesTaken} disabled/><br></br>
Contract Signed :
<input type="boolean"   value={this.state.contractSigned} disabled/><br></br>
Age :
<input type="number"   value={this.state.age} disabled/><br></br>
Skills :
<input type="array"   value={this.state.skills} disabled/><br></br>
</form> : null }
<button onClick={this.edit}>
  Edit profile info
</button>
<button onClick={this.delete}>
  Delete profile 
</button>
{ this.state.edit && !this.state.view ?
<form onSubmit={this.handleSubmit} >
Email address :  
<input type="email"  name="up_email" value={this.state.up_email ? this.state.up_email : this.state.email } onChange={this.onChange} />
<br></br>
User name :
<input type="text" name="up_userName"  value={this.state.up_userName ? this.state.up_userName : this.state.userName} onChange={this.onChange}  />
<br></br>
Name : 
<input type="text" name="up_name"   value={this.state.up_name ? this.state.up_name : this.state.name}  onChange={this.onChange} />
<br></br>
Password : 
<input type="text" name="up_password"  value= {this.state.up_password ? this.state.up_password : this.state.password }  onChange={this.onChange} />
<br></br>
Available Daily Hours :
<input type="text"  name="up_availableDailyHours" value={this.state.up_availableDailyHours ? this.state.up_availableDailyHours : this.state.availableDailyHours } onChange={this.onChange} />
<br></br>
Location :
<input type="text"  name="up_location" value={this.state.up_location ? this.state.up_location : this.state.location  } onChange={this.onChange}  />
<br></br>
BirthDate : 
<input type="text" name="up_birthDate"  value= {this.state.up_birthDate ? this.state.up_birthDate : this.state.birthDate} onChange={this.onChange} />
<br></br>
Interests : 
<input type="array" name="up_interests"  value={this.state.interests} onChange={this.onChange} />
<br></br>
Attended Events :
<input type="array" name="up_attendedEvents"  value={this.state.attendedEvents} onChange={this.onChange} />
<br></br>
Previous Projects :
<input type="array" name="up_previousProjects"   value={this.state.previousProjects} onChange={this.onChange} />
<br></br>
Previous Tasks :
<input type="array" name="up_previousTasks"  value={this.state.previousTasks} onChange={this.onChange} />
<br></br>
Previous Jobs :
<input type="array" name="up_previousJobs"  value={this.state.previousJobs} onChange={this.onChange} />
<br></br>
Review  
<input type="text"  name="up_review" value={this.state.reviews} onChange={this.onChange} />
<br></br>
Reviewers :
<input type="text"  name="up_reviewers" value={this.state.reviewers} onChange={this.onChange} /><br></br>
Certificates :
<input type="text"  name="up_certificates" value={this.state.certificates} onChange={this.onChange} />
<br></br>
Courses Taken :
<input type="text" name="up_coursesTaken"  value={this.state.coursesTaken} onChange={this.onChange} />
<br></br>
Contract Signed :
<input type="boolean"  name="up_contractSigned" value={this.state.contractSigned} onChange={this.onChange} />
<br></br>
Age :
<input type="number" name="up_age"  value={this.state.age} onChange={this.onChange} />
<br></br>
Skills :
<input type="array" name="up_skills"  value={this.state.skills} onChange={this.onChange}  />
<br></br>
<button onClick = {this.handleSubmit}>
save changes
</button> 
</form> : null }


</div>
)
}


}
export default MemberProfile ;