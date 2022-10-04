import React, { useState } from "react";
import './index.css'

const Note = () =>   {
    const [toggle,SetToggle] = useState(true)
    const clickHandler1 = () =>{
      SetToggle(!toggle)

      console.log(toggle,'value');

    }
    const clickHandler2 = () =>{
    
         SetToggle(false)
  
      }
      const clickHandler= () =>{
        SetToggle(!toggle)
  
      }
    return(
        <>
        <h1 className={toggle === true ? 'btn_1' :'btn_2'}>change my color</h1>
        <div className={toggle ? "div_1" : "div_2" }></div>
        <h1 style={toggle === true ?{color:'red'}:{color:'blue'}}>change my color</h1>
        <button onClick={clickHandler1}>{toggle === true ? 'ON':'OFF'}</button> 
        <button disabled = {toggle === true ?  false: true}>Two</button>
        {/* /* <button onClick={clickHandler2}>Two</button> 
        <button onClick={clickHandler}>{toggle ? 'off' :'on'}</button> */}
        </>
    )

}

export default Note