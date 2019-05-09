import React, { Component } from 'react';
import styles from "./App.css"
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from "../hoc/WithClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";

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
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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
    this.setState((prevState, props)=>{
      return {
        persons: persons,
        changeCounter : prevState.changeCounter + 1
      }
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

  loginHandler = ()=>{
    this.setState({
      authenticated : true
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
            isAuthenticated ={this.state.authenticated}
          />
      )
      
    };


    return (
        <Aux>
        <button onClick={()=>this.setState({showCockpit: false})}>Remove Cockpit</button>
          <AuthContext.Provider 
          value={{
            authenticated : this.state.authenticated,
            login: this.loginHandler 
          }}
          >
            {this.state.showCockpit? 
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            /> : null}
            {persons}
          </AuthContext.Provider>
        </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, styles.App);