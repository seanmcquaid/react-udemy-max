import React, {PureComponent} from "react";
import Person from "./Person/Person";

class Persons extends PureComponent{
        // static getDerivedStateFromProps(props,state){
        //         console.log("Persons.js getDerivedState")
        //         return state
        // }

        // componentWillReceiveProps(props){
        //         console.log("Persons will receive props")
        // }

        // shouldComponentUpdate(nextProps, nextState){
        //         console.log("Persons.js should component update")
        //         if(
        //                 nextProps.persons !== this.props.persons || 
        //                 nextProps.changed !== this.props.changed || 
        //                 nextProps.clicked !== this.props.clicked){
        //                 return true
        //         }else {
        //                 return false
        //         }
        //         // return true
        // }

        getSnapshotBeforeUpdate(prevProps, prevState){
                console.log("Persons.js get snapshot before update")
                return {message: "snapshot"};
        }

        componentDidUpdate(prevProps, prevState, snapshot){
                console.log("Persons component did update")
                console.log(snapshot)
        }

        componentWillUnmount(){
                console.log("person.js component will unmount")
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