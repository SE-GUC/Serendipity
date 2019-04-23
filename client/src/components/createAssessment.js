import React, { Component } from 'react';
import axios from 'axios';


class createAssessment extends Component {
 
    state={
        memberName:'',
        expertName:'',
        phoneNumber:'',
        daysAvailable:''
     
    }
    addAssessment=(memberName,expertName,phoneNumber,daysAvailable)=>{
      
      axios.post("http://localhost:5000/api/assessments/",{

        memberName:memberName,
        expertName:expertName,
        phoneNumber:phoneNumber,
        daysAvailable:daysAvailable
      }
     
      ).then(res => { alert('Assessment was booked succesfully')
        this.setState({assessment:[...this.state.createAssessment,res.data]})})
      
    
      .catch(e=> "error")
      //alert('Assessment was booked succesfully')

    }
      
     
     onSubmit=(e)=>{
       e.preventDefault();
       if(!this.state.memberName){
         alert('The member name cannot be empty')
       }
       else if(!this.state.expertName||!this.state.phoneNumber||!this.state.daysAvailable)
       alert('The validations assessments are not satisfied. Please, try again!')
      
      else
       
       
       this.addAssessment(this.state.memberName,this.state.expertName,this.state.phoneNumber,this.state.daysAvailable);//,this.workshopsIDs);
     
   
      }
    
  //  onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  //  onChangeAssessments=(e)=>{
  //   const ID=e.target.value+ " " 
  //  // var newIDs = this.state.courseIDs
  //   if(ID.length===24)
  //     newIDs.push(ID)
  //    this.setState({courseIDs:newIDs})
  //    console.log(newIDs)
  //    newIDs=[]
  //   }
  onChange=(e)=>this.setState({[e.target.name]:e.target.value});
   render() {
    
    return (
      <div >
      <h1>Book an Assessment </h1>
      <form onSubmit={this.onSubmit}>
      <label>
          Member Name:
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
          Days Available:
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
         </div>
    );
  }
}
const btnStyle={
background:'#000000',
color:'#fff'

}
export default createAssessment;
