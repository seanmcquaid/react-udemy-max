import React, {useEffect} from "react";
import styles from "./Cockpit.css"

const Cockpit = (props) => {
    useEffect(()=>{
      console.log("Cockpit.js use effect")
      setTimeout(()=>{
        alert("saved data to cloud")
      }, 1000)
      return ()=>{
        console.log("cockpit.js cleanup")
      };
    },[])



    const classes = [];
    let buttonClass = "";
    if(props.showPersons){
        buttonClass= styles.Red;
    }
    if(props.personsLength <= 2){
      classes.push(styles.red);
    }
    if(props.personsLength <= 1){
      classes.push(styles.bold)
    }
    return(
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(" ")}>This is really working!</p>
            <button
            className={buttonClass}
            onClick={props.clicked}>
            Switch Name
            </button>
        </div>
    )
}

export default React.memo(Cockpit);