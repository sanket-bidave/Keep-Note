import React, {useState} from "react";

const Text = () =>{
    const [toggle,SetToggle] = useState(true)
    const clickhandler = () =>{
        SetToggle(true)
    }
    const clickhandler2 = () =>{
        SetToggle(false)
        
    }
    console.log(toggle);


return(
    <>
    {toggle === true?
    <>
    <h1>THis is Akshay Rajmane</h1>
    <p>28 years old</p>
    </>:toggle === false?
    
    <><h1>This is Sanket Bidave</h1>
    <p>27 year old</p></>:null
    }
    <button onClick={clickhandler}>Akki</button>
    <button onClick={clickhandler2}>SAN</button>
    </>
)
}
export default Text