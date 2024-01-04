import React, { useState } from 'react';
const ControlledComponentInReact = () => {
    const [formData,setFormData] =useState({})
    const inpChangeEvent = (event)=>{ setFormData({...formData,[event.target.name]:event.target.value}) }
    return (
        <>
          <input type="text" onChange={inpChangeEvent} name="fname" id="fname" />  <br /> 
          <input type="text" onChange={inpChangeEvent} name="lname" id="lname" />  <br /> 
          <input type="text" onChange={inpChangeEvent} name="email" id="email" />  <br /> 
          <input type="text" onChange={inpChangeEvent} name="mobile" id="mobile" /><br />   
          <p>{JSON.stringify(formData)}</p>
        </>
    );
};

export default ControlledComponentInReact;