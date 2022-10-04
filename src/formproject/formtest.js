import React, { useState } from "react";
import { toast } from "react-toastify";

const FromTest =()=>{
  const [value,setValue] = useState({
    username:"",
    password:"",
  })
  const [click,setClick] = useState([])

  const inputEvent =(e)=>{
      setValue((pre)=>{
        return{
          ...pre,
          [e.target.name] : e.target.value
          }})}

  const clickEvent =()=>{
    if(value.username === "" || value.password === ""){
      toast.error('please fill all Fields')
    }else{
      toast.success('Form Submitted')
    
    setClick((pre)=>{
      return[...pre,value]
    })
    

setValue({
  username:"",
  password:"",
})}
  }
        
  
  return(
    <div className="con">
    <>
    
    
    <h4>Login</h4>
      <div>
      <i class="fa fa-user" aria-hidden="true"></i>
        {/* <label>username</label> */}
        
        <input onChange={inputEvent} value={value.username} name="username" autoComplete="off" placeholder="username"></input>
      </div>
      <div>
      <i class="fa fa-lock" aria-hidden="true"></i>
        {/* <label>password</label> */}
        
        <input type="password" onChange={inputEvent} value={value.password} name="password" autoComplete="off" placeholder="password"></input>
      </div>
      <br></br>
      <div>
      
      <button onClick={clickEvent} type="button" class="btn btn-primary">Login</button>
      </div>
      
      
      {click.length>0 &&
      click.map((v)=>{
        return(
          <>
          <h5>Data</h5>
          <h5>username ={v.username}</h5>
          <h5>password ={v.password}</h5>
        </>)
      })}
     
    </>
    </div>
  )
}
export default FromTest