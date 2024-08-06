import React, { useState } from 'react'

export default function Controlled() {
    const[inputValue,setInputValue]=useState("");
    const handleSubmit=()=>{
        alert(inputValue);
    }
    return (
        <div>
            <h1>Controlled Components</h1>
            <input type='text'
            placeholder='Enter name'
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

