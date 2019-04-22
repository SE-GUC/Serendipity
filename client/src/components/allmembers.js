import React, { Component } from 'react';
import MemberCard from './memberCard'
import axios from 'axios';


class Allmembers extends Component {

    constructor(props) {
        super(props);
        this.state = {
          members: [],
        };
      }
    componentDidMount() {
        axios
          .get("http://localhost:5000/api/members")
          .then(res => {
           console.log("haa")
            this.setState({ members: res.data.data })
            console.log(this.state.members)
        })
          .catch(error => console.log("error"));
    }      
    render() {
       return (
          this.state.members.map((member) => {
           return  <MemberCard  name  = {member.name} email = {member.email} Skills = {member.Skills} AvailableDailyHours = {member.availableDailyHours} location = {member.location} Review = {member.review}/>
     }));
     
    }
}
export default Allmembers;