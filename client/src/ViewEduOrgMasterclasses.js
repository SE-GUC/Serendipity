import ViewMasterclassesEduOrg from './components/ViewMasterclassesEduOrg'
import axios from "axios"
import React, { Component } from 'react';
import {Link} from 'react-router-dom';






class ViewEduOrgMasterclasses extends Component {
      getStyleWork = () => {
        return {
          backgroundColor : '#000',
          color : '#f0f0f0'
        }
      
      }
      constructor(props){
      super(props)
      this.state={
        workshop:[],
        error:false,
        loading:true,
        clicked:false,//yara amr
      }
    }
    ggg=() => {
        const { id } = this.props.match.params
        console.log(id+"dadadadaxadaxdxd")
        var lastPart = window.location.href.split("/").pop();
        console.log(lastPart)
        console.log(window.location.href)
        const s = lastPart
        //5cb9d1188e100a2cdc8d4d0a
        return s;
    }
    componentDidMount() {
        const s = this.ggg();
      axios
      .get('http://localhost:5000/api/educationalOrganizations/masterclasses/'+s)
      .then(res=> this.setState({workshop:res.data.data,loading:false}))
      .catch(error=> this.ERROR.bind(error))
    }
    
    
   
    
    render(){
      return this.state.error?<h1>process could not be complete</h1>:this.state.loading?
      <h1>loading please be patient</h1>
      :
      (<div className='ViewEduOrgWorkshops'>
      <form componentDidMount={this.componentDidMount}>

    
      <h2 style={this.getStyleWork()}>Masterclasses</h2>
       <Link  to="/eduorg">go back to all Educational organizations</Link>
      {/* <p><button  onClick={this.onClick} style={btnStyle1}>create workshop</button></p> */}
      </form>
    
      <ViewMasterclassesEduOrg workshop={this.state.workshop} />
    
      </div>
      )
    }
    ERROR=(error)=>{
      console.log(error)
      this.setState({error:true})
    }
    
    
    
    
    
}
 
export default ViewEduOrgMasterclasses;

//5cb9d1188e100a2cdc8d4d0a