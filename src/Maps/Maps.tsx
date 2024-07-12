import { GoogleMap, LoadScript,  MarkerF } from '@react-google-maps/api'
import React from 'react'

export default function Maps() {
  const mapStyle={
    width:'100%',
    height:'400px'
  }
  const mapCenter={
    lat:12.956033,
    lng: 77.709168
  }
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAr1nIQv1JKrn2s77eDV0LeIvhzNhfnSDs">
        <GoogleMap zoom={15} mapContainerStyle={mapStyle} center={mapCenter}>
          <MarkerF position={mapCenter}/>
        </GoogleMap>
      </LoadScript>

    </div>
  )
}
