import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/card/card';
import axios from 'axios'

class Form extends React.Component {
  state = {
    response: '',
  };
  componentDidMount() {
    axios.get(`http://localhost:5000/api/courses/`)
      .then(res => {
        this.setState({response:res.data.data})
      })

  }
  render() {
    // var items = this.state.response.map(
    //   c => { <Card cid={c._id} /> });
    return (
      <div className="form">
        <h1>Courses</h1>
        <div className='card'>
          <p>{this.state.response}</p>
          <Card cid={this.state.response.title} />
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
{/* <Card cid = {"5c969130da7f7813cc2e4cb1"}/>, */ }