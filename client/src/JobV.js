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
    const id='5c9673e3a7f0f43f641386de'
    axios
      .get(`http://localhost:5000/api/partners/${id}/jobs`)
      
      .then(res => this.setState({ job: res.data.x, loading: false }))
      .catch(error => this.ERROR.bind(error));
  }

  
 
 
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
