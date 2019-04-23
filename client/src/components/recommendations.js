import React, { Component } from 'react';
import axios from 'axios';
import JobItem from './JobItem';

class Recommendations extends Component {
    constructor (props){
        super(props);
        state = {
recommendations = []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/api/members/${this.props.id}" )
          .then(res => {
            this.setState({ recommendations: res.recommendations })
            console.log(this.state.recommendations)
        })
          .catch(error => console.log("blabizo"));
    }
    render() {
        
        return (   
           this.state.recommendations.map((recommendations) => {
            return  <JobItem  job = {recommendations}/>
      }));
     }

}
export default Recommendations;