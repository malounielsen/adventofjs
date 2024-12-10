import React, {useState} from "react";
import './Five.css'; 

function Five() {
const [count, setCount]= useState(0); 


const handleChange=(e)=>{
const word=e.target.value.trim();
const rword=word.replaceAll(' ', ''); 
setCount(rword.length); 
}
    return(
        <div className="five">
            <textarea onChange={handleChange}></textarea>
            <span>Count: {count}</span>
        </div>
    )
}

export default Five; 