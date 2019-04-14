import React, { Component } from 'react';
import axios from 'axios';

class deleteAssessment extends Component {
 
    state={
            id: null,     
    }
    deleteAssess=(id)=>{
      axios.delete(`http://localhost:5000/api/assessments/${id}`)
      alert('Assessment deleted successfully')
    }    

    onSubmit=(e)=>{
        e.preventDefault();
         this.deleteAssess(this.state.id);
       }
       onChange=(e)=>this.setState({[e.target.name]:e.target.value});

  render() {
    return (
      <div >
      <form onSubmit={this.onSubmit}>
      <label>
        id: *this will be removed later and will use the id of the booked assessment
          <input
            name="id"
            type="text"
            value={this.state.id}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <h2>Are you sure you want to delete this booked assessment?</h2>
        <input 
          type="submit" 
          value="Yes" 
        style={{width:"200px"}}
        />
        
         </form>
         </div>
    );
  }
}

export default deleteAssessment;
