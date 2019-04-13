import React, { Component } from 'react';
import axios from 'axios';


class EduOrgAppDelete extends Component {

  getStyleEduOrg1 = () => {
    return {
      Color : '#f4f4f4',
      //backgroundColor : '#003366'
    }
  
  }
  ss = () =>{
    return{
        //textAlign:'left',
       // backgroundColor: "808080",
        float:'center',
        background: '#d3d3d3'
    }
}
  btnStyle= () => {
    return{
        background:'#333',
        padding: '5px',
        margin: '10px',
        align: 'center',
        float: 'center',
        textAlign: 'center',
        borderRadius: '10px',
        color:'#fff',
        width: '130px',
        height: '50px'
    
  }


}

 
    state={
      userName: '',
      name: '',
      password: '',
      email: '',
     
    }
    delEduOrg=(id) =>{//,masterClasses,courses,workshops,trainers,educators,trainingPrograms,description,contract,expirationDate)=>{
      axios.delete("http://localhost:5000/api/educationalOrganizations/"+id)
     
      alert('Educatioinal Organization deleted successfully!!')

      
      
     } 
     onSubmit=(e)=>{
       e.preventDefault();
       if(!this.state.userName||(this.state.userName.length<3)||!this.state.name||!this.state.password||(this.state.password.length<8)||!this.state.email)
       alert('validations not satisfied,try again!')
       else
       this.delEduOrg(this.state.id);
       
   
      }
    
   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  render() {
    
    return (
      <div >
      <h1 style = {this.ss()}>Delete Educatioinal Organization</h1>
      <form style = {this.ss()}onSubmit={this.onSubmit}>
      <h4 style = {this.getStyleEduOrg1()}>
          id: 
          <input
            name="id"
            type="text"
            value={this.state.id}
            onChange={this.onChange} 
            />
        </h4>
        
        <br />
        <br />
      <h4 style = {this.getStyleEduOrg1()}>
          User Name: 
          <input
            name="userName"
            type="text"
            value={this.state.userName}
            onChange={this.onChange} 
            />
        </h4>
        
        <br />
        <br />
        <h4 style = {this.getStyleEduOrg1()}>
          Name: {'       '}
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onChange} 
            />
        </h4>
        <br />
        <br />
        <h4 style = {this.getStyleEduOrg1()}>
          Password: 
          <input
            name="password"
            type="text"
            value={this.state.password}
            onChange={this.onChange} 
            />
        </h4>
         <br />
        <br />
        <h4 style = {this.getStyleEduOrg1()}>
          Email: 
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChange} 
            />
        </h4>
        <br />
        <br />
        
        
        
        <input 
          style = {this.btnStyle()}
          type="submit" 
          value="Submit" 
         
        />
         </form>
         </div>
    );
  }
}


export default EduOrgAppDelete;
