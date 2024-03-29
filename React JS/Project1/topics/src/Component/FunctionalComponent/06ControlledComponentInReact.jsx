import React, { useState } from 'react';

const ControlledComponentInReact = () => {
    const [data,anything] =useState("default")
    const [state2,setState] =useState("default")
    let varaible_data = "default"
    // const inpChangeEvent = (kaipan)=>{
    // console.log("called",kaipan);
    const inpChangeEvent = (event)=>{
        // console.log("called",event);
        // console.log("called",this);
        // console.log("called",event.target);
        // console.log("called",event.target.value);
        // varaible_data = event.target.value
        anything(event.target.value)
        // return
    }
    return (
        <>
        <h4>Controlled Components</h4>
        <p>Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.</p>
        <p></p>
          {/* <input type="text" onChange={inpChangeEvent()} name="" id="" />   */}
          {/* <input type="text" onChange={inpChangeEvent(this)} name="" id="" />   */}
          <input type="text" onChange={inpChangeEvent} name="" id="" />  
          <input type="text" onChange={(event)=>setState(event.target.value)} name="" id="" />  
          <p>{varaible_data}</p>
          <p>{data}</p>
          <p>{state2}</p>
        </>
    );
};

export default ControlledComponentInReact;