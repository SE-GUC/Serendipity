import React, { Component } from 'react';
import axios from 'axios';
//import './';
//import Popup from 'reactjs-popup'
//import { useAlert } from 'react-alert'

class MasterclassCreate extends Component {
 
    state={
        title:'',
        duration:'',
        price:'',
        description:'',
        location:'',  
        Eduorganization:'',
        courseIDs :[], 
        //workshopsIDs :'',
        //applicants:''
     
    }
    addMasterclass=(title,duration,price,description,location,Eduorganization,courseIDs)=>{
    
      axios.post("http://localhost:5000/api/masterclasses/",{

        title:title,duration:duration,price:price,description:description, location:location,Eduorganization:Eduorganization,courseIDs:courseIDs//,workshopsIDs:workshopsIDs
      }
     
      ).then(res => {this.setState({masterclass:[...this.state.MasterclassCreate,res.data]})})
      
    
      .catch(e=> "error")
      alert('Masterclass was created succesfully')


        // <Popup> 
        //   <div> 
        //     Admincouldn't be created, you did not meet validations, try again
        //   </div>
        // </Popup>


     // )
    }
      
     
     onSubmit=(e)=>{
       e.preventDefault();
       if(!this.state.title){
         alert('title cannot be empty')
       }
       else if(!this.state.duration||!this.state.location||!this.state.price||!this.state.description||!this.state.Eduorganization)
       alert('validations not satisfied,try again :)!')
      
      else
       
       
       this.addMasterclass(this.state.title,this.state.duration,this.state.price,this.state.description,this.state.location,this.state.Eduorganization,this.state.courseIDs);//,this.workshopsIDs);
     
   
      }
    
   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
   onChangeCourses=(e)=>{
    const ID=e.target.value+"" 
    var newIDs=this.state.courseIDs
    if(ID.length===24)
      newIDs.push(ID)
     this.setState({courseIDs:newIDs})
     console.log(newIDs)
     newIDs=[]
    }
   render() {
    
    return (
      <div >
      <h1>Create Masterclass </h1>
      <form onSubmit={this.onSubmit}>
      <label>
          Title:
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.onChange} 
            />
        </label>
        
        <br />
        <br />
        <label>
          Duration:
          <input
            name="duration"
            type="text"
            value={this.state.duration}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Price:
          <input
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Description:
          <input
            name="description"
            type="text"
            value={this.state.description}
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
        Education organization:
        <input
          name="Eduorganization"
          type="text"
          value={this.state.Eduorganization}
         onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Courses:
          <input
            name="courseIDs"
            type="text"
           onChange={this.onChangeCourses} 
            />
        </label>
        <br />
        <br />
       
       
        
        {/* <button onClick={this.addjob.bind(this)} style={btnStyle}> Submit</button> */}
        <input 
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
const btnStyle={
background:'#000000',
color:'#fff'

}
export default MasterclassCreate;
