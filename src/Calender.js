    import React, { useEffect, useState }  from "react";
    import Lucks from "./Lucks"; 
    import Window from "./Window"; 
    import './Calender.css'; 
   

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
        if(selectedDay){
                return <Window closeWindow={()=>setSelectedDay()} next={()=>setSelectedDay(selectedDay+1)} back={()=>setSelectedDay(selectedDay-1)} selectedDay={selectedDay}/>; 
        }
        
    }



    return (
        <div class="show">
        <div class="showHatches">
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