// import React, { Component } from 'react';
// import MasterclassItem from './MasterclassItem'

// import '../App.css'
// class Masterclasses extends Component{
//     render(){
//         //return this.props.masterclasses.map((current)=> <MasterclassItem key={current._id} current={current}  delMasterclass={this.props.delMasterclass}/>)
//         return this.props.masterclasses.map((current)=> <MasterclassItem key={current._id} current={current} Choose={this.props.Choose} delMasterclass={this.props.delMasterclass}/>)
//         }
    

//     }

//     export default Masterclasses

import React, { Component } from 'react';

import MasterclassItem from './MasterclassItem';

import PropTypes from 'prop-types';

import axios from 'axios';



class Masterclasses extends Component {



  state = {

        userName: null,

        title:null,
    duration:null,
    price:null,
    description:null,
    location:null,  
    Eduorganization:null,
    courseIDs :null, 
    workshopsIDs :null,
    applicants:null

        

      }

  getMasterclass = () => {

    axios.get('http://localhost:5000/api/masterclasses/')

    .then(res => this.setState({masterclasses:[...this.state.Masterclasses,res.data]}))

  }

  render() {

    

    return this.props.masterclasses.map((masterclass) => (

      <MasterclassItem key = {masterclass.id} masterclass = {masterclass} mark = {this.props.mark}

      delMasterclass = {this.props.delMasterclass}/>



    ));

  }

}

//proptypes

// EduOrgs.propTypes = {

//   eduorgs: PropTypes.array.isRequired,

//   mark: PropTypes.func.isRequired,

//   delEduOrg: PropTypes.func.isRequired

// }

export default Masterclasses;
    
