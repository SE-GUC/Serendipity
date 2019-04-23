import React, { Component } from "react";
import Jobsi from "./components/Jobacc";
import "./App.css";
import axios from "axios";

class JobV extends Component {
  getStyleEduOrg = () => {
    return {
      backgroundColor: "#000",
      color: "#f0f0f0"
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      job: [],
      error: false,
      loading: true,
      clicked: false
    };
  }
  componentDidMount() {
    console.log("lsdkjjdf")
    // const {user} = this.props.auth;
    // const tokenB= localStorage.getItem('jwtToken');
    const id='5cbdd7f5d390fa5364e17d90'
    //const id=this.state.id
    //console.log(tokenB)
    axios
      .get(`http://localhost:5000/api/partners/${id}/jobs`)
      
      .then(res => this.setState({ job: res.data.x, loading: false }))
      .catch(error => this.ERROR.bind(error));
  }
  viewApplicants = _id => {
    this.props.history.push(`applicants/${_id}`);
    console.log(_id);
  };
   accept = _id => {
    this.props.history.push(`taken/${_id}`);
    console.log(_id);
  };

  
 
 
  render() {
    return this.state.error ? (
      <h1>process couldnot be complete</h1>
    ) : this.state.loading ? (
      <h1>loading please be patient</h1>
    ) : (
      <div className="Jobmain">
        <h2 >Jobs</h2>
        <p>
          
        </p>

        <Jobsi
          job={this.state.job}
          viewApplicants={this.viewApplicants}
           accept={this.accept}
          
        />
      </div>
    );
  }
  ERROR = error => {
    console.log(error);
    this.setState({ error: true });
  }
}
const btnStyle1 = {
  background: "grey",
  color: "black",
  fontSize: 20,
  borderColor: "black",
  borderWidth: 3,
  padding: "5px 10px"
};
const btnStyle = {
  background: "#f4f4f4f4",
  color: "#000"
};

export default JobV;
