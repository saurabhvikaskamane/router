import React from "react";

function Show(props){
    return(
         <>
         <h2>your name is</h2>
         <h3>{props.name}</h3>
         <h2>your mobile number is</h2>
         <h3>{props.mobile}</h3>
         <h2>your address</h2>
         <h3>{props.address}</h3>
         <h2>your products details</h2>
         <h3>{props.products}</h3>
         </>
    );
}
export default Show;
