import React, { Component } from 'react';
import axios from 'axios';
import '..';
import { Link } from 'react-router-dom';

//import Popup from 'reactjs-popup'

class createWorkshop extends Component {
 
    state={
      title:'',
      eduOrganisation:'',
      duration:'',
      educator:'',
      price:'',
      description:'',
      location:''
    }
    addworkshop = ( schema) => {
      axios.post(`http://localhost:5000/api/workshops/`, schema)
          .then(this.setState({ seeUpd: <Link to={`/workshop`} style={styles.linking}> Workshop was created successfully!! See All workshops after your workshop was added? </Link> }))
          .catch(e => { alert(e); console.log(e) })
  }
     onSubmit=(e)=>{
      e.preventDefault();
      if(!this.state.title||!this.state.eduOrganisation||!this.state.educator||!this.state.price)
          alert('Information not sufficent!')
     else{
      var schema = {};
      if (this.state.title) schema["title"] = this.state.title
      if (this.state.duration) schema["duration"] = this.state.duration
      if (this.state.educator) schema["educator"] = this.state.educator
      if (this.state.price) schema["price"] = this.state.price
      if (this.state.description) schema["description"] = this.state.description
      if (this.state.location) schema["location"] = this.state.location
      if (this.state.eduOrganisation) schema["eduOrganisation"] = this.state.eduOrganisation
      this.addworkshop(schema);
     } 
    }
    
   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  render() {
    
    return (
      <div >
      <h1>Create Workshop </h1>
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
        EduOrganisation:
          <input
            name="eduOrganisation"
            type="text"
            value={this.state.eduOrganisation}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
        Duration:
          <input
            name="duration"
            type="number"
            value={this.state.duration}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Educator:
          <input
            name="educator"
            type="text"
            value={this.state.educator}
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
        {/* <label>
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
        please select job state:
        <input
          name="state"
          type="text"
          value={this.state.state}
         onChange={this.onChange} 
            />
        </label>
        <br />
        <br /> */}
        
        {/* <button onClick={this.addjob.bind(this)} style={btnStyle}> Submit</button> */}
        <input 
          type="submit" 
          value="Submit" 
          //className="btn"
         // style={{flex: '1'}}
        />
         </form>
         {this.state.seeUpd}
         </div>
    );
  }
}
const btnStyle={
background:'#000000',
color:'#fff'

}
const styles = {
  linking: {
      color: '#FF0000',
  }
}
export default createWorkshop;
