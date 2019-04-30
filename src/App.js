import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <Person name="Sean" age="26"/>
        <Person name="Katherine" age="24"/>
        <Person name="Sean" age="26">
          My Hobbies : racing
        </Person>
        <Person name="Doone" age="20"/>
      </div>
    );
  }
}

export default App;
