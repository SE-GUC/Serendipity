import React, { Component } from 'react';
import axios from 'axios';
import '..';
import { Link } from 'react-router-dom';
//import Popup from 'reactjs-popup'

class updateWorkshop extends Component {
 
    state={
      title:'',
      eduOrganisation:'',
      duration:'',
      educator:'',
      price:'',
      description:'',
      location:''
    }
    
    updateCourse = (_id, schema) => {
      console.log(_id)
      console.log(schema)

      axios.put(`http://localhost:5000/api/courses/${_id}`, schema)
          .then(this.setState({ seeUpd: <Link to={`/workshop`} style={styles.linking}>See All workshops after Update? </Link> }))
          .catch(e => { alert(e); console.log(e) })
  }


     onUpdate=(e)=>{
       e.preventDefault();
       const { id } = this.props.match.params
       var schema = {};
       if (this.state.title) schema["title"] = this.state.title
       if (this.state.duration) schema["duration"] = this.state.duration
       if (this.state.educator) schema["educator"] = this.state.educator
       if (this.state.price) schema["price"] = this.state.price
       if (this.state.description) schema["description"] = this.state.description
       if (this.state.location) schema["location"] = this.state.location
       console.log(schema)
       console.log(id)

       this.updateworkshop(id, schema);
      // this.updateworkshop(this.props._id,this.state.title,this.state.eduOrganisation,this.state.duration,this.state.educator,this.state.price,this.state.description,this.state.location);
   
      }
    
   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  render() {
    
    return (
      <div >
      <h1>Update Workshop </h1>
      <form onUpdate={this.onUpdate}>
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
export default updateWorkshop;
