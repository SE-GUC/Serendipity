// import React, { Component } from 'react'
// import '../App.css'

// export class MasterclassItem extends Component {
//   getStyle = () => {
//     return {
//       backgroundColor : '#f4f4f4f4',
//       borderBottom: '1px #ccc dotted',
//       textDecoration: this.props.current.reviewed? 'line-through':'none'
//     }

//   }

//   render () {
//     return (
//       <div style = {this.getStyle()} >
//         <p>
//         <input type='checkbox' onChange={this.props.Choose.bind(this,this.props.current._id)}/> {'  '}
//         { this.props.current.title}
//         <button style={btnStyle} onClick={this.props.delMasterclass.bind(this,this.props.current._id)}>X</button>
//         </p>
//       </div>
//     )   
//   }
  
  
// }

// const btnStyle={
//  background:'#ff0000',
//  color:'#ffff',
//  border:'none',
//  padding:'5px 10px',
//  borderRadius:'pointer',
//  float:'right'
// }
// export default MasterclassItem

import React, { Component } from 'react';
import Masterclasses from './Masterclasses';


//import PropTypes from 'prop-types';


class MasterclassItem extends Component {

  getStyle =() => {

      return{

          backgroundColor: '#f4f4f4',

          padding: '10px',

          borderBottom: '1px #ccc dotted'
      }

  }



  

  render() {

      const {_id,title,duration,
        price,
        description,
        location,  
        Eduorganization,
        courseIDs, 
        workshopsIDs,
        applicants} = this.props.masterclass

    return(

        <div style={this.getStyle()}>



            <p>{"Title:"}{title}</p>
            <p>{"Duration:"}{duration}</p>
            <p>{"Price:"}{price}</p>
            <p>{"Description:"}{description}</p>
            <p>{"Location:"}{location}</p>
            <p>{"Eduorganization:"}{Eduorganization}</p>
            <p>{"Courses:"}{courseIDs.map(item => <li>{item.title}</li>)}</p>
            <p>{"Workshops:"}{workshopsIDs.map(item => <li>{item.title}</li>)}</p>
           <p>{"applicants:"}{applicants.map(item => <li><p>Applicant Name:{item.name} , Applicant Username:{item.userName} , Applicant email:{item.email}</p></li>)}</p>
            <button onClick={this.props.delMasterclass.bind(this,_id)}>Delete</button>
            <button onClick={this.props.updateMasterclasses.bind(this,_id)}>update</button>
            <button onClick={this.props.applyMasterclass.bind(this,_id)}>apply</button>

            

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

export default MasterclassItem;