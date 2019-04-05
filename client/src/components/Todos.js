import React, { Component } from 'react';


class Todos extends Component {
  render() {
    return this.props.todos.map((todo)=>{
        <h3>{ 1 + 1 }</h3>
    });
  }
}

export default Todos;
