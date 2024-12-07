import React from "react";
import './Lucks.css'; 


function Lucks (props){
const {day, handleDay}=props; 


return(
    <div className="lucks" onClick={handleDay}>
        <p className="date">{day}</p>
    </div>
)

}

export default Lucks; 