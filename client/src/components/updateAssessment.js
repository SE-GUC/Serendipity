import React, { Component } from 'react';
import axios from 'axios';

class updateAssessment extends Component {
 
    state={
      _id: null,  
      memberName:'',
      expertName:'',
      masterClass:'',
      educationalOrg:'',
      phoneNumber:'',
      daysAvailable:''
    }
     
    updateMemberName=(_id,memberName)=>{
      axios.put(`http://localhost:5000/api/assessments/${_id}`,{
      memberName:memberName
      }
      ).then(res => {this.setState({assessment:[...this.state.updateAssessment,res.data]})})
      .catch(e=> "error")
      alert('Member name updated successfully!')
    }

    updateExpertName=(_id,expertName)=>{
      axios.put(`http://localhost:5000/api/assessments/${_id}`,{
      expertName:expertName
      }
      ).then(res => {this.setState({assessment:[...this.state.updateAssessment,res.data]})})
      .catch(e=> "error")
      alert('Expert name updated successfully!')
    }

    updateMasterClass=(_id,masterClass)=>{
      axios.put(`http://localhost:5000/api/assessments/${_id}`,{
      masterClass:masterClass
      }
      ).then(res => {this.setState({assessment:[...this.state.updateAssessment,res.data]})})
      .catch(e=> "error")
      alert('Master class updated successfully!')
    }

    updateEducationalOrg=(_id,educationalOrg)=>{
      axios.put(`http://localhost:5000/api/assessments/${_id}`,{
      educationalOrg:educationalOrg
      }
      ).then(res => {this.setState({assessment:[...this.state.updateAssessment,res.data]})})
      .catch(e=> "error")
      alert('Educational Organisation updated successfully!')
    }

    updatePhoneNumber=(_id,phoneNumber)=>{
      axios.put(`http://localhost:5000/api/assessments/${_id}`,{
        phoneNumber:phoneNumber
      }
      ).then(res => {this.setState({assessment:[...this.state.updateAssessment,res.data]})})
      .catch(e=> "error")
      alert('Phone number of work updated successfully!')
    }

    updateDaysAvailable=(_id,daysAvailable)=>{
      axios.put(`http://localhost:5000/api/assessments/${_id}`,{
        daysAvailable:daysAvailable
      }
      ).then(res => {this.setState({assessment:[...this.state.updateAssessment,res.data]})})
      .catch(e=> "error")
      alert('Days available updated successfully!')
    }


    
    onSubmitMemberName=(e)=>{
       e.preventDefault();
        this.updateMemberName(this.state._id,this.state.memberName);
    }

    onSubmitExpertName=(e)=>{
      e.preventDefault();
       this.updateExpertName(this.state._id,this.state.expertName);
     }

    onSubmitMasterClass=(e)=>{
    e.preventDefault();
     this.updateMasterClass(this.state._id,this.state.masterClass);
   }

    onSubmitEducationalOrg=(e)=>{
   e.preventDefault();
   this.updateEducationalOrg(this.state._id,this.state.educationalOrg);
}

    onSubmitPhoneNumber=(e)=>{
   e.preventDefault();
   this.updatePhoneNumber(this.state._id,this.state.phoneNumber);
}  

onSubmitDaysAvailable=(e)=>{
  e.preventDefault();
   this.updateDaysAvailable(this.state._id,this.state.daysAvailable);
}  


   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
    
   render() {
    
    return (
      <div >
      <label> Id: <input name="_id" type="text" value={this.state._id} onChange={this.onChange}  /></label>
      <label>*this will be removed later and will use the id of the booked assessment </label> <br /> <br />
      <form onSubmit={this.onSubmitMemberName}>
      <label> Member Name: <input name="memberName" type="text" value={this.state.memberName} onChange={this.onChange} /></label>
      {"  "}
      <input type="submit" value="Update Member name" />
      </form>
      <form onSubmit={this.onSubmitExpertName}>
      <label> Expert Name: <input name="ExpertName" type="text" value={this.state.expertName} onChange={this.onChange} /></label>
      {"  "}
      <input type="submit" value="Update Expert name" />
      </form>
      <form onSubmit={this.onSubmitMasterClass}>
      <label> Master Class: <input name="masterClass" type="text" value={this.state.masterClass} onChange={this.onChange} /></label>
      {"  "}
      <input type="submit" value="Update Master class" />
      </form>
      <form onSubmit={this.onSubmitEducationalOrg}>
      <label> Educational Organisation: <input name="educationalOrg" type="text" value={this.state.educationalOrg} onChange={this.onChange} /></label>
      {"  "}
      <input type="submit" value="Update Educational Org" />
      </form>
      <form onSubmit={this.onSubmitPhoneNumber}>
      <label>  Phone Number: <input name="phoneNumber" type="Number" value={this.state.phoneNumber} onChange={this.onChange} /></label>
      {"  "}
      <input type="submit" value="Update Phone number" />
      </form>
      
  </div >
    );
  }
}


export default updateAssessment;