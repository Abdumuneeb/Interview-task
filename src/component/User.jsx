import React, { useState,useEffect } from 'react';
import axios from 'axios';

const User =()=> {

    const url ="https://jsonplaceholder.typicode.com/users";
    const [data,setdata]= useState({
        name:"",
        date:"",
        iduser:""
    })
    function handle(e){
        const newdata= {...data}
        newdata[e.target.id]=e.target.value
        setdata(newdata);
    }

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            name:data.name,
            date:data.date,
            iduser:data.iduser
        })
        .then(res=>{
            console.log(res,"Succefully Post User ")
        })
        .catch(err=>{
            console.log(err,"404 Error");
        })
    }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
        
    })
   
        return (
            <div>

            <form onSubmit={(e)=>submit(e)}>
          <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text" placeholder="Enter Name"></input>
          <input onChange={(e)=>handle(e)} id="date" value={data.date} type="date" placeholder="Enter Date"></input>
          <input  onChange={(e)=>handle(e)} id="iduser" value={data.iduser} type="number" placeholder=" User I'd"></input>
          <button> Submit </button>

            </form>

                
            </div>
        )
    
}
export default User;
