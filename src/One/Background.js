import {React, useEffect, useState} from "react";
import Eye from './Eye'; 
import Lock from './Lock'; 
import Input from './Input'; 

function Background (){
    const [isVisible, setVisible]=useState(true); 
    const styles={
        Visible:{
            background: '#26c9c3',
            color: '#17124a',
            type:'text'
        }, 
        notVisible :{
            backgroundColor:'#17124a',
            color: '#26c9c3',
            type:'password'
        },
    }
   


return (
             <div class="in" style={isVisible? styles.Visible : styles.notVisible}>
            <Lock fillColor={isVisible? styles.Visible.color:styles.notVisible.color}/>
            <div class="line"/>
            <Input fillColor={isVisible? styles.Visible.backgroundColor : styles.notVisible.backgroundColor} color={isVisible? styles.Visible.color:styles.notVisible.color} type={isVisible? styles.Visible.type : styles.notVisible.type}/>
            <Eye fillColor={isVisible? styles.Visible.color:styles.notVisible.color} handleClick={()=>setVisible(!isVisible)}/>
            </div>
)
}

export default Background; 