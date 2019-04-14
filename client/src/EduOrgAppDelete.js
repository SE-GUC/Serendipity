import React, { Component } from 'react';
import axios from 'axios';


class EduOrgAppDelete extends Component {

  getStyleEduOrg1 = () => {
    return {
      Color : '#f4f4f4',
      //backgroundColor : '#003366'
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
  btnStyle= () => {
    return{
        background:'#333',
        padding: '5px',
        margin: '10px',
        align: 'center',
        float: 'center',
        textAlign: 'center',
        borderRadius: '10px',
        color:'#fff',
        width: '130px',
        height: '50px'
    
  }


}

 
    state={
      userName: '',
      name: '',
      password: '',
      email: '',
     
    }
    delEduOrg=(id) =>{
      axios.delete("http://localhost:5000/api/educationalOrganizations/"+id)
     
     // alert('Educatioinal Organization deleted successfully!!')

      
      
     } 
    
  render() {
    const { id } = this.props.match.params
    return (
      <div >
      <h1 style = {this.ss()}>Delete Educational Organization</h1>
      <h2>Your account was deleted successfully!!</h2>
      {this.delEduOrg(id)}
     
      
         </div>
    );
  }
}


export default EduOrgAppDelete;
