
import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios';

const styles = {
    linking: {
        color: '#FF0000',
    }
}
class updateAssessment extends React.Component {
    state = {
        memberName: '',
        expertName: '',
        phoneNumber: '',
        daysAvailable: ''
    }
    updateAssessment = (id, schema) => {
        axios.put(`http://localhost:5000/api/assessments/${id}`, schema)
            .then(this.setState({ seeUpd: <Link to={`/assessment`} style={styles.linking}>See All assessments after Update? </Link> }))
            .catch(e => { alert(e); console.log(e) })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params
        var schema = {};
        if (this.state.memberName) schema["memberName"] = this.state.memberName
        if (this.state.expertName) schema["expertName"] = this.state.expertName
        if (this.state.phoneNumber) schema["phoneNumber"] = this.state.phoneNumber
        if (this.state.daysAvailable) schema["daysAvailable"] = this.state.daysAvailable

        this.updateAssessment(id, schema);
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        return (
            <div >
                <h1>Assessment Update </h1>
                <form onSubmit={this.onSubmit}>
                    <label>
                        member name:
              <input
                            name="memberNmae"
                            type="text"
                            value={this.state.memberName}
                            onChange={this.onChange}
                        />
                    </label>

                    <br />
                    <br />
                    <label>
                        expert name:
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
                        phoneNumber:
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
                        days available:
                <input
                            name="daysAvailable"
                            type="text"
                            value={this.state.daysAvailable}
                            onChange={this.onChange}
                        />
                    </label>
                    <br />
                    <br />
                  
                     
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

export default withStyles(styles)(updateAssessment);

// /////*
// import React, { Component } from 'react';
// import axios from 'axios';

// class updateAssessment extends Component {
 
//     state={
//       _id: null,  
//       memberName:'',
//       expertName:'',
//       masterClass:'',
//       educationalOrg:'',
//       phoneNumber:'',
//       daysAvailable:''
//     }
     
//     updateMemberName=(_id,memberName)=>{
//       axios.put(`http://localhost:5000/api/assessments/${_id}`,{
//       memberName:memberName
//       }
//       ).then(res => {this.setState({assessment:[...this.state.updateAssessment,res.data]})})
//       .catch(e=> "error")
//       alert('Member name updated successfully!')
//     }

//     updateExpertName=(_id,expertName)=>{
//       axios.put(`http://localhost:5000/api/assessments/${_id}`,{
//       expertName:expertName
//       }
//       ).then(res => {this.setState({assessment:[...this.state.updateAssessment,res.data]})})
//       .catch(e=> "error")
//       alert('Expert name updated successfully!')
//     }

//     updateMasterClass=(_id,masterClass)=>{
//       axios.put(`http://localhost:5000/api/assessments/${_id}`,{
//       masterClass:masterClass
//       }
//       ).then(res => {this.setState({assessment:[...this.state.updateAssessment,res.data]})})
//       .catch(e=> "error")
//       alert('Master class updated successfully!')
//     }

//     updateEducationalOrg=(_id,educationalOrg)=>{
//       axios.put(`http://localhost:5000/api/assessments/${_id}`,{
//       educationalOrg:educationalOrg
//       }
//       ).then(res => {this.setState({assessment:[...this.state.updateAssessment,res.data]})})
//       .catch(e=> "error")
//       alert('Educational Organisation updated successfully!')
//     }

//     updatePhoneNumber=(_id,phoneNumber)=>{
//       axios.put(`http://localhost:5000/api/assessments/${_id}`,{
//         phoneNumber:phoneNumber
//       }
//       ).then(res => {this.setState({assessment:[...this.state.updateAssessment,res.data]})})
//       .catch(e=> "error")
//       alert('Phone number of work updated successfully!')
//     }

//     updateDaysAvailable=(_id,daysAvailable)=>{
//       axios.put(`http://localhost:5000/api/assessments/${_id}`,{
//         daysAvailable:daysAvailable
//       }
//       ).then(res => {this.setState({assessment:[...this.state.updateAssessment,res.data]})})
//       .catch(e=> "error")
//       alert('Days available updated successfully!')
//     }


    
//     onSubmitMemberName=(e)=>{
//        e.preventDefault();
//         this.updateMemberName(this.state._id,this.state.memberName);
//     }

//     onSubmitExpertName=(e)=>{
//       e.preventDefault();
//        this.updateExpertName(this.state._id,this.state.expertName);
//      }

//     onSubmitMasterClass=(e)=>{
//     e.preventDefault();
//      this.updateMasterClass(this.state._id,this.state.masterClass);
//    }

//     onSubmitEducationalOrg=(e)=>{
//    e.preventDefault();
//    this.updateEducationalOrg(this.state._id,this.state.educationalOrg);
// }

//     onSubmitPhoneNumber=(e)=>{
//    e.preventDefault();
//    this.updatePhoneNumber(this.state._id,this.state.phoneNumber);
// }  

// onSubmitDaysAvailable=(e)=>{
//   e.preventDefault();
//    this.updateDaysAvailable(this.state._id,this.state.daysAvailable);
// }  


//    onChange=(e)=>this.setState({[e.target.name]:e.target.value});
    
//    render() {
    
//     return (
//       <div >
//       <label> Id: <input name="_id" type="text" value={this.state._id} onChange={this.onChange}  /></label>
//       <label>*this will be removed later and will use the id of the booked assessment </label> <br /> <br />
//       <form onSubmit={this.onSubmitMemberName}>
//       <label> Member Name: <input name="memberName" type="text" value={this.state.memberName} onChange={this.onChange} /></label>
//       {"  "}
//       <input type="submit" value="Update Member name" />
//       </form>
//       <form onSubmit={this.onSubmitExpertName}>
//       <label> Expert Name: <input name="ExpertName" type="text" value={this.state.expertName} onChange={this.onChange} /></label>
//       {"  "}
//       <input type="submit" value="Update Expert name" />
//       </form>
//       <form onSubmit={this.onSubmitMasterClass}>
//       <label> Master Class: <input name="masterClass" type="text" value={this.state.masterClass} onChange={this.onChange} /></label>
//       {"  "}
//       <input type="submit" value="Update Master class" />
//       </form>
//       <form onSubmit={this.onSubmitEducationalOrg}>
//       <label> Educational Organisation: <input name="educationalOrg" type="text" value={this.state.educationalOrg} onChange={this.onChange} /></label>
//       {"  "}
//       <input type="submit" value="Update Educational Org" />
//       </form>
//       <form onSubmit={this.onSubmitPhoneNumber}>
//       <label>  Phone Number: <input name="phoneNumber" type="Number" value={this.state.phoneNumber} onChange={this.onChange} /></label>
//       {"  "}
//       <input type="submit" value="Update Phone number" />
//       </form>
      
//   </div >
//     );
//   }
// }


// export default updateAssessment;
// */
