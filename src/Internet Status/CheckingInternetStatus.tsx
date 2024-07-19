import React from 'react'
import InternetStatus from './InternetStatus';
export default function CheckingInternetStatus() {
    const isOnline=InternetStatus();
    return (
        <div>
             <div>
                {isOnline ? "✅Connected to internet":"❌Not Connected to internet"}
            </div>
        </div>
    )
}
