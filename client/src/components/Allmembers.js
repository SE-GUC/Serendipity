import React, { Component } from 'react';
import MemberCard from './MemberCard'
import axios from 'axios';
import ExpertCard from './ExpertCard'


class Allmembers extends Component {

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
            if ( member.expert ){
              return <ExpertCard  name  = {member.name} email = {member.email} Skills = {member.Skills} Available Daily Hours = {member.availableDailyHours} location = {member.location} Review = {member.review}/>
            }
            
           return  <MemberCard  name  = {member.name} email = {member.email} Skills = {member.Skills} AvailableDailyHours = {member.availableDailyHours} location = {member.location} Review = {member.review}/>
     }));
     
    }
}
export default Allmembers;