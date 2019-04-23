import WorkshopAppEO from '../src/WorkshopAppEO';
import axios from "axios"
import React, { Component } from 'react';
import WorkshopsEO from './components/WorkshopsEO';



class workshopsEduOrg extends Component {
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
      .get('http://localhost:5000/api/educationalOrganizations/w/'+s)  //auth======
      .then(res=> this.setState({workshop:res.data.data,loading:false}))
      .catch(error=> this.ERROR.bind(error))
    }
    
    delWorkshops =(_id) => {
      axios.delete(`http://localhost:5000/api/workshops/${_id}`)
      window.location.reload()
      console.log(_id)
    }
    updateWorkshops =(_id) => {
    //  window.location = `http://localhost:5000/workshop/updateWorkshop/${_id}`
    window.location = window.location.protocol + "//" + window.location.host + "/" +`workshop/updateWorkshop/${_id}`
     // this.props.history.push(`workshop/updateWorkshop/${_id}`);
    //  window.location.reload()
      console.log(_id)
    }
    onClick=() =>{
      this.props.history.push("/workshop/createWorkshop")
      
    }
    
    render(){
      return this.state.error?<h1>process couldnot be complete</h1>:this.state.loading?
      <h1>loading please be patient</h1>
      :
      (<div className='workshopsEduOrg'>
      <form componentDidMount={this.componentDidMount}>

    
      <h2 style={this.getStyleWork()}>WORKSHOPS</h2>
      {/* <p><button  onClick={this.onClick} style={btnStyle1}>create workshop</button></p> */}
      </form>
    
      <WorkshopsEO workshop={this.state.workshop} delWorkshops={this.delWorkshops} updateWorkshops={this.updateWorkshops} />
    
      </div>
      )
    }
    ERROR=(error)=>{
      console.log(error)
      this.setState({error:true})
    }
    
    
    
    
    
}
 
export default workshopsEduOrg;

//5cb9d1188e100a2cdc8d4d0a