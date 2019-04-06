import React, { Component } from 'react';
//import PropTypes from 'prop-types';


class EduOrgItem extends Component {
  getStyle =() => {
      return{
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.eduorg.flag?
          'line-through' : 'none'
      }
  }

  
  render() {
      const {id,name,userName,email} = this.props.eduorg
    return(
        <div style={this.getStyle()}>
            <p>{name}</p>
        </div>
    )
   
  }
}
//proptypes
// EduOrgItem.propTypes = {
//     eduorg: PropTypes.object.isRequired,
//     mark: PropTypes.func.isRequired,
//     delEduOrg: PropTypes.func.isRequired
//   }

// const itemStyle ={
//     backgroundColor: '#f4f4f4'
// }

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right'
}
export default EduOrgItem;




