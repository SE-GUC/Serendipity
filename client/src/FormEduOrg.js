import React from 'react';
import Card from './components/Card';
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
class FormEduOrg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: <h1>page loading ...</h1>,
      deleting: '',
    }
  }

  ggg=() => {
    const { id } = this.props.match.params
    console.log(id+"dadadadaxadaxdxd")
    var lastPart = window.location.href.split("/").pop();
    console.log(lastPart)
    console.log(window.location.href)
    const s = lastPart
    //5cb9d1188e100a2cdc8d4d0a
    return s;
}

  componentDidMount() {
      const s = this.ggg();
    axios.get(`http://localhost:5000/api/educationalOrganizations/courses/`+s)
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


export default withStyles(styles)(FormEduOrg);