import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios';

const styles = {
    linking: {
        color: '#FF0000',
    }
}
class UpdForm extends React.Component {
    state = {
        title: '',
        duration: '',
        educator: '',
        price: '',
        description: '',
        location: '',
        seeUpd: ','
    }
    updCourse = (id, schema) => {
        axios.put(`http://localhost:5000/api/courses/${id}`, schema)
            .then(this.setState({ seeUpd: <Link to={`/course`} style={styles.linking}>See All courses after Update? </Link> }))
            .catch(e => { alert(e); console.log(e) })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params
        var schema = {};
        if (this.state.title) schema["title"] = this.state.title
        if (this.state.duration) schema["duration"] = this.state.duration
        if (this.state.educator) schema["educator"] = this.state.educator
        if (this.state.price) schema["price"] = this.state.price
        if (this.state.description) schema["description"] = this.state.description
        if (this.state.location) schema["location"] = this.state.location
        this.updCourse(id, schema);
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        return (
            <div >
                <h1>Course Update </h1>
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
                        Duration:
              <input
                            name="duration"
                            type="number"
                            value={this.state.duration}
                            onChange={this.onChange}
                        />
                    </label>
                    <br />
                    <br />
                    <label>
                        Educator:
                <input
                            name="educator"
                            type="text"
                            value={this.state.educator}
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
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
                {this.state.seeUpd}
            </div>
        );
    }
}

export default withStyles(styles)(UpdForm);

