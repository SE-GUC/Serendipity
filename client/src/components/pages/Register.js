import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import MemberProfile from '../MemberProfile';
import MemberForm from '../MemberForm';
import axios from 'axios';
class Register  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            member : true 
        }
    
  
    }
 

    render(){
      const  buttonstyle ={
            color: '#FFFFFF',
            margin: 20,
            padding: 20, 
            backgroundColor:'#31323C',
            borderStyle: 'outset',
            width : 200 ,
    
    }
   
       
    return (
    <div> 
    
 <MemberForm /> 
   
    </div>


    );
    }
}
  
export default Register;