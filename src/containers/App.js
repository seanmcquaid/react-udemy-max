import React, { Component } from 'react';
import styles from "./App.css"
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from "../hoc/WithClass"

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
    showPersons : false,
    showCockpit: true
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

  shouldComponentUpdate(nextProps, nextState){
    console.log("app should component update")
    return true;
  }

  componentDidUpdate(){
    console.log("component did update - app.js")
  }

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
        <WithClass classes={styles.App}>
        <button onClick={()=>this.setState({showCockpit: false})}>Remove Cockpit</button>
          {this.state.showCockpit? 
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          /> : null}
          {persons}
        </WithClass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;