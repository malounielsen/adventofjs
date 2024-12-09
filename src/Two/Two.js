import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import './Two.css'; 
import Arrow from "./dropdown-arrow.svg"; 

function Two(){
    
    const [isOpen,setOpen]=useState(false); 
   const [searchWord, setSearch]= useState(""); 
   

    function handleClick() {
        setOpen(!isOpen); 
        
    }

   const handleSearch=(e)=>{
        setSearch(e.target.value);    

   }
  

return(
<div className="dropdown">
    <div className="menu"><div className="search"><input type="text" placeholder="Search for movies" onChange={handleSearch}/></div> 
    <img src={Arrow} onClick={handleClick} alt="Choose"/></div>
     {isOpen && (
            
            <Movies searchWord={searchWord}/>
        
     )}
</div>
); 
}

export default Two; 