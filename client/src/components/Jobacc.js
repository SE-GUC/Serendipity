import JobsItem from "./pendinJobs";
import React, { Component } from "react";

import "../App.css";
class Jobacc extends Component {
  render() {
    return this.props.job.map(current => (
         //console.log(current)
      <JobsItem
        key={current._id}
        current={current}
        Choose={this.props.Choose}
        delJobs={this.props.delJobs}
        updateJobs={this.props.updateJobs}
        viewApplicants={this.props.viewApplicants}
      />
    ));
  }
}
const btnStyle = {
  background: "#f4f4f4f4",
  color: "#000"
};
export default Jobacc;
