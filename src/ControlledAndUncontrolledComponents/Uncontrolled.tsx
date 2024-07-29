import React, { useRef } from 'react'

export default function Uncontrolled() {
    const handleSubmit=()=>{
        console.log(inputRef.current.value);
    }
    const inputRef=useRef<any>();
    return (
        <div>
            <h1>UnControlled Components</h1>
            <input ref={inputRef} type="text" defaultValue={"Bhav"}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
