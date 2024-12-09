import React, { useEffect, useState } from "react";
import './Two.css'; 

function Movies(props){
    const [data, setData]= useState([]);

    useEffect(()=>{
        fetch('/top-100-christmas-movies.json')
        .then (response =>response.json())
        .then(data=>setData(data))
    }, []); 



return(

        <div class="thedropdown">
             {data.map((movie)=> <div className="movies"><img src={movie.Image}/>
            <div className="movieinformation">
                <span className="title">{movie.Title}</span> <span class="year">{movie.Year}</span></div>
                </div> )
                }

            </div>
     )}

export default Movies; 