import React, { Component } from 'react';
import WorkshopsItemY from './WorkshopsItemY';
class WorkshopsY extends Component {
  render() {
    return (
      this.props.workshops.map((workshop) => {
        return <WorkshopsItemY  workshop = {workshop}/>
 })
 )
}

}
export default WorkshopsY;
    
