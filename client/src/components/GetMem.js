import React, { Component } from 'react';
import MemberCard from './MemberCard'
import axios from 'axios';
import CardButton from './CardButton'
import { throwStatement } from '@babel/types';


class GetMem extends Component {

    constructor(props) {
        super(props);
        this.state = {
          members: [],
        };
      }
     
    
    componentDidMount() {
      const id='5cbdd7dfd390fa5364e17d8f'
      const { ids } = this.props.match.params

      console.log(ids)
      axios
        .get(`http://localhost:5000/api/partners/${id}/applicants/${ids}`)
          .then(res => {
           console.log("haa")
            this.setState({ members: res.data.x })
            console.log(this.state.members)
        })
          .catch(error => console.log("error"));
    }      
    render() {

       return (
         
          this.state.members.map((member) => {
            
            
           return  <CardButton  id ={member._id} name  = {member.name} email = {member.email} Skills = {member.Skills} AvailableDailyHours = {member.availableDailyHours} location = {member.location} Review = {member.review}  onClick={this.onClick}/>
           
     }));
     
    }
    onClick = (_id)=> {
      console.log(_id)
      const { ids } = this.props.match.params
     axios
     .put(`http://localhost:5000/api/jobs/${ids}/accept/${_id}`)
     
     .then(res => this.setState({ job: res.data.x, loading: false }))
     .catch(error => this.ERROR.bind(error));
    alert("member took  job sucessfully")
    }
    }
   

export default GetMem;