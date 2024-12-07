import React from "react";
import './Window.css'; 
import One from "./One/One"; 


function Window (props){
    const {closeWindow, next, back, selectedDay}=props; 


    const chooseLuck=()=>{
        switch(selectedDay){
            case 1: 
            return <One/>;
            case 2: 
            return <One/>; 

            default:
               return null; 

        }
    }


    return(
        <div className="background">
        <button onClick={closeWindow}>Click!!</button>
        <h1>Lucka { selectedDay}</h1>
        <div>
           {chooseLuck()}
        </div>
           <div className="nextback">
        <button onClick={back}>Click back!!</button>
        <button onClick={next}>Click! next!</button>
        </div>
        </div>

    )

}

export default Window; 