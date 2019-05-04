import React, { Component } from 'react';
import axios from 'axios';
import MemberID from './MemberID';
import { rmdirSync } from 'fs';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../globalState/actions/authentication';
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
      up_interests :'',
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
      up_skills :'' ,
      edit :  false ,
      view : true ,
      id : null ,
      delete : false
        };

this.componentDidMount = this.componentDidMount.bind(this);
this.edit = this.edit.bind(this);
this.onChange = this.onChange.bind(this);
this.delete =  this.delete.bind(this);
this.addSkill = this.addSkill.bind(this);
this.addInterest = this.addInterest.bind(this);
}
componentDidMount= function()
{
  const {isAuthenticated, user} = this.props.auth;
  console.log({user}.user.id)
  const member =this.state.id;
  const tokenB= localStorage.getItem('jwtToken');
   console.log(tokenB)
  if(member){
  axios.get(`http://localhost:5000/api/members/${member}` , {Authorization: tokenB }).then((res) =>{
    console.log({user}.user.id)
    console.log(res)
    console.log(res.data.data.email)
    console.log(res.data.email)
    this.setState({email : res.data.data.email , name : res.data.data.name , userName : res.data.data.userName , availableDailyHours : res.data.data.availableDailyHours , location : res.data.data.location , password : res.data.password , birthDate : res.data.data.birthDate , interests : res.data.data.interests ,
    attendedEvents :res.data.data.attendedEvents , previousJobs : res.data.data.previousJobs , previousTasks : res.data.data.previousTasks , previousProjects : res.data.data.previousProjects , reviews : res.data.data.reviews , reviewers : res.data.data.reviewers , 
  certificates : res.data.data.certificates , coursesTaken : res.data.data.coursesTaken , contractSigned : res.data.data.contractSigned , expirationDate : res.data.data.expirationDate , age : res.data.data.age , skills : res.data.data.skills })
})
} else return;
};

onChange = (e) => {
  
  this.setState({ [e.target.name]: e.target.value });
}

handleSubmit = async event => {
  const {isAuthenticated, user} = this.props.auth;
  console.log({user}.user.id)
  const member =this.state.id;
  const tokenB= localStorage.getItem('jwtToken');
  console.log(tokenB)
  event.preventDefault();
  
  await  axios.put(`http://localhost:5000/api/members/${member}` ,{
    email: this.state.up_email ? this.state.up_email : this.state.email ,
  
    }
  ).then(console.log("updating email"))
    .catch(e=> e)
    await axios.put(`http://localhost:5000/api/members/${member}` ,{

   userName : this.state.up_userName ? this.state.up_userName : this.state.userName ,
    }
  ).then(console.log("updating username"))
    .catch(e=> e )
   await  axios.put(`http://localhost:5000/api/members/${member}`,{
    name : this.state.up_name ? this.state.up_name : this.state.name ,
    }
  ).then(console.log("updating name"))
    .catch(e=> e)
   await axios.put(`http://localhost:5000/api/members/${member}`,{
    availableDailyHours : this.state.up_availableDailyHours ? this.state.up_availableDailyHours : this.state.availableDailyHours,
    }
  ).then(console.log("updating daily"))
    .catch(e=> e)
    await axios.put(`http://localhost:5000/api/members/${member}`, {
       location : this.state.up_location ? this.state.up_location : this.state.location ,
      }
    ).then(console.log("updating loc"))
      .catch(e=> e)
      axios.put(`http://localhost:5000/api/members/${member}` , {
       birthDate : this.state.up_birthDate ? this.state.up_birthDate : this.state.birthDate 
      }
    ).then(console.log("updating birth"))
      .catch(e=> e)
      await axios.put(`http://localhost:5000/api/members/${member}`, {
         password : this.state.up_password ? this.state.up_password : this.state.password 
        }
      ).then(console.log("updating passw"))
      .catch(e=> e)
     alert('Updated!');
}

edit = function(){
  this.setState({edit : true , view : false })
}
delete =  function(e){
  const {isAuthenticated, user} = this.props.auth;
  console.log({user}.user.id)
  const member =this.state.id;
  const tokenB= localStorage.getItem('jwtToken');
   console.log(tokenB);
  e.preventDefault();
  this.setState({edit : false , view : false , delete : true})
  console.log(member)
axios.delete(`http://localhost:5000/api/members/${member}` , {Authorization: tokenB } )
.then( res => console.log(res))
    
    alert('Account deleted successfully')
};

addSkill =  function(e){
  const {isAuthenticated, user} = this.props.auth;
  console.log({user}.user.id)
  const member =this.state.id;
  const tokenB= localStorage.getItem('jwtToken');
 console.log(tokenB);
  axios.put(`http://localhost:5000/api/members/${member}/addskills` ,  
    { skill : this.state.up_skills
  })
.then( res => console.log(res))
};

addInterest =  function(e){
  const {isAuthenticated, user} = this.props.auth;
  console.log({user}.user.id)
  const member =this.state.id;
  const tokenB= localStorage.getItem('jwtToken');
  axios.put(`http://localhost:5000/api/members/${member}/addinterests` , {
    interest : this.state.up_interests
})
.then( res => console.log(res))
};
render() {
  const  formstyle ={
    color: '#31323C',
    margin: 20,
    padding: 20, 
    backgroundColor:'#FFFFFF',
   borderStyle: 'outset',
    width : 500 ,
};
const {isAuthenticated, user} = this.props.auth;
    console.log({user}.user.id)
    this.state.id={user}.user.id;
    console.log(this.state.id);
  return (
    <div >
{ this.state.view && !this.state.edit ?
    <form style={formstyle}>

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
<button onClick={this.edit}>
  Edit profile info
</button>
<button onClick={this.delete}>
  Delete profile 
</button>
</form> : null }
{ this.state.edit && !this.state.view ?
<form onSubmit={this.handleSubmit}  style={formstyle}>
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
<button onClick = {this.handleSubmit}>
save changes
</button>
<br/><br/> 
<br/> 
 

</form> : null }
</div>
)}
}
MemberProfile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});
//export default EduOrgProfile;
export default connect(mapStateToProps)(withRouter(MemberProfile));

