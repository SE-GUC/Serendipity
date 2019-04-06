import React, { Component } from 'react';
import axios from 'axios';
import './';
import Popup from 'reactjs-popup'

class Jobapp extends Component {
 
    state={
      title:'',
      location:'',
      startdate:'',
      enddate:'',
      salary:'',
      description:'',
      dailyhours:'',
      partner:''
    }
    addjob=(title,location,startdate,enddate,salary,dailyhours,partner,description)=>{
      axios.post("http://localhost:5000/api/jobs/",{

        title:title,location:location,startdate:startdate,enddate:enddate,salary:salary,dailyhours:dailyhours,partner:partner,description:description
      }
      ).then(res => this.setState({jobapp:[...this.state.Jobapp,res.data]}))
      .catch(e=>
        <Popup> 
          <div> 
            Job couldn't be created, try again
          </div>
        </Popup>


      )
      
     } 
     onSubmit=(e)=>{
       e.preventDefault();
       this.addjob(this.state.title,this.state.location,this.state.startdate,this.state.enddate,this.state.salary,this.state.dailyhours,this.state.partner,this.state.description);
    //    <Popup> 
    //    <div> 
    //      Job created successfully
    //    </div>
    //  </Popup>
      }
    
   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  render() {
    
    return (
      <div >
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
          Start Date:
          <input
            name="startdate"
            type="date"
            value={this.state.startdate}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          End Date:
          <input
            name="enddate"
            type="date"
            value={this.state.enddate}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Salary:
          <input
            name="salary"
            type="number"
            value={this.state.salary}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Daily Hours:
          <input
            name="dailyhours"
            type="number"
           value={this.state.dailyhours}
           onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Partner:
          <input
            name="partner"
            type="text"
           value={this.state.partner}
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
export default Jobapp;
