import React, { useState } from "react";
import './index.css';
import pic from './OFFbulb.jpg';
import pic2 from './ONbulb.jpg'

const Bulb = () => {
    const [toggle,SetToggle] = useState(true)
    const clickHandler = () => {
        SetToggle(!toggle)
        
    }
    console.log(toggle,'value');
   return (
    <>
    <div>
    <img src={toggle ? pic : pic2}></img>
    </div>
    <div className={toggle ? 'div_1' : 'div_2'}></div>
    {/* <button onClick={clickHandler}>{toggle?'off':'on'}</button> */}
    <button onClick={clickHandler}>{toggle ? 'on' :'Off'}</button>
    </>
    )
}

export default Bulb
