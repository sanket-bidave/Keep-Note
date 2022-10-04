import React, { useState } from "react";
import San from "../test";
import Data from "./data";


const Photos = () =>{
    
// console.log(Data[0].image)
    
    return(

       <>
     <div>
        {Data.map((val)=>{
            return(<>
        <img width='300px' height='300px' src={val.image} alt='..' />
        <h5>{val.des}</h5>
        <p>{val.price}</p>
        <button><a href={val.ref} target='_blank'>{val.btn}</a></button>
        
            </>)
        })}
 
  
        </div>
       </>

    )
        
    }

export default Photos