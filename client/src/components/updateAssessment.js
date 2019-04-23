import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios';

const styles = {
    linking: {
        color: '#FF0000',
    }
}
class updateAssessment extends React.Component {
    state = {
        memberName: '',
        expertName: '',
        phoneNumber: '',
        daysAvailable: ''
    }
    updateAssessment = (id, schema) => {
        axios.put(`http://localhost:5000/api/assessments/${id}`, schema)
            .then(this.setState({ seeUpd: <Link to={`/assessment`} style={styles.linking}>See All assessments after Update? </Link> }))
            .catch(e => { alert(e); console.log(e) })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params
        var schema = {};
        if (this.state.memberName) schema["memberName"] = this.state.memberName
        if (this.state.expertName) schema["expertName"] = this.state.expertName
        if (this.state.phoneNumber) schema["phoneNumber"] = this.state.phoneNumber
        if (this.state.daysAvailable) schema["daysAvailable"] = this.state.daysAvailable

        this.updateAssessment(id, schema);
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        return (
            <div >
                <h1>Assessment Update </h1>
                <form onSubmit={this.onSubmit}>
                    <label>
                        member name:
              <input
                            name="memberNmae"
                            type="text"
                            value={this.state.memberName}
                            onChange={this.onChange}
                        />
                    </label>

                    <br />
                    <br />
                    <label>
                        expert name:
              <input
                            name="expertName"
                            type="text"
                            value={this.state.expertName}
                            onChange={this.onChange}
                        />
                    </label>
                    <br />
                    <br />
                    <label>
                        phoneNumber:
              <input
                            name="phoneNumber"
                            type="number"
                            value={this.state.phoneNumber}
                            onChange={this.onChange}
                        />
                    </label>
                    <br />
                    <br />
                    <label>
                        days available:
                <input
                            name="daysAvailable"
                            type="text"
                            value={this.state.daysAvailable}
                            onChange={this.onChange}
                        />
                    </label>
                    <br />
                    <br />
                  
                     
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

export default withStyles(styles)(updateAssessment);

