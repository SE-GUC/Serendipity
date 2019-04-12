import React, { Component } from 'react'
import axios from 'axios';

export class LoginPage extends Component {
  state={
    name:'',
    email:''
  }
  login(email,password){
    axios.post("localhost:5000/api/educationalOrganizations",{

        name:name,email:email}
      ).then(res =>
         this.setState({login:[...this.state.LoginPage,res.data]}))
      .catch(e=>"error")
alert('Login success!!')
  }
  render() {
    return (
      <div>
					<label>Email <input name="email" type="email" value={this.email}/> <br/></label>
          <label>Password <input name="password" type="string" value={this.password}/> <br/> </label>
          <button onClick={this.login}>Login</button>
      </div>
    )
  }
}

export default LoginPage
