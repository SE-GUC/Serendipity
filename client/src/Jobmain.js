import React, { Component } from "react";
import Jobsi from "./components/Jobsi";
import "./App.css";
import axios from "axios";

class Jobmain extends Component {
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
    axios
      .get("http://localhost:5000/api/jobs")
      .then(res => this.setState({ job: res.data.data, loading: false }))
      .catch(error => this.ERROR.bind(error));
  }

  delJobs = _id => {
    axios.delete(`http://localhost:5000/api/jobs/${_id}`);
    window.location.reload();
    console.log(_id);
  };
  updateJobs = _id => {
    this.props.history.push(`/job/updateJobs/${_id}`);
    console.log(_id);
  };

  applyJobs = _id => {
    var schema = {};
    schema["applicantId"] = '5c9cd4a3a5322632a423cf4a'
    axios.put(`http://localhost:5000/api/jobs/${_id}/apply`,schema)
            .then((res) => {  alert(`you successfully applied for job`);window.location.reload(); console.log('ay7aga') })
    
    console.log(_id);
  };
 
  onClick = () => {
    this.props.history.push("/job/Jobapp");
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
          <button onClick={this.onClick} style={btnStyle1}>
            create jobs
          </button>
        </p>

        <Jobsi
          job={this.state.job}
          delJobs={this.delJobs}
          updateJobs={this.updateJobs}
          applyJobs={this.applyJobs}

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

export default Jobmain;
