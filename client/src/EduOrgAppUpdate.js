import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



class EduOrgAppUpdate extends Component {

  getStyleEduOrg1 = () => {
    return {
      Color : '#f4f4f4',
      //text: 'center'
      //backgroundColor : '#003366'
    }
  
  }
  getr = () =>{
    return{
      Color: '#ff0000'
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
      // masterClasses:'',
      // courses: '',
      // workshops: '',
      // trainers: '',
      // educators: '',
      // trainingPrograms: '',
      // description: '',
      // contract: '',
      //expirationDate: ''
    }
    // masterClasses,courses,workshops,trainers,educators,trainingPrograms,description,contract,
    updateEduOrg=(id,userName,name,password,email)=>{
      axios.put(`http://localhost:5000/api/educationalOrganizations/${id}`,{

        userName:userName,
        name:name,
        password:password,
        email:email
        // masterClasses:masterClasses,
        // courses:courses,
        // workshops:workshops,
        // trainers:trainers,
        // educators:educators,
        // trainingPrograms:trainingPrograms,
        // description:description,
        // contract:contract,
        //expirationDate:expirationDate
      }
      ).then(res =>
         this.setState({EduOrgAppUpdate:[...this.state.EduOrgAppUpdate,res.data]}))
      .catch(e=>"error")
alert('Educatioinal Organization updated successfully!!')

      
      
     } 
     onSubmit=(e)=>{
       e.preventDefault();
       if((this.state.userName.length<3 && this.state.userName.length>0)||(this.state.password.length<8 && this.state.password.length>0))
       alert('validations not satisfied,try again!')
       else
       this.updateEduOrg(this.state.id,this.state.userName,this.state.name,this.state.password,this.state.email);
      //  this.state.expirationDate);
        // this.state.masterClasses,this.state.courses,this.state.workshops,this.state.trainers,
        // this.state.educators,this.state.trainingPrograms,this.state.description,
        // this.state.contract,
   
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
          User Name <h5 style = {this.getr()}>(*required)</h5> 
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
          Name <h5 style = {this.getr()}>(*required)</h5> 
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
          Password <h5 style = {this.getr()}>(*required)</h5> 
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
          Email <h5 style = {this.getr()}>(*required)</h5> 
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChange} 
            />
        </h4>
        <br />
        <br />
        {/* <h4 style = {this.getStyleEduOrg1()}>
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
        <br /> */}
        {/* <h4 style = {this.getStyleEduOrg1()}>
          Expiration Date:     
          <input
            name="expirationDate"
            type="date"
            value={this.state.expirationDate}
           onChange={this.onChange} 
            />
        </h4>    */}
        
       
        
        {/* <button onClick={this.addjob.bind(this)} style={btnStyle}> Submit</button> */}


        <input 
          style = {this.btnStyle()}
          type="submit" 
          value="Submit" 
          //className="btn"
         // style={{flex: '1'}}
        />
        <br></br>
        <Link  to="/eduorg/update">Update masterClasses</Link>{'  | '}
        
        <Link  to="/eduorg/update">Update courses</Link>{' | '}
        
        <Link  to="/eduorg/update">Update workshops</Link>{' | '}
        
         </form>
         </div>
    );
  }
}


export default EduOrgAppUpdate;
