import React, { Component } from 'react';
import axios from 'axios';
import '..';
import { Link } from 'react-router-dom';


class updateAssessment extends Component {
 
    state={
        memberName:'',
        expertName:'',
        masterClass:'',
        educationalOrg:'',
        phoneNumber:'',
        daysAvailable:'',
        status:''
    }
    
    assess = (_id, schema) => {
      console.log(_id)
      console.log(schema)

      axios.put(`http://localhost:5000/api/assessments/${_id}`, schema)
          .then(this.setState({ seeUpd: <Link to={`/assessment`} style={styles.linking}> Assessment updated successfully! </Link> }))
          .catch(e => { alert(e); console.log(e) })
  }


     onUpdate=(e)=>{
       e.preventDefault();
       const { id } = this.props.match.params
       var schema = {};
       if (this.state.memberName) schema["memberName"] = this.state.memberName
       if (this.state.expertName) schema["expertName"] = this.state.expertName
       if (this.state.masterClass) schema["masterClass"] = this.state.masterClass
       if (this.state.educationalOrg) schema["educationalOrg"] = this.state.educationalOrg
       if (this.state.phoneNumber) schema["phoneNumber"] = this.state.phoneNumber
       if (this.state.daysAvailable) schema["daysAvailable"] = this.state.daysAvailable
       console.log(schema)
       console.log(id)

       this.assess(id, schema);
     
   
      }
    
   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  render() {
    
    return (
      <div >
      <h1> Update a booked assessment.. </h1>
      <form onUpdate={this.onUpdate}>
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
        ExpertName:
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
        PhoneNumber:
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
        
     
        
        <button onClick={this.onUpdate} style={btnStyle}> update</button>
        {/* <input 
          type="update" 
          value="Update" 
          //className="btn"
         // style={{flex: '1'}}
        /> */}
         </form>
         {this.state.seeUpd}
         </div>
    );
  }
}
const btnStyle={
background:'#f4f4f4f4',
color:'#000'

}
const styles = {
  linking: {
      color: '#FF0000',
  }
}
export default updateAssessment;
