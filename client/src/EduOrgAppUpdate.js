import React, { Component } from 'react';
import axios from 'axios';
//import '..';
import { Link } from 'react-router-dom';
//import Popup from 'reactjs-popup'

class EduOrgAppUpdate extends Component {
 
    state={
      userName:'',
      name:'',
      password:'',
      email:'',
      description: '',
      
    }
    
    updateworkshop = (_id, schema) => {
      console.log(_id)
      console.log(schema)

      axios.put(`http://localhost:5000/api/educationalOrganizations/${_id}`, schema)
          .then(this.setState({ seeUpd: <Link to={`/eduorg/myaccount`} style={styles.linking}>See your account Update? </Link> }))
          .catch(e => { alert(e); console.log(e) })
  }


     onUpdate=(e)=>{
       e.preventDefault();
       const { id } = this.props.match.params
       var schema = {};
       if (this.state.userName) schema["userName"] = this.state.userName
       if (this.state.name) schema["name"] = this.state.name
       if (this.state.password) schema["password"] = this.state.password
       if (this.state.email) schema["email"] = this.state.email
       if (this.state.description) schema["description"] = this.state.description

       
       console.log(schema)
       console.log(id)

       this.updateworkshop(id, schema);
      // this.updateworkshop(this.props._id,this.state.title,this.state.eduOrganisation,this.state.duration,this.state.educator,this.state.price,this.state.description,this.state.location);
   
      }
    
   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  render() {
    
    return (
      <div >
      <h1>Update your account </h1>
      <form onUpdate={this.onUpdate}>
      <label>
          Username:
          <input
            name="userName"
            type="text"
            value={this.state.userName}
            onChange={this.onChange} 
            />
        </label>
        
        <br />
        <br />
        <label>
        Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
        Password:
          <input
            name="password"
            type="number"
            value={this.state.password}
            onChange={this.onChange} 
            />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={this.state.email}
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
      color: '#003366',
  }
}
export default EduOrgAppUpdate;
