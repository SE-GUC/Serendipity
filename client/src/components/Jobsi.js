import JobsItem from "./JobsItem";
import React, { Component } from "react";

import "../App.css";
class Jobsi extends Component {
  render() {
    return this.props.job.map(current => (
      <JobsItem
        key={current._id}
        current={current}
        Choose={this.props.Choose}
        delJobs={this.props.delJobs}
        updateJobs={this.props.updateJobs}
        applyJobs={this.props.applyJobs}

      />
    ));
  }
}
const btnStyle = {
  background: "#f4f4f4f4",
  color: "#000"
};
export default Jobsi;
