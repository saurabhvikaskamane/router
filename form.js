import React,{useState} from "react";

function Data()
{
const [name,setName]=useState("");
const handleChange=(event)=>{
    setName(event.target.value);
}
const element=()=>{document.getElementById("sau").innerHTML={name};}
return(
    <>
     <input type="text" placeholder="enter your name" onChange={handleChange}></input>
         <h2 id="sau">click here</h2>

    <button onClick={element}>click</button>

    </>
)
}
export default Data;
