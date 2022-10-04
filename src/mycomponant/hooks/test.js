import React,{useState} from "react";

const San = () =>{
    const[toggle,SetToggle] = useState(true)

    const clickHandler = () =>{
        SetToggle(true)
    }
    const clickHandler1 = () =>{
        SetToggle(false)
    }
    console.log(toggle);
    return(
        <>
        <h1 style= {toggle === true?{color:'red'}:{color:'green'}}>Hello World</h1>
        <button onClick={clickHandler}>RED</button>
        <button onClick={clickHandler1}>GREEN</button>
        </>
    )
}
export default San