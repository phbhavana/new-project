import React from 'react';
const WeatherApp = ()=>{
  const [value, setValue] = useState(" ");
    const onChange = (props)=>{
        setValue(props.target.value);
        

    return(
        <div className="App">
            <div>
            <input type="text" value={value} 
            />
            <button>Search</button>

            </div>
            
        </div>
    )
}
}
export default WeatherApp