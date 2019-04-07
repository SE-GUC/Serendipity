import React, { Component } from 'react';
import EduOrgs from './components/EduOrgs';
import './App.css';
import axios from 'axios';

class EduOrgApp extends Component {
  getStyleEduOrg = () => {
    return {
      backgroundColor : '#000',
      color : '#f0f0f0'
    }
  
  }

  constructor(props){
    super(props)
    this.state={
      eduorgs:[],
      error:false,
      loading:true
    }
  }
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/educationalOrganizations/')
    .then(res=> this.setState({eduorgs:res.data.data,loading:false}))
    .catch(error=> this.ERROR.bind(error))
  }

  // state = {
  //    eduorgs:[]
       
      //  {
      //    id: 1,
      //    name: 'guc',
      //    flag: true
       
      //  },
      //  {
      //    id: 2,
      //    name: 'auc',
      //    flag: false
       
      //  },
      //  {
      //    id: 3,
      //    name: 'bue',
      //    flag: false
       
      //  }
      
     
     
     

  //}
  // componentDidMount(){
  //   //axios.get('mongodb+srv://salma:123@cluster0-mepxp.mongodb.net/test?retryWrites=true')
  //   axios.get('http://localhost:5000/api/educationalOrganizations/')
  //   //axios.get('/api/educationalOrganizations/')
  //   .then(res => this.setState({eduorgs: res.data}))
  // }
//   componentDidMount() {
//     this.getDataFromDb();
//     if (!this.state.intervalIsSet) {
//       let interval = setInterval(this.getDataFromDb, 1000);
//       this.setState({ intervalIsSet: interval });
//     }
// }
// componentDidMount() {
//     fetch("http://localhost:5000/api/educationalOrganizations/")
//       .then(eduorgs => eduorgs.json())
//       .then(res => this.setState({ eduorgs: res.data }));
// };

//   mark = (id) => {
//      this.setState({eduorgs: this.state.eduorgs.map(eduorg =>{
//        if(eduorg.id===id){
//          eduorg.flag = !eduorg.flag
//        }
//        return eduorg
//      })})
// }
// delEduOrg =(id)=>{
//   this.setState({eduorgs: [...this.state.eduorgs.filter(eduorg => eduorg.id !== id)]});
// }
  render() {
    return this.state.error?<h1>process couldnot be complete</h1>:this.state.loading?
  <h1>loading please be patient</h1>
  :(
      <div className="EduOrgApp">
        <h1 style = {this.getStyleEduOrg()}>Educational Organizations</h1>
        <EduOrgs eduorgs = {this.state.eduorgs}/>
      </div>
    );
  }
  ERROR=(error)=>{
    console.log(error)
    this.setState({error:true})
  }
}

export default EduOrgApp;
