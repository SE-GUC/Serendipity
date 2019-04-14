import React, { Component } from "react";
import axios from "axios";
import "..";
import { Link } from "react-router-dom";
class UpdateJobs extends Component {
  state = {
    title: "",
    location: "",
    startdate: "",
    enddate: "",
    salary: "",
    description: "",
    dailyhours: "",
    partner: ""
    
  };

  UpdateJobs = (_id, schema) => {
    console.log(_id);
    console.log(schema);

    axios
      .put(`http://localhost:5000/api/jobs/${_id}`, schema)
      .then(
        this.setState({
          seeUpd: (
            <Link to={`/job`} style={styles.linking}>
              See All jobs after Update?{" "}
            </Link>
          )
        })
      )
      .catch(e => {
        alert(e);
        console.log(e);
      });
  };
  onSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    var schema = {};
    if (this.state.title) schema["title"] = this.state.title;
    if (this.state.location) schema["location"] = this.state.location;
    if (this.state.startdate) schema["startdate"] = this.state.startdate;
    if (this.state.enddate) schema["enddate"] = this.state.enddate;
    if (this.state.salary) schema["salary"] = this.state.salary;
    if (this.state.description) schema["description"] = this.state.description;
    if (this.state.dailyhours) schema["dailyhours"] = this.state.dailyhours;
    if (this.state.partner) schema["partner"] = this.state.partner;
    
    console.log(schema);
    console.log(id);

    this.UpdateJobs(id, schema);
    // this.updateworkshop(this.props._id,this.state.title,this.state.eduOrganisation,this.state.duration,this.state.educator,this.state.price,this.state.description,this.state.location);
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <h1>Update Jobs </h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Title:
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.onChange}
            />
          </label>

          <br />
          <br />
          <label>
            Location:
            <input
              name="location"
              type="text"
              value={this.state.location}
              onChange={this.onChange}
            />
          </label>
          <br />
          <br />
          <label>
            Start Date:
            <input
              name="startdate"
              type="date"
              value={this.state.startdate}
              onChange={this.onChange}
            />
          </label>
          <br />
          <br />
          <label>
            End Date:
            <input
              name="enddate"
              type="date"
              value={this.state.enddate}
              onChange={this.onChange}
            />
          </label>
          <br />
          <br />
          <label>
            Salary:
            <input
              name="salary"
              type="number"
              value={this.state.salary}
              onChange={this.onChange}
            />
          </label>
          <br />
          <br />
          <label>
            Daily Hours:
            <input
              name="dailyhours"
              type="number"
              value={this.state.dailyhours}
              onChange={this.onChange}
            />
          </label>
          <br />
          <br />
          <label>
            Partner:
            <input
              name="partner"
              type="text"
              value={this.state.partner}
              onChange={this.onChange}
            />
          </label>
          <br />
          <br />
          <label>
            Description:
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.onChange}
            />
          </label>
          <br />
          <br />
          {/* <label>
            please select job state:
            <input
              name="state"
              type="text"
              value={this.state.state}
             onChange={this.onChange} 
                />
            </label>
            <br />
            <br /> */}

          {/* <button onClick={this.addjob.bind(this)} style={btnStyle}> Submit</button> */}
          <input
            type="submit"
            value="Submit"
            //className="btn"
            style={btnStyle}
          />
        </form>
       
         {this.state.seeUpd}
        
      </div>
    );
  }
}
const btnStyle = {
  background: "#f4f4f4f4",
  color: "#000"
};
const styles = {
  linking: {
    color: "#FF0000"
  }
};
export default UpdateJobs;
