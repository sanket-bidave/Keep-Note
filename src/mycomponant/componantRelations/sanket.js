import React from "react";

function Sanket({num1,num2}){
    var sum = 0;
    sum = num1+num2;
    return (
    <>
    <h1>Total sum Is</h1>
    <h2>{sum}</h2>
    </>)
}

export default Sanket;