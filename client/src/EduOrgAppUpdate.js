import React, { Component } from 'react';
import axios from 'axios';


class EduOrgAppUpdate extends Component {

  getStyleEduOrg1 = () => {
    return {
      Color : '#f4f4f4',
      //text: 'center'
      //backgroundColor : '#003366'
    }
  
  }

  btnStyle= () => {
      return{
        background:'#333',
        padding: '5px',
        margin: '10px',
        align: 'center',
        float: 'center',
        //backgroundColor: '#fff',
        textAlign: 'center',
        borderRadius: '10px',
        color:'#fff',
        width: '130px',
        height: '50px'
        
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
 
    state={
      id: '',
      userName: '',
      name: '',
      password: '',
      email: '',
      masterClasses:'',
      courses: '',
      workshops: '',
      trainers: '',
      educators: '',
      trainingPrograms: '',
      description: '',
      contract: '',
      expirationDate: ''
    }
    updateEduOrg=(id,userName,name,password,email,masterClasses,courses,workshops,trainers,educators,trainingPrograms,description,contract,expirationDate)=>{
      axios.put(`http://localhost:5000/api/educationalOrganizations/${id}`,{

        userName:userName,
        name:name,
        password:password,
        email:email,
        masterClasses:masterClasses,
        courses:courses,
        workshops:workshops,
        trainers:trainers,
        educators:educators,
        trainingPrograms:trainingPrograms,
        description:description,
        contract:contract,
        expirationDate:expirationDate
      }
      ).then(res =>
         this.setState({EduOrgAppCreate:[...this.state.EduOrgAppCreate,res.data]}))
      .catch(e=>"error")
alert('Educatioinal Organization updated successfully!!')

      
      
     } 
     onSubmit=(e)=>{
       e.preventDefault();
       if((this.state.userName.length<3)||(this.state.password.length<8))
       alert('validations not satisfied,try again!')
       else
       this.updateEduOrg(this.state.userName,this.state.name,this.state.password,this.state.email,
        this.state.masterClasses,this.state.courses,this.state.workshops,this.state.trainers,
        this.state.educators,this.state.trainingPrograms,this.state.description,
        this.state.contract,this.state.expirationDate);
   
      }
    
   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  render() {
    
    return (
      <div >
      <h1 style = {this.ss()}>Update my account</h1>
      <form onSubmit={this.onSubmit}  style = {this.ss()}>
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
        <h4 style = {this.getStyleEduOrg1()}>
          Master Classes: 
          <input
            name="masterClasses"
            type="array"
            value={this.state.masterClasses}
            onChange={this.onChange} 
            />
        </h4>
        <br />
        <br />
        <h4 style = {this.getStyleEduOrg1()}>
          Courses: 
          <input
            name="courses"
            type="array"
           value={this.state.courses}
           onChange={this.onChange} 
            />
        </h4>
        <br />
        <br />
        <h4 style = {this.getStyleEduOrg1()}>
          Workshops: 
          <input
            name="workshops"
            type="array"
           value={this.state.workshops}
           onChange={this.onChange} 
            />
        </h4>
        <br />
        <br />
        <h4 style = {this.getStyleEduOrg1()}>
          Trainers: 
          <input
            name="trainers"
            type="array"
            value={this.state.trainers}
           onChange={this.onChange} 
            />
        </h4>
        <br />
        <br />
        <h4 style = {this.getStyleEduOrg1()}>
          Educators:  
          <input
            name="educators"
            type="array"
            value={this.state.educators}
           onChange={this.onChange} 
            />
        </h4> 
        <br />
        <br />
        <h4 style = {this.getStyleEduOrg1()}>
          Training Programs:   
          <input
            name="trainingPrograms"
            type="array"
            value={this.state.trainingPrograms}
           onChange={this.onChange} 
            />
        </h4>   
        <br />
        <br />
        <h4 style = {this.getStyleEduOrg1()}>
          Description:   
          <input
            name="description"
            type="text"
            value={this.state.description}
           onChange={this.onChange} 
            />
        </h4>   
        <br />
        <br />
        <h4 style = {this.getStyleEduOrg1()}>
          Contract:    
          <input
            name="contract"
            type="boolean"
            value={this.state.contract}
           onChange={this.onChange} 
            />
        </h4>  
        <br />
        <br />
        <h4 style = {this.getStyleEduOrg1()}>
          Expiration Date:     
          <input
            name="expirationDate"
            type="date"
            value={this.state.expirationDate}
           onChange={this.onChange} 
            />
        </h4>   
        
        <br />
        <br />
        
        {/* <button onClick={this.addjob.bind(this)} style={btnStyle}> Submit</button> */}
        <input 
          style = {this.btnStyle()}
          type="submit" 
          value="Submit" 
          //className="btn"
         // style={{flex: '1'}}
        />
         </form>
         </div>
    );
  }
}


export default EduOrgAppUpdate;
