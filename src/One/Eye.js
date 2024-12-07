import React from "react";



function Eye(props){
const {fillColor, handleClick}=props; 



return (
    <div className="lock" onClick={handleClick}>
    <svg width="48" height="50" viewBox="0 0 110 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M105 71C105 71 82.6142 102 55 102C27.3858 102 5 71 5 71" stroke={fillColor} stroke-width="10" stroke-linecap="round"/>
<path d="M70 70C70 78.2843 63.2843 85 55 85C46.7157 85 40 78.2843 40 70C40 61.7157 46.7157 55 55 55C63.2843 55 70 61.7157 70 70Z" fill={fillColor}/>
<path d="M105 70C105 70 82.6142 39 55 39C27.3858 39 5 70 5 70" stroke={fillColor} stroke-width="10" stroke-linecap="round"/>
<path d="M54.9999 22.5V5.5" stroke={fillColor} stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M91 34.9707L100.686 21" stroke={fillColor} stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00049 20.9996L18.6856 34.971" stroke={fillColor} stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
)

}

export default Eye; 