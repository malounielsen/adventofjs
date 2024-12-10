import React, { useState } from "react";
import "./seven.css"; 


function Seven() {

    const [text, setText]= useState(''); 


    const handleChange=(e)=> {
        setText(e.target.value); 

    }

    return(
        <div class="seven">
            <input className="input" type="text" onChange={handleChange}></input>
            <span class="output">/{text}</span>
        </div>
    )
}

export default Seven; 