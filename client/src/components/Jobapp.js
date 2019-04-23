import React, { Component } from "react";
import axios from "axios";
import "..";
import { Link } from "react-router-dom";
//import Popup from 'reactjs-popup'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from './layout/Navbar';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../globalState/actions/authentication';
class Jobapp extends Component {
  state = {
    title: "",
    location: "",
    startdate: "",
    enddate: "",
    salary: "",
    description: "",
    dailyhours: "",
  //  partner: "",
    //state: "pending"
  };
  addjob = (
    title,
    location,
    startdate,
    enddate,
    salary,
    dailyhours,
    // partner,
    description,
   // state
  ) => {
    const {user} = this.props.auth;
    //this.state.id={user}.user.id
    const tokenB= localStorage.getItem('jwtToken');
    console.log(tokenB)
    axios
      .post("http://localhost:5000/api/jobs/" ,{
        title: title,
        location: location,
        startdate: startdate,
        enddate: enddate,
        salary: salary,
        dailyhours: dailyhours,
        // partner: partner,
        description: description,
        //state: state
      },{ Authorization: tokenB})
      .then(
        this.setState({
          seeUpd: (
            <Link to={`/job`} style={styles.linking}>
              See All jobs after create?{" "}
            </Link>
          )
        }
        // ,
        //  {
        //   updateJob()
        // })
      ))
      .catch(e => {
        alert(e);
        console.log(e);
      });
      //alert('Job created successfully!! YaaaY')
  };


  onSubmit = e => {
    e.preventDefault();
    if (
      !this.state.title ||
      !this.state.location ||
      !this.state.startdate ||
      !this.state.enddate ||
      !this.state.salary ||
      !this.state.dailyhours ||
      
      !this.state.description
    )
      alert("validations not satisfied,try again :)!");
    else
      this.addjob(
        this.state.title,
        this.state.location,
        this.state.startdate,
        this.state.enddate,
        this.state.salary,
        this.state.dailyhours,
        // this.state.partner,
        this.state.description,
       // this.state.state
      );
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
//   updateJob=(id)=>{
//     const res =  getJobs();
// const x=res.data.data.length;
//     const ids='5cae20486ed86f1b94744d3b'

//     axios.put(`http://localhost:5000/api/partners/${ids}/vac/${id}`)  
//   }; noura
  
  render() {
    return (
      <div>
        <h1>Job Application </h1>
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
// getJobs: async () => {
//   const jobs = await axios.get("http://localhost:5000/api/jobs/");
//   return jobs;
// }; noura
const btnStyle = {
  background: "#000000",
  color: "#fff"
};
const styles = {
  linking: {
    color: "#FF0000"
  }
};
Jobapp.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

//export default EduOrgProfile;
export default connect(mapStateToProps)(withRouter(Jobapp));