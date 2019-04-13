
import React, { Component } from 'react';
import ViewPartners from './ViewPartners'
import '../App.css';
import Axios from 'axios';
//import ViewPartners from './ViewPartners';

class GetAllPartners extends Component {
  getStyleWork = () => {
    return {
      backgroundColor : '#000',
      color : '#f0f0f0'
    }
  
  }
  constructor(props){
  super(props)
  this.state={
    partner:[],
    error:false,
    loading:true,
    clicked:false,
  }
}

componentDidMount() {
  Axios
  .get('http://localhost:5000/api/partners')
  .then(res=> this.setState({partner:res.data.data,loading:false}))
  .catch(error=> this.ERROR.bind(error))
}
render(){
  return this.state.error?<h1>process could not be complete</h1>:this.state.loading?
  <h1>loading please be patient</h1>
  :
  (<div className='GetAllPartners'>
  <h2 style={this.getStyleWork()}>PARTNERS</h2>
  <ViewPartners partner={this.state.partner}  />
  </div>
  )
}
ERROR=(error)=>{
  console.log(error)
  this.setState({error:true})
}
}

export default GetAllPartners;

