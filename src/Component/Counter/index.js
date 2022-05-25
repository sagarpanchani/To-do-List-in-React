
import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
const Counter=()=>{
 const [count,setcount]= useState(0)
const minss=()=>{
     setcount(count-1)
 }
 const pluss=()=>{
    setcount(count+1)
}
return(
    <div>
<Button onClick={()=>minss()}>-</Button>

<Button onClick={()=>pluss()}>+</Button>
<h1>{count}</h1>

    </div>
)
}

export  default Counter;
