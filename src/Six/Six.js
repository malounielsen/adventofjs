import React, {useState} from "react";
import Check from "./check.svg";
import Clipboard from "./clipboard.svg"; 
import './six.css'; 
import { Tooltip } from 'react-tooltip'; 

function Six() {
const [text, setText]=useState(''); 
const [isCopied, setCopied]= useState(false); 


    const handleCopy=()=>{
        navigator.clipboard.writeText(text);  
        setCopied(true); 
        setInterval(()=>{
            setCopied(false);
        },5000);     

    }

    const handleChange=(e)=>{
        setText(e.target.value)
        
    }


    return (
        <div>
            <Tooltip id="my-tooltip" />
        <div className="field">
            <input type="text" value={text} onChange={handleChange}></input> 
            {isCopied?  <img src={Check} alt="Copied"data-tooltip-id="my-tooltip" data-tooltip-content="Copied!" data-tooltip-place="top"></img>: 
            <img src={Clipboard} onClick={handleCopy} data-tooltip-id="my-tooltip" data-tooltip-content="Copy!" data-tooltip-place="top"/> }
           

        </div>
        </div>
    )
}

export default Six; 
