import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import './Two.css'; 
import Arrow from "./dropdown-arrow.svg"; 

function Two(){
    const [isOpen,setOpen]=useState(false); 
   

    function handleClick() {
        setOpen(!isOpen); 
        
    }

    function search(){
        if(isOpen){
            return <input type="text" placeholder="Search for movies"/>
        }
    }

  

return(
<div className="dropdown">
    <div className="menu"><div className="search">{isOpen ? search(): <p>Your favorite holiday movie</p>}</div> 
    <img src={Arrow} onClick={handleClick} alt="Choose"/></div>
     {isOpen && (
            
            <Movies />
        
     )}
</div>
); 
}

export default Two; 