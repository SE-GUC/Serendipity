import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/card/card';
import axios from 'axios'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: <h1>page loading ...</h1>
    }
  }
  componentDidMount() {
    axios.get(`/api/courses/`)
      .then(res => {
        var c = res.data.data;
        var ans = <div>
          {c.map(course => (
            <Card cid={course._id} />
          ))}
        </div>
        this.setState({ response: ans })
      })
  }
  render() {

    return (
      <div>
        <h1>Courses</h1>
        {this.state.response}
      </div>
    )
  }
}
ReactDOM.render(
  <Form />,
  document.getElementById('root')
);