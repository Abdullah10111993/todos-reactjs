import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos' 

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Drink Milk',
        complete: false
      },
      {
        id: 2,
        title: 'Exercise',
        complete: false
      },
      {
        id: 3,
        title: 'Complete Thesis',
        complete: false
      }
    ]
  }

  render() {
      return (
          <div className="App">
            <Todos todos={this.state.todos}/>
          </div>
        );
  }
}

export default App;
