import { GoogleMap, InfoWindowF, LoadScript,  MarkerF } from '@react-google-maps/api'
import React, { useState } from 'react'
import "./Maps.css"

export default function Maps({weatherInfo}:any) {
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const mapStyle={
    width:'100%',
    height:'650px'
  }
  const mapCenter={
    lat:weatherInfo?.coord.lat || 12.956033,
    lng:weatherInfo?.coord.lon ||  77.709168
  }
  const handleMarkerClick = () => {
    setShowInfoWindow(true);
  };

  const handleInfoWindowClose = () => {
    setShowInfoWindow(false);
  };
  console.log("weatherInfo:",weatherInfo);
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAr1nIQv1JKrn2s77eDV0LeIvhzNhfnSDs">
        <GoogleMap zoom={15} mapContainerStyle={mapStyle} center={mapCenter}>
          <MarkerF position={mapCenter} onClick={handleMarkerClick} />
          {showInfoWindow && (
            <InfoWindowF position={mapCenter} onCloseClick={handleInfoWindowClose}>
              <div>
                <h2>Location: {weatherInfo?.name}</h2>
                <p>Temperature: {weatherInfo?.main.temp}°C</p>
                <p>Weather: {weatherInfo?.weather[0].description}</p>
                <img src={`http://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}.png`} alt="Weather icon" className="weatherIconImg"/>
              </div>
            </InfoWindowF>
          )}
        </GoogleMap>
      </LoadScript>

    </div>
  )
}
