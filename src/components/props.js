import React from 'react';
const Greet = (props) => {
    console.log(props);
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <p> {props.loc}</p>
            {props.children}
        </div>
    )
}
export default Greet