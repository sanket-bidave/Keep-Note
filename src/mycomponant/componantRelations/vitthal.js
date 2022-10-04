import React from "react";
import Sachin from "./sachin";
import Sanket from "./sanket";


function Vitthal (){
    var a = 20;
    var b = 30;
    var name = 'mi limbu wala ahe'
    
    return(
        <>
       
       <Sanket num1 = {a} num2 = {b}></Sanket>
       <Sachin num1 = {a} num2 = {b} name = {name}></Sachin>
    
        </>
    )
}

export default Vitthal