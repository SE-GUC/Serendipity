import React from 'react';
import Card from './Card';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
  button: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1
  },
  input: {
    display: 'none',
  },
  del: {
    color: '#FF0000',
    font: 22,
  },
};
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: <h1>page loading ...</h1>,
      deleting: '',
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/courses/`)
      .then(res => {
        var c = res.data.data;
        var ans = <div>
          {c.map(course => (
            <Card cid={course._id} course={course} deleteCourse={this.deleteCourse} />
          ))}
        </div>
        this.setState({ response: ans })
      })
  }
  render() {

    return (
      <div>
        <h1>Courses</h1>
        {/* <Button size="small" variant="contained" style={styles.button} >Create a new course?</Button> */}
        <Link to={`/createCourse`} style={styles.button}>Create a new course?</Link>
        <br /><br />
        {this.state.deleting}
        {this.state.applying}

        {this.state.response}
      </div>
    )
  }
  deleteCourse = (cid) => {
    console.log('dakhal' + cid)
    this.setState({ deleting: <div><p style={styles.del}>deleting ...</p></div> })
    axios.delete(`http://localhost:5000/api/courses/${cid}`)
      .then((res) => { window.location.reload(); console.log('ay7aga') })

  }
}


export default withStyles(styles)(Form);