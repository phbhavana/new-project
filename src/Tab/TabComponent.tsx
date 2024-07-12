import React from 'react'
import Maps from 'Maps/Maps';
import WeatherApp from 'Weather/WeatherApp';
import {useState} from 'react';
import './TabComponent.css';

const TabComponent= () => {
    const[active,setActive]=useState("1");
    const handleTabClick =(tab:any)=>{
        setActive(tab);
        
    }
    return (
        <div>
        <div>
            <button className='button' onClick={()=>handleTabClick("1")}>WeatherApp</button>
            
            <button className='button' onClick={()=>handleTabClick("2")}>Maps</button>
        </div>
        <div>
            {active==="1" && 
            <div>
                <WeatherApp/>
            </div>}
            {active==="2" && 
            <div>
                <Maps/>
            </div>}
        </div>
        </div>
    )
}
export default TabComponent;
