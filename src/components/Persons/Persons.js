import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component{
        static getDerivedStateFromProps(props,state){
                console.log("Persons.js getDerivedState")
                return state
        }

        // componentWillReceiveProps(props){
        //         console.log("Persons will receive props")
        // }

        shouldComponentUpdate(nextProps, nextState){
                console.log("Persons.js should component update")
                return true;
        }

        getSnapshotBeforeUpdate(prevProps, prevState){
                console.log("Persons.js get snapshot before update")
                return null;
        }

        render(){
                console.log("Persons rendering")
        return this.props.persons.map((person, index)=>{
                return (<Person 
                click={()=> this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event)=> this.props.changed(event, person.id)}
                />
                )
                });
        }
};

export default Persons;