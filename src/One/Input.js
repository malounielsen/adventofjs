import React from "react";
import "./one.css"; 
function Input (props){

const {color, background, type}=props; 

    return(
        <div>
           <input class="inpu"type={type}/>
        </div>
    )
}

export default Input; 