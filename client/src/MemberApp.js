import React, { Component } from 'react';
import './App.css';
import MemberProfile from './components/MemberProfile';

class MemberApp extends Component {
constructor (){
super ()
this.state = {
    id :'',
}
this.onChange = this.onChange.bind(this)
}
onChange = (e) => {
  
    this.setState({ [e.target.name]: e.target.value });
}
  


    render(){ 



        return(
            <div className="App">
            <label>
    ID : 
    <input name="id" type="text" value={this.state.id}  onChange={this.onChange} />                
</label>

            
            <MemberProfile id ={this.state.id}/>
            </div>
        );
    }
}
export default MemberApp;
