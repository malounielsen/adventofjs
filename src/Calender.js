    import React, { useState }  from "react";
    import Lucks from "./Lucks"; 
    import './Calender.css'; 
    import {Window}from "./Window"; 

    function Calender (){
    const lucks=[]; 
    const [selectedDay, setSelectedDay]=useState();
    for (var i=0; i<24; i++){
        const object={
            day: i+1
        };
        lucks.push({object}); 
    }
    
    const show=()=>{
        switch(selectedDay){
        case 1:  
        return <Window/>; 

        default: 
        return null; 

        }

    }



    return (
        <div class="show">

        <div class="showHatches">
            <h1>{selectedDay}</h1>
            {show()}
         </div>

            <div class="luckor">
            {
        lucks.map((luck)=> <Lucks day={luck.object.day} handleDay={()=>setSelectedDay(luck.object.day)}/>)
    } 
        </div>
        </div>
    )
    }

export default Calender; 