import React from "react";
import './password1.css'; 

function Window (props){
    const {handleClick}=props; 

    return(
        <div class="background">
          
        <input class="input" type="password" placeholder="password"></input>
        <button onClick={handleClick}>Click!!</button>
        </div>

    )

}


export default Window; 