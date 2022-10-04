import React from "react";

function Sachin ({name,num2,num1}){
    var div = 0;
    div = num1 - num2;
    return (<>
    <h1>Total div is </h1> 
    <h2>{div}</h2>
    <h2>{name}</h2>
    </>)
}

export default Sachin;