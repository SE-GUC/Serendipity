import React, { Component } from "react";
import EduOrgCourseItem from "./EduOrgCourseItem";
import "../App.css";
class ViewEduOrgCourseItems extends Component {
  addCourse = id => {
    console.log(id);
    this.props.addCourse(id); ////
  };
  render() {
    return this.props.courseIDs.map(current => (
      <EduOrgCourseItem
        addCourse={this.addCourse}
        key={current._id}
        current={current}
        Choose={this.props.Choose}
      />
    ));
  }
}

export default ViewEduOrgCourseItems;
