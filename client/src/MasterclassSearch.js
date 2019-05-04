import React, { Component } from 'react';
import Masterclasses from './components/MasterclassesY'
import './App.css';
import Axios from 'axios';

class MasterclassSearch extends Component {
constructor(props){
  super(props)
  this.state={
    masterclasses:[],
    searchBy:"",
    IDorName:false,
    error:false,
    loading:true
  }
}
change=(e)=>{
    console.log(e.target.value)
    this.setState({searchBy:e.target.value})
}
  
 search= ()=> {
    if(this.state.IDorName)
            this.setState( 
                { masterclasses:[...this.state.masterclasses.filter((current)=>current._id===this.state.searchBy)]
                })
    
    else{
    this.setState( 
        { masterclasses:[...this.state.masterclasses.filter((current)=>current.title.includes(this.state.searchBy))]
        })

}
}
componentDidMount() {
  Axios
  .get('http://localhost:5000/api/masterclasses')
  .then(res=> this.setState({masterclasses:res.data.data,loading:false}))
  .catch(error=> this.ERROR.bind(error))
}
render(){
  return this.state.error?<h1>process couldnot be complete</h1>:this.state.loading?
  <h1>loading please be patient</h1>
  :
  (<div className='App'>
    <input
            name="searchBy"
            type="text"
            onChange={this.change} 
    />
    <button onClick={this.search}>Search</ button>
  <h1>Masterclasses</h1>
  <Masterclasses masterclasses={this.state.masterclasses} />
  </div>
  )
}
ERROR=(error)=>{
  console.log(error)
  this.setState({error:true})
}
}

export default MasterclassSearch;
