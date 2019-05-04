import WorkshopApp from '../src/WorkshopApp';
import Courses from './components/Courses'   //hnaaaa badal workshops
import axios from "axios"
import React, { Component } from 'react';
import Form from './components/Form';



class CoursesEduOrg extends Component {
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
      .get('http://localhost:5000/api/educationalOrganizations/courses/'+s)
      .then(res=> this.setState({workshop:res.data.data,loading:false}))
      .catch(error=> this.ERROR.bind(error))
    }
    
    delCourses =(_id) => {
      axios.delete(`http://localhost:5000/api/courses/${_id}`)
      window.location.reload()
      console.log(_id)
    }
    updateCourses =(_id) => {
      this.props.history.push(`workshop/updateWorkshop/${_id}`); //hnaa
      console.log(_id)
    }
    onClick=() =>{
      this.props.history.push("/workshop/createWorkshop") //hnaa
    }
    
    render(){
      return this.state.error?<h1>process couldnot be complete</h1>:this.state.loading?
      <h1>loading please be patient</h1>
      :
      (<div className='CoursesEduOrg'>
      <form componentDidMount={this.componentDidMount}>

    
      <h2 style={this.getStyleWork()}>Courses</h2>
      {/* <p><button  onClick={this.onClick} style={btnStyle1}>create workshop</button></p> */}
      </form>
    
      <Courses workshop={this.state.workshop} delCourses={this.delCourses} updateCourses={this.updateCourses} />
    {/*hnaaaa fo2 badal workshops */}
      </div>
      )
    }
    ERROR=(error)=>{
      console.log(error)
      this.setState({error:true})
    }
    
    
    
    
    
}
 
export default CoursesEduOrg;

//5cb9d1188e100a2cdc8d4d0a