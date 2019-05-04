import React, { Component } from 'react';
import CourseItem from './CourseItem'
import '../App.css'
class Courses extends Component{
    render(){
        return this.props.workshop.map((current)=> 
        <CourseItem key={current._id} current={current}
         Choose={this.props.Choose} 
         delCourses={this.props.delCourses} updateCourses={this.props.updateCourses} />)
        
        }
    }
    const btnStyle={
        background:'#f4f4f4f4',
        color:'#000'
      }
    export default Courses 
    
