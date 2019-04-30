import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person"

const app = props => {
    const [personsState, setPersonsState] = useState({
      persons : [
        {name: "Sean", age: 26},
        {name: "Katherine", age: 24},
        {name: "Doone", age: 28},
      ],
      otherState : "some other value"
    });

    const [otherState, setOtherState] = useState("Hello there")

    const switchNameHandler = ()=>{
      // console.log("CLICKED")
      setPersonsState({
        persons : [
          {name: "Seanathon", age: 26},
          {name: "Katherineeeee", age: 24},
          {name: "Doonezzzz", age: 28},
        ],
        otherState : personsState.otherState
      })
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>
          My Hobbies : racing
        </Person>
      </div>
    );
}

export default app;