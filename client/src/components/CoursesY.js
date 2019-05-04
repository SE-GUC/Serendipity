import React, { Component } from 'react';
import CoursesItemY from './CoursesItemY';
class CoursesY extends Component {
  render() {
    return (
      this.props.courses.map((course) => {
        return <CoursesItemY course = {course}/>
 })
 )
}

}
export default CoursesY;
    
