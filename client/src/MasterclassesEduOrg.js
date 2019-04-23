// import WorkshopAppEO from '../src/WorkshopAppEO';
// import axios from "axios"
// import React, { Component } from 'react';
// import MasterclassesEO from './components/MasterclassesEO';



// class MasterclassesEduOrg extends Component {
//       getStyleWork = () => {
//         return {
//           backgroundColor : '#000',
//           color : '#f0f0f0'
//         }
      
//       }
//       constructor(props){
//       super(props)
//       this.state={
//         workshop:[],
//         error:false,
//         loading:true,
//         clicked:false,//yara amr
//       }
//     }
//     ggg=() => {
//         const { id } = this.props.match.params
//         console.log(id+"dadadadaxadaxdxd")
//         var lastPart = window.location.href.split("/").pop();
//         console.log(lastPart)
//         console.log(window.location.href)
//         const s = lastPart
//         //5cb9d1188e100a2cdc8d4d0a
//         return s;
//     }
//     componentDidMount() {
//         const s = this.ggg();
//       axios
//       .get('http://localhost:5000/api/educationalOrganizations/w/'+s)
//       .then(res=> this.setState({workshop:res.data.data,loading:false}))
//       .catch(error=> this.ERROR.bind(error))
//     }
    
//     delMasterclasses =(_id) => {
//       axios.delete(`http://localhost:5000/api/masterclasses/${_id}`)
//       window.location.reload()
//       console.log(_id)
//     }
//     updateMasterclasses =(_id) => {
//     //   this.props.history.push(`workshop/updateWorkshop/${_id}`);
//     //   console.log(_id)
//     //redirect to marina
//     }
//     onClick=() =>{
//       this.props.history.push("/createMasterclass")
//     }
    
//     render(){
//       return this.state.error?<h1>process couldnot be complete</h1>:this.state.loading?
//       <h1>loading please be patient</h1>
//       :
//       (<div className='MasterclassesEduOrg'>
//       <form componentDidMount={this.componentDidMount}>

    
//       <h2 style={this.getStyleWork()}>MasterClasses</h2>
//       {/* <p><button  onClick={this.onClick} style={btnStyle1}>create workshop</button></p> */}
//       </form>
    
//       <MasterclassesEO workshop={this.state.workshop} delMasterclasses={this.delMasterclasses} updateMasterclasses={this.updateMasterclasses} />
    
//       </div>
//       )
//     }
//     ERROR=(error)=>{
//       console.log(error)
//       this.setState({error:true})
//     }
    
    
    
    
    
// }
 
// export default MasterclassesEduOrg;

// //5cb9d1188e100a2cdc8d4d0a

import React, { Component } from 'react';
//import logo from './logo.svg';
import Masterclasses from './components/Masterclasses'
import './App.css';
import axios from 'axios';
//import Masterclasses from './components/Masterclasses';

class MasterclassesEduOrg extends Component {
constructor(props){
  super(props)
  this.state={
    masterclasses:[],
    error:false,
    loading:true
  }
}
Choose = (id)=>{
  this.setState( 
    { masterclasses : this.state.masterclasses.map( current => {
       if(current._id===id) {
         var s=''
         current.choice=!current.choice
         for (var key in current) {
           if (current.hasOwnProperty(key)) {
              s+=(key + " : " + current[key]);
             
           }
       }
       current.title=s
      
       }
       return current
    }) })
 }
 delMasterclass= (id)=> {
  this.setState( 
    { masterclasses:[...this.state.masterclasses.filter((current)=>current._id!==id)]
    })
  axios
.delete(`http://localhost:5000/api/masterclasses/${id}`)
//.then(res=>this.setState({masterclasses:res.data.data}))
.then(alert(`deleted masterclass with id ${id}`))
.catch(error=> this.ERROR.bind(error))
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
  .then(res=> this.setState({masterclasses:res.data.data,loading:false}))
  .catch(error=> this.ERROR.bind(error))
}
render(){
  return this.state.error?<h1>process couldnot be complete</h1>:this.state.loading?
  <h1>loading please be patient</h1>
  :
  (<div className='App'>
  <h1>MasterClasses</h1>
  <Masterclasses masterclasses={this.state.masterclasses} Choose={this.Choose} delMasterclass={this.delMasterclass}/>
  </div>
  )
}
ERROR=(error)=>{
  console.log(error)
  this.setState({error:true})
}
}

export default MasterclassesEduOrg;
