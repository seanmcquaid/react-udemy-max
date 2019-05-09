import React, { Component } from 'react';
import styles from "./App.css"
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log("App.js constructor")
  }

  state = {
    persons: [
      {id:"lakjsh", name: 'Max', age: 28 },
      {id:"apsoiudhy", name: 'Manu', age: 29 },
      {id:"ploakjs", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons : false
  };

  static getDerivedStateFromProps(props, state){
    console.log("App.js get DerivedStateFromProps", props)
    return state;
  }

  componentDidMount(){
    console.log("App.js component did mount")
  }

  // componentWillMount(){
  //   console.log("Component will mount")
  // }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex((p)=>{
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({
      persons: persons
    })
  }

  render() {
    console.log("app.js render")
    let persons = null;

    if(this.state.showPersons){
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
      )
      
    };


    return (
        <div className={styles.App}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;