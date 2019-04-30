import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
    state = {
      persons : [
        {name: "Sean", age: 26},
        {name: "Katherine", age: 24},
        {name: "Doone", age: 28},
      ]
    }

    switchNameHandler = ()=>{
      console.log("CLICKED")
    }

  render(){
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
          My Hobbies : racing
        </Person>
      </div>
    );
  }
}

export default App;
