import React from "react";
import data from "./mdata";
import "./movieProject.css"



function Card(){

    return(
        <>
        <div className="main_div1">
        <div className="heading"><h1>List of top Netflix Series</h1></div>
            {data.map((val) => {
                return(
                    <>
                    
                   <div className="img col-md-3">
                    <img src={val.imgsrc} alt="...pic1" className="pic1"></img>
                    </div>
                    
                    <span>{val.tital}</span>
                    <h3 className="Card_tital">{val.sname}</h3>
                    <a href={val.link} target="_blank"><button type="button" class="btn btn-primary">Watch Now</button></a>
                    
                    
                    </>)
                    })}
        </div>
        </> 
)}


export default Card