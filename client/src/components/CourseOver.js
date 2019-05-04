import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ApplicantCard from './ApplicantCard';

class CourseOver extends Component {
    state = {
        anchorEl: null,
        type: null,
        title: null,
        response: '',
        eduOrgName: 'aaa' //to be taken from currently signed in eduOrg
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        if (!this.state.title || !this.state.type)
            alert('Information not sufficent!')
        else {
            console.log("one3")
            axios.get(`http://localhost:5000/api/${this.state.type}/${this.state.eduOrgName}/getByName/${this.state.title}`)
                .then(res => {
                    console.log(res)
                    if (res.data.err)
                        alert(`you do not have ${this.state.type} with this info`)
                    else {
                        const id = res.data.data._id;
                        console.log(id)
                        axios.get(`http://localhost:5000/api/${this.state.type}/${id}/applicants`).then(res => {
                            if (res.data.err)
                                alert(`something went wrong, plz try again :/`)
                            else {
                                var c = res.data.data;
                                console.log(c)
                                console.log(res)
                                var ans = <div>
                                    {c.map(applicant => (
                                        <ApplicantCard app={applicant} cid = {id} type = {this.state.type} />
                                    ))}
                                </div>
                                if(c.length === 0)ans = <p>This Course/Workshop/MasterClass has no applicants!!</p>
                                this.setState({ response: ans })
                            }
                        })
                    }
                })
        }
    }
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (event, type) => {
        this.setState({ anchorEl: null, type: type });
    };
    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <div>
                    {console.log(this.state.type)}
                    <Button
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                    >
                        {this.state.type ? this.state.type : "1) Please Choose type(course/workshop/masterclass)"}
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={(event) => this.handleClose(event, "courses")}>Course</MenuItem>
                        <MenuItem onClick={(event) => this.handleClose(event, "workshops")}>Workshop</MenuItem>
                        <MenuItem onClick={(event) => this.handleClose(event, "masterclasses")}>MasterClass</MenuItem>
                    </Menu>
                    <br />
                    <br />
                </div>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <label>
                            2) Title:
          <input
                                name="title"
                                type="text"
                                value={this.state.title}
                                onChange={this.onChange}
                            />
                        </label>

                        <br />
                        <br />
                        <input
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
                {this.state.response}
            </div>
        );
    }
}
export default CourseOver;