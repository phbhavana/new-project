import React, { useEffect, useState } from 'react'

export default function InternetStatus() {
    const[isOnline, setIsOnline]= useState(true);

    useEffect(()=>{
        function setOnline() {
            setIsOnline(true);
        }
        function setOffline() {
            setIsOnline(false);
        }
        window.addEventListener('online',setOnline)
        window.addEventListener('offline',setOffline)
        return (()=>{
            window.addEventListener('online',setOnline)
            window.removeEventListener('offline',setOffline) 
     } )
    }, [] )
    return isOnline;
    
}
