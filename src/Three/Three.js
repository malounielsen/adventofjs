import React, { useEffect, useState , useRef} from "react";
import './Three.css'
function Three(){
   
    const [rows,setRows]= useState(); 
    const texta=useRef(null); 

    const change=()=>{
         const textArea=texta.current; 
        if(textArea){
            textArea.rows=1;
            const newRows=textArea.scrollHeight/20; 
            setRows(newRows); 
        }
    }


    return (
        <div>
            <textarea ref={texta} onChange={change} className="textarea" rows={rows} cols="50"style={{width: '300px'}}></textarea>
        </div>
    )
}

export default Three; 