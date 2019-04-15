import React , { Fragment, Component } from "react";
import axios from 'axios';
import MemberApp from "../MemberApp";
class MemberForm extends Component  {
  constructor(){
    super();
this.state = {
     email : '',
     userName : '' ,
     name : '' ,
     password : '' ,
     availableDailyHours : '' ,
     location : '' ,
     birthDate : '' ,
     interests : '' ,
     certificates : '' ,
     coursesTaken : '' ,
     skills : '' ,
     done : false 

}
}
default = function(){
  this.setState({

    email : '',
     userName : '' ,
     name : '' ,
     password : '' ,
     availableDailyHours : '' ,
     location : '' ,
     birthDate : '' ,
     interests : '' ,
     certificates : '' ,
     coursesTaken : '' ,
     skills : '' ,
     done : false 
  })
}

onChange = (e) => {
  
  this.setState({ [e.target.name]: e.target.value });
}

handleSubmit = async event => {
  event.preventDefault();
  const member = {
    email: this.state.email ,
    userName : this.state.userName ,
    name : this.state.name ,
    password : this.state.password ,
    availableDailyHours : this.state.availableDailyHours ,
     location : this.state.location ,
     birthDate : this.state.birthDate,
/*     interests : this.state.interests,
     certificates : this.state.certificates ,
     coursesTaken : this.state.coursesTaken ,
     skills : this.state.skills
*/
  };
  console.log(member)
 fetch(`http://localhost:5000/api/members/`, {
  method: 'POST', 
  body: JSON.stringify(member),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => {
      console.log(res);
      alert('congratulations , You are a member now !')
      this.setState({done : true})
    }).catch(e => {
      console.log(e)
      alert('Something went wrong! check it out and try again')
    })
}



render(){
    const  formstyle ={
        color: '#31323C',
        margin: 20,
        padding: 20, 
        backgroundColor:'#FFFFFF',
        borderStyle: 'outset',
        width : 500 ,
}

return (
<div> 
{ !this.state.done ?
  <form onSubmit={this.handleSubmit} style={formstyle} >
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
          Username:
          <input
            name="userName"
            type="text"
            value={this.state.userName}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          availableDailyHours:
          <input
            name="availableDailyHours"
            type="text"
           value={this.state.availableDailyHours}
           onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Location:
          <input
            name="location"
            type="text"
           value={this.state.location}
           onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Birthdate:
          <input
            name="birthDate"
            type="date"
           value={this.state.birthDate}
           onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          interests:
          <input
            name="interests"
            type="array"
            value={this.state.interests}
           onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
        certificates:
        <input
          name="certificates"
          type="array"
          value={this.state.certificates}
         onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
        Courses Taken:
        <input
          name="coursesTaken"
          type="array"
          value={this.state.coursesTaken}
         onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
        Skills:
        <input
          name="skills"
          type="array"
          value={this.state.skills}
         onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
                        
        <button type="submit">Add</button>
         </form>
: <MemberApp />}

{this.default}
</div>
)
}
};
export default MemberForm;