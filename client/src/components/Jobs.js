import React, { Component } from 'react';
import JobItem from './JobItem';
class Jobs extends Component {
  render() {
    return (
      this.props.jobs.map((job) => {
        return <JobItem  job = {job}/>
 })
 )
}

}
export default Jobs;
