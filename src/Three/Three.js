import React, {useState , useRef} from "react";
function Three(){
   
    const [hight, setHight]= useState(50); 
    const texta=useRef(null); 

    const style={
         
    }; 

    const change=()=>{
        console.log(texta.current.scrollHeight); 
        console.log(texta.current.height); 
         if (texta.current.scrollHeight>hight){
            setHight(hight+20)
         } 
    }
    return (
        <div>
            <textarea ref={texta} onChange={change} className="textarea" style={{height: hight}} ></textarea>
        </div>
    )
}

export default Three; 