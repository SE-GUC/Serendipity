import React, { Component } from 'react';
import axios from 'axios';

class PartnerUpdate extends Component {
 
    state={
      _id: null,  
      email:'',
      name:'',
      password:'',
      description:'',
      partners:'',
      boardOfMembers:'',
      fieldOfWork:'',
      pastProjects:''
    }
     
    updatePartnerEmail=(_id,email)=>{
      axios.put(`http://localhost:5000/api/partners/${_id}`,{
      email:email
      }
      ).then(res => {this.setState({partner:[...this.state.PartnerUpdate,res.data]})})
      .catch(e=> "error")
      alert('Email updated successfully!')
    }

    updatePartnerName=(_id,name)=>{
      axios.put(`http://localhost:5000/api/partners/${_id}`,{
      name:name
      }
      ).then(res => {this.setState({partner:[...this.state.PartnerUpdate,res.data]})})
      .catch(e=> "error")
      alert('Name updated successfully!')
    }

    updatePartnerPassword=(_id,password)=>{
      axios.put(`http://localhost:5000/api/partners/${_id}`,{
      password:password
      }
      ).then(res => {this.setState({partner:[...this.state.PartnerUpdate,res.data]})})
      .catch(e=> "error")
      alert('Password updated successfully!')
    }

    updatePartnerDescription=(_id,description)=>{
      axios.put(`http://localhost:5000/api/partners/${_id}`,{
      description:description
      }
      ).then(res => {this.setState({partner:[...this.state.PartnerUpdate,res.data]})})
      .catch(e=> "error")
      alert('Description updated successfully!')
    }

    updatePartnerFieldOfWork=(_id,fieldOfWork)=>{
      axios.put(`http://localhost:5000/api/partners/${_id}`,{
        fieldOfWork:fieldOfWork
      }
      ).then(res => {this.setState({partner:[...this.state.PartnerUpdate,res.data]})})
      .catch(e=> "error")
      alert('Field of work updated successfully!')
    }

    updatePartnerBoardOfMembers=(_id,boardOfMembers)=>{
      axios.put(`http://localhost:5000/api/partners/${_id}`,{
        boardOfMembers:boardOfMembers
      }
      ).then(res => {this.setState({partner:[...this.state.PartnerUpdate,res.data]})})
      .catch(e=> "error")
      alert('Board of members updated successfully!')
    }

    
    updatePartnerPastProjects=(_id,pastProjects)=>{
      axios.put(`http://localhost:5000/api/partners/${_id}`,{
        pastProjects:pastProjects
      }
      ).then(res => {this.setState({partner:[...this.state.PartnerUpdate,res.data]})})
      .catch(e=> "error")
      alert('Past projects updated successfully!')
    }

    updatePartnerPartners=(_id,partners)=>{
      axios.put(`http://localhost:5000/api/partners/${_id}`,{
        partners:partners
      }
      ).then(res => {this.setState({partner:[...this.state.PartnerUpdate,res.data]})})
      .catch(e=> "error")
      alert('Your partners have been updated successfully!')
    }

     
    onSubmitEmail=(e)=>{
       e.preventDefault();
        this.updatePartnerEmail(this.state._id,this.state.email);
    }

    onSubmitName=(e)=>{
      e.preventDefault();
       this.updatePartnerName(this.state._id,this.state.name);
     }

    onSubmitPassword=(e)=>{
    e.preventDefault();
     this.updatePartnerPassword(this.state._id,this.state.password);
   }

    onSubmitDescription=(e)=>{
   e.preventDefault();
   this.updatePartnerDescription(this.state._id,this.state.description);
}

    onSubmitFieldOfWork=(e)=>{
   e.preventDefault();
   this.updatePartnerFieldOfWork(this.state._id,this.state.fieldOfWork);
}  

onSubmitBoardOfMembers=(e)=>{
  e.preventDefault();
   this.updatePartnerBoardOfMembers(this.state._id,this.state.boardOfMembers);
}  

onSubmitPastProjects=(e)=>{
  e.preventDefault();
   this.updatePartnerPastProjects(this.state._id,this.state.pastProjects);
}  

onSubmitPartners=(e)=>{
  e.preventDefault();
   this.updatePartnerPartners(this.state._id,this.state.partners);
}  


   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
    
   render() {
    
    return (
      <div >
      <label> Id: <input name="_id" type="text" value={this.state._id} onChange={this.onChange}  /></label>
      <label>*this will be removed later and will use the id of the signed in partner </label> <br /> <br />
      <form onSubmit={this.onSubmitEmail}>
      <label> Email: <input name="email" type="email" value={this.state.email} onChange={this.onChange} /></label>
      {"  "}
      <input type="submit" value="Update Email" />
      </form>
      <form onSubmit={this.onSubmitName}>
      <label> Name: <input name="name" type="text" value={this.state.name} onChange={this.onChange} /></label>
      {"  "}
      <input type="submit" value="Update Name" />
      </form>
      <form onSubmit={this.onSubmitPassword}>
      <label> Password: <input name="password" type="text" value={this.state.password} onChange={this.onChange} /></label>
      {"  "}
      <input type="submit" value="Update Password" />
      </form>
      <form onSubmit={this.onSubmitDescription}>
      <label> Description: <input name="description" type="text" value={this.state.description} onChange={this.onChange} /></label>
      {"  "}
      <input type="submit" value="Update Description" />
      </form>
      <form onSubmit={this.onSubmitFieldOfWork}>
      <label> Field Of Work: <input name="fieldOfWork" type="text" value={this.state.fieldOfWork} onChange={this.onChange} /></label>
      {"  "}
      <input type="submit" value="Update Field Of Work" />
      </form>
      <form onSubmit={this.onSubmitBoardOfMembers}>
      <label> Board Of Members: </label> <br></br><textarea name="boardOfMembers" type="text" style={{width:"300px",height:"100px"}}  value={this.state.boardOfMembers} onChange={this.onChange} />
      {"  "}
      <input type="submit" value="Update Board Of Members" />
      </form>
      <form onSubmit={this.onSubmitPastProjects}>
      <label> Past Projects: </label> <br></br><textarea name="pastProjects" type="text" style={{width:"300px",height:"100px"}} value={this.state.pastProjects} onChange={this.onChange} />
      {"  "}
      <input type="submit" value="Update Past Projects" />
      </form>
      <form onSubmit={this.onSubmitPartners}>
      <label> Partners: </label> <br></br><textarea name="partners" type="text" style={{width:"300px",height:"100px"}} value={this.state.partners} onChange={this.onChange} />
      {"  "}
      <input type="submit" value="Update Partners" />
      </form>
      
  </div >
    );
  }
}


export default PartnerUpdate;