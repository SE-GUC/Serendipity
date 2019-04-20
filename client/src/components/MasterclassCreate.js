import React, { Component } from "react";
import axios from "axios";
import EduOrgCourseItem from "./EduOrgCourseItem";
import Axios from "axios";
import "../App.css";
import ViewEduOrgCourseItems from "./ViewEduOrgCourseItems";

class MasterclassCreate extends Component {
  state = {
    Eduorganization: "",
    title: "",
    duration: "",
    price: "",
    description: "",
    location: "",
    courseIDs: null,
    chosenCourses: []
  };

  addMasterclass = (
    title,
    duration,
    price,
    description,
    location,
    Eduorganization,
    chosenCourses
  ) => {
    axios
      .post("http://localhost:5000/api/masterclasses/", {
        title: title,
        duration: duration,
        price: price,
        description: description,
        location: location,
        Eduorganization: Eduorganization,
        courseIDs: chosenCourses //,workshopsIDs:workshopsIDs
      })
      .then(res => {
        this.setState({
          masterclass: [...this.state.MasterclassCreate, res.data]
        });
      })

      .catch(e => "error");
    alert("Masterclass was created succesfully");

  };


  addCourse =(id) => {   /////////
    if(!(this.state.chosenCourses.includes(id)))
    this.state.chosenCourses.push(id);
    console.log(this.state.chosenCourses)
  };
  
  viewCourses = eduorgid => {
    console.log(
      'called'
    )
    axios
      .get(
        `http://localhost:5000/api/educationalOrganizations/courses1/${eduorgid}`
      )
      .then(res => {

        this.setState({ courseIDs: res.data.courses });
      })
      .catch(e => "error");
  };

  onSubmit1 = e => {           
    e.preventDefault();
    this.viewCourses(this.state.Eduorganization);
  };

  onSubmit2 = e => {
    e.preventDefault();
    if (!this.state.title) {
      alert("title cannot be empty");
    } else if (
      !this.state.duration ||
      !this.state.location ||
      !this.state.price ||
      !this.state.description ||
      !this.state.Eduorganization
    )
      alert("validations not satisfied,try again :)!");
    else
      this.addMasterclass(
        this.state.title,
        this.state.duration,
        this.state.price,
        this.state.description,
        this.state.location,
        this.state.Eduorganization,
        this.state.chosenCourses //////////
      ); 
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  // onChangeCourses = e => {
  //   const ID = e.target.value + "";
  //   var newIDs = this.state.courseIDs;
  //   if (ID.length === 24) newIDs.push(ID);
  //   this.setState({ courseIDs: newIDs });
  //   console.log(newIDs);
  //   newIDs = [];
  // };
  render() {
    return (
      <div>
        <h1>Create Masterclass </h1>
        <form onSubmit={this.onSubmit1}>
          <label>
            Education organization:
            <input
              name="Eduorganization"
              type="text"
              value={this.state.Eduorganization}
              onChange={this.onChange}
            />
          </label>{" "}
          * will be removed later and will use id of signed in edu org
          <input
            type="submit"
            value="Submit"
            //className="btn"
            // style={{flex: '1'}}
          />
        </form>
        <form onSubmit={this.onSubmit2}>
          <br />
          <br />
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
            Duration:
            <input
              name="duration"
              type="text"
              value={this.state.duration}
              onChange={this.onChange}
            />
          </label>
          <br />
          <br />
          <label>
            Price:
            <input
              name="price"
              type="number"
              value={this.state.price}
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
          Your Courses:
          {this.state.courseIDs ? (
            <ViewEduOrgCourseItems addCourse={this.addCourse} courseIDs={this.state.courseIDs} />
          ) : (
            <p />
          )}
          <br />
          <br />
          <input
            type="submit"
            value="Submit"

          />
        </form>
      </div>
    );
  }
}
const btnStyle = {
  background: "#000000",
  color: "#fff"
};
export default MasterclassCreate;
