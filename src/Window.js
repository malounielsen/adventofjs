import React from "react";
import './Window.css'; 
import One from "./One/One"; 
import Two from "./Two/Two"; 
import Three from "./Three/Three";
import Five from "./Five/Five";
import Left from "./left-arrow-svgrepo-com.svg";
import Right from "./right-arrow-svgrepo-com.svg";
import Cross from "./cross-svgrepo-com.svg"; 


function Window (props){
    const {closeWindow, next, back, selectedDay}=props; 


    const chooseLuck=()=>{
        switch(selectedDay){
            case 1: 
            return <One/>;
            case 2: 
            return <Two/>; 
            case 3:
                return <Three/>;
            case 4:
                return <Five/>;
            case 5: 
                return <Five/>; 
            default:
               return null; 

        }
    }

    return(
        <div className="background">
            <img src={Cross} alt="Close" onClick={closeWindow}/>
        <h1>Lucka { selectedDay}</h1>
        <div className="fixed">
           {chooseLuck()}
        </div>
           <div className="nextback">
        <img src={Left} onClick={back}/>
        <img src={Right} onClick={next}/>
        </div>
        </div>

    )

}

export default Window; 