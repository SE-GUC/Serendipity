import React, { Component } from 'react';
import ExpertCard from './ExpertCard'
import axios from 'axios';


class AllExperts extends Component {

    constructor(props) {
        super(props);
        this.state = {
          members: [],
        };
      }

    componentDidMount() {
        axios
          .get("http://localhost:5000/api/members/getexperts")
          .then(res => {
            this.setState({ members: res.data })
            console.log(this.state.members)
        })
        .catch(error => console.log("ay 7aga "));
    }      
    render() {
       return (
          this.state.members.map((member) => {
           return  <ExpertCard  name  = {member.name} email = {member.email} Skills = {member.Skills} Available Daily Hours = {member.availableDailyHours} location = {member.location} Review = {member.review}/>

        }));
     
    }
}
export default AllExperts;
