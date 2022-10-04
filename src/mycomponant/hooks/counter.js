import React, {useState} from "react"; 

const Counter = () => {
    const [counter,setCounter]=useState(0)
    const clickHandler = () =>{
        
        if (counter >= 10 ) {
            alert('Count is greater than 10')
         setCounter (counter)   
        }else{
            setCounter(counter+1)
        }
    }
    const clickHandler1 = () =>{
        if(counter <= 0){
            alert('Error')
            setCounter(counter)
        }else{
            setCounter(counter - 1)

        }
        
    }
    const clickHandler2 = () =>{
        setCounter(0)
    }
        
    
    return(
        <>
       <h4>counter = {counter}</h4>
       <button onClick={clickHandler}>Add</button>
       <button onClick={clickHandler1}>Minus</button>
       <button onClick={clickHandler2}>reset</button>

        </>
    )
    }

export default Counter