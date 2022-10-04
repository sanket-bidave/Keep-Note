
import React,{useEffect,useState} from "react";
import axios from "axios";



let rec = null
let data1 = null
 

function DataFetch(){
    const [data,setData] = useState([])

// by axios
    // useEffect(  () =>{
    //        async function fetchApi () {
    //         rec =   await axios.get('https://jsonplaceholder.typicode.com/users/')



    //         if(rec.status){
    //             setData(rec.data) // in data all youm data (axios)
    //         }else{
             
    //             alert('somthing went wrong')
    //         }

    //        }
    //        fetchApi()
    // },[])

    // using fetch

    useEffect(  () =>{
        async function fetchApi () {
         rec =   await fetch('https://jsonplaceholder.typicode.com/users/')
      

            data1 = await rec.json()
          
            if(data1){
                return setData(data1)
            }


        //  if(rec.status){
        //      setData(rec.data) // in data all youm data (axios)
        //  }else{
          
        //      alert('somthing went wrong')
        //  }

        }
        fetchApi()
 },[])


    return(
        <>
        { data.length > 0 ?  data.map((val) =>{
            return(
                <><h3>{val.name}</h3>

                <h4>{val.username}</h4>
                <h4>dadus - 2 - {val.address.city}</h4>
                {/* {val.address && Object.keys(val.address).map((v)=>{
                    console.log(v,'key ')
                    // if(val.address[v] === val.address.city ){
                    //     return(<h1> city -  { val.address[v]}</h1>)
                    // }                 
                })} */}
                 {val.address && Object.values(val.address).map((v)=>{
                    {/* console.log(v,'values ') */}
                    // if(val.address[v] === val.address.city ){
                    //     return(<h1> city -  { val.address[v]}</h1>)
                    // }                 
                })}
                </>
            )
        }): <h1>No Data Found</h1>}

      
        </> 
)}


export default DataFetch