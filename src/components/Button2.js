import React from 'react';
let count = 0;
const addOne = () => {
  count++;
  Button2();
};
const minusOne = () => {
  count--;
  Button2();
};
const reset = () => {
  count = 0;
  Button2();
};
const Button2 = () => {
   
      return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
      );  
};
export default Button2;
