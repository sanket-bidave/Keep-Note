import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./home";

const Error = ()=>{
    return(
        <>
        <h1>404 Page Error Page Not Found</h1>
        
        <NavLink to = '/'>Go Back</NavLink>
        </>
    )
}

export default Error