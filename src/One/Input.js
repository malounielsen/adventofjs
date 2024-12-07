import React from "react";

function Input (props){

const {color, background, type}=props; 

    return(
        <div>
           <input type={type}/>
        </div>
    )
}

export default Input; 