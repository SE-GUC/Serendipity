import React, { Component } from 'react';
import axios from 'axios';
import '..';
import { Link } from 'react-router-dom';


class createAssessment extends Component {
 
    state={
      memberName:'',
      expertName:'',
      masterClass:'',
      educationalOrg:'',
      phoneNumber:'',
      daysAvailable:'',
      status:''
    }
    addassessment = ( schema) => {
      axios.post(`http://localhost:5000/api/assessments/`, schema)
          .then(this.setState({ seeUpd: <Link to={`/assessment/createAssessment`} style={styles.linking}> The Assessment was booked successfully! </Link> }))
          .catch(e => { alert(e); console.log(e) })
  }
     onSubmit=(e)=>{
      e.preventDefault();
      if(!this.state.memberName||!this.state.expertName||!this.state.masterClass||!this.state.educationalOrg)
          alert('The information you provided is not enough, please complete the form.')
     else{
      var schema = {};
      if (this.state.memberName) schema["memberName"] = this.state.memberName
      if (this.state.expertName) schema["expertName"] = this.state.expertName
      if (this.state.masterClass) schema["masterClass"] = this.state.masterClass
      if (this.state.educationalOrg) schema["educationalOrg"] = this.state.educationalOrg
      if (this.state.phoneNumber) schema["phoneNumber"] = this.state.phoneNumber
      if (this.state.daysAvailable) schema["daysAvailable"] = this.state.daysAvailable
      this.addassessment(schema);
     } 
    }
    
   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  render() {
    
    return (
      <div >
      <h1> Book an assessment </h1>
      <form onSubmit={this.onSubmit}>
      <label>
          MemberName:
          <input
            name="memberName"
            type="text"
            value={this.state.memberName}
            onChange={this.onChange} 
            />
        </label>
        
        <br />
        <br />
        <label>
        Expert Name:
          <input
            name="expertName"
            type="text"
            value={this.state.expertName}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
        MasterClass:
          <input
            name="masterClass"
            type="text"
            value={this.state.masterClass}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          EducationalOrg:
          <input
            name="educationalOrg"
            type="text"
            value={this.state.educationalOrg}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
        Phone Number:
          <input
            name="phoneNumber"
            type="number"
            value={this.state.phoneNumber}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          DaysAvailable:
          <input
            name="daysAvailable"
            type="text"
           value={this.state.daysAvailable}
           onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
       
        <input 
          type="submit" 
          value="Submit" 
        />
         </form>
         {this.state.seeUpd}
         </div>
    );
  }
}
const btnStyle={
background:'#000000',
color:'#fff'

}
const styles = {
  linking: {
      color: '#FFFF00',
  }
}
export default createAssessment;