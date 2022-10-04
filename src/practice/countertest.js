import React, { useState } from "react";


const Counter2 = () =>{
    const [counter,setcounter] = useState(0)

    const Clickhandler =() =>{
       if(counter >= 10){
        alert('error')
       }else{
        setcounter(counter + 1)
       }
    }

    const Clickhandler2 =() =>{
        setcounter(0)
    }
    const Clickhandler3 =()=>{
        if(counter <= 0){
            alert('Error')
        }else{
            setcounter(counter -1)
        }
    }

  
    
    return(
        <>
        <h1>Counter Number = {counter}</h1>
        <button onClick={Clickhandler}>Add</button>
        <button onClick={Clickhandler3}>Minus</button>
        <button onClick={Clickhandler2}>RESET</button>
        </>
    )
}

export default Counter2