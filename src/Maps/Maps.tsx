import { GoogleMap, LoadScript,  MarkerF } from '@react-google-maps/api'
import React from 'react'

export default function Maps({weatherInfo}:any) {
  const mapStyle={
    width:'100%',
    height:'650px'
  }
  const mapCenter={
    lat:weatherInfo?.coord.lat || 12.956033,
    lng:weatherInfo?.coord.lon ||  77.709168
  }
  console.log("weatherInfo:",weatherInfo);
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAr1nIQv1JKrn2s77eDV0LeIvhzNhfnSDs">
        <GoogleMap zoom={15} mapContainerStyle={mapStyle} center={mapCenter}>
          <MarkerF position={mapCenter} />
        </GoogleMap>
      </LoadScript>

    </div>
  )
}
