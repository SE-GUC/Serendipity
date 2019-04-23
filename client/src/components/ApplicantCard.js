import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = {
  button: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 14,
    borderColor: 'black',
    borderWidth: 1,
  },
  done:{
    color: '#FF0000',
  }
};

class ApplicantCard extends Component {
  state = {
    viewButton: <Button size="small" style={styles.button} onClick={() => this.handleClick()}>Applicant Passed</Button>,
  }
  render() {
    const member = this.props.app
    return (
      <div>
        <text >
          {"Name: " + member.name +
            "     email: " + member.email + "   "
          }
        </text>
        {this.state.viewButton}

        <br />
      </div>
    )
  }
  handleClick() {
    const id = this.props.app._id
    const cid = this.props.cid
    axios.put(`http://localhost:5000/api/members/${id}/addcourse`, { "coursesId": cid })
      .then(res => {
        this.setState({ viewButton: <text style={styles.done}> Done!</text> })
      }).catch(e => console.log(e))
    
    axios.put(`http://localhost:5000/api/${this.props.type}/${cid}/unApply`,{"applicantId":id})
    .then()
  
  }
}

export default ApplicantCard;