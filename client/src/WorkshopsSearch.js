import React, { Component } from 'react';
import Workshops from './components/WorkshopsY'
import './App.css';
import Axios from 'axios';

class WorkshopsSearch extends Component {
constructor(props){
  super(props)
  this.state={
    workshops:[],
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
                { workshops:[...this.state.workshops.filter((current)=>current._id===this.state.searchBy)]
                })
    
    else{
    this.setState( 
        { workshops:[...this.state.workshops.filter((current)=>current.title.includes(this.state.searchBy))]
        })

}
}
componentDidMount() {
  Axios
  .get('http://localhost:5000/api/workshops')
  .then(res=> this.setState({workshops:res.data.data,loading:false}))
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
  <h1>Workshops</h1>
  <Workshops workshops={this.state.workshops} />
  </div>
  )
}
ERROR=(error)=>{
  console.log(error)
  this.setState({error:true})
}
}

export default WorkshopsSearch;
