import React, { useState } from "react";
import "./index.css";

const ToDoProject = ()=>{
  const [value,setValue] = useState({
    username:"",
    password:"",
  })

  const [click,setClick] = useState([])

  const changeEvent =(e)=>{
    setValue((pre)=>{
      return{
        ...pre,
        [e.target.name] : e.target.value
      }
    })
  }

  const clickHandler =()=>{
    setClick((pre)=>{
      return[...pre,value]
    })
  }
  return(
    <>
      <h5 className="tital col-md-3">Login</h5>
      <div className="main_div col-md-3">
        
        <label>username</label>
        <input onChange={changeEvent} name="username" value={value.username} placeholder="username" autocomplete="off"></input>
     
        <label>password</label>
        <input onChange={changeEvent} name="password" value={value.password} placeholder="password" autocomplete="off" type='password'></input>
      </div>
      <div>
        <button onClick={clickHandler} className=" btn1 col-md-3" >Login</button>
      </div>
      {click.length>0 && click.map((v)=>{
        return(
          <>
          <div className="col-md-3" 
          style={{display: 'flex',flexDirection: 'column' }}>
          <label>username - {v.username}</label>
          <label>password - {v.password}</label>
          </div>
        </>)
      })}
    </>
  )
}

export default ToDoProject