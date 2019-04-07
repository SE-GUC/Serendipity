import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
class App extends Component {
  state={
    todos:[]
  }
  //Getting values from DB
  //get all
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=> this.setState({todos: res.data}))

  }
  //Toggle complete
  markComplete = (id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed=!todo.completed
      }
      return todo;
    })});
    console.log(id)
  }
  //Delete to do
  delTodo = (id)=> {

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>this.setState({todos:[...this.state.todos.filter(todo=> todo.id!==id)]}));
    
  }
  //add to do
  addTodo =(title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
    title,
    completed: false
  })
  .then(res=> this.setState({todos:[...this.state.todos,res.data]}));
    //console.log(title)
    // const newTodo={
    //   id:4,
    //   title:title, //since they are both the same we could write ->title,
    //   completed:false
    // }
  }
  render() {
    return (
      //router used to go to corrsponding link
      <Router>
        <div className="App">
        <div className="container"> 
          <Header/>
          <Route exact path="/" render={props=>(
            <React.Fragment>
              {/* <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} 
                markComplete={this.markComplete}
                delTodo={this.delTodo}
                /> */}
            </React.Fragment>
          )}/>
          <Route exact path="/about" component={About}/>
        </div>
        </div>
      </Router>
    );
  }
}
export default App;

 // {
      //   id:1,
      //   title:"Take out the trash",
      //   completed:false 
      // },
      // {
      //   id:2,
      //   title:"Dinner with",
      //   completed:false 
      // }