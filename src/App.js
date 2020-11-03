import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos' ;
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About  from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuidv4(),
      //   title: 'Drink Milk',
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: 'Exercise',
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: 'complete Thesis',
      //   completed: false
      // }

    ]
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data}));
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(
        todo => {
          console.log(id);
          if (todo.id === id) {
            todo.completed  = !todo.completed;
          }
          return todo;
        }
      )
    });
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]
  });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({
        todos: [...this.state.todos, newTodo
      ]
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} 
                deleteTodo={this.deleteTodo}/>
    
              </React.Fragment>
            )}/>
            <Route path="/About" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
