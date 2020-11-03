import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos' 

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Drink Milk',
        completed: false
      },
      {
        id: 2,
        title: 'Exercise',
        completed: false
      },
      {
        id: 3,
        title: 'complete Thesis',
        completed: false
      }
    ]
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
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id != id)]
  });
  }

  render() {
      return (
          <div className="App">
            <Todos todos={this.state.todos} markComplete={this.markComplete} 
            deleteTodo={this.deleteTodo}/>
          </div>
        );
  }
}

export default App;
