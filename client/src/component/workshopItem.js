import React, { Component } from 'react';
//import PropTypes from 'prop-types';


class workshopItem extends Component {
  getStyle =() => {
      return{
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          
      }
  }

  
  render() {
      const {id,title,eduOrganisation,price} = this.props.work
    return(
        <div style={this.getStyle()}>
            <p>{title}</p>
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
export default workshopItem;