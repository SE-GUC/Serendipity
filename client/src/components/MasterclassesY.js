import React, { Component } from 'react';
import MastreclassesItemY from './MasterclassesItemY';
class MasterclassesY extends Component {
  render() {
    return (
      this.props.masterclasses.map((masterclass) => {
        return <MastreclassesItemY masterclass = {masterclass}/>
 })
 )
}

}
export default MasterclassesY;
    
