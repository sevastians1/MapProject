import { Wrapper } from "@googlemaps/react-wrapper";
import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import "./map.css"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; 

export default function Map(){
const mapStyles = {
  width: '100%',
  height: '100%'
};

const MapContainer = () => {
    const locations = [
        {
          name: "Location 1",
          location: { 
            lat: 41.3954,
            lng: 2.162 
          },
        },
        {
          name: "Location 2",
          location: { 
            lat: 41.3917,
            lng: 2.1649
          },
        },
        {
          name: "Location 3",
          location: { 
            lat: 41.3773,
            lng: 2.1585
          },
        },
        {
          name: "Location 4",
          location: { 
            lat: 41.3797,
            lng: 2.1682
          },
        },
        {
          name: "Location 5",
          location: { 
            lat: 41.4055,
            lng: 2.1915
          },
        }
      ];
    const mapStyles = {        
      height: "100vh",
      width: "100%"};
    
    const defaultCenter = {
      lat: 41.3851, lng: 2.1734
    }
    
    function handleClickedMap(e){
        let latitude = e.latLng.lat()
        let longtitude  = e.latLng.lng()
        console.log(latitude, longtitude)
     }
     
    return (
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
            onClick={(event)=>handleClickedMap(event)}> 
                     {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }</GoogleMap>

    )
  }


 

    return (
        <Wrapper apiKey={"AIzaSyB4wGgBeJ9GkxWpGxjDdipNJK0dX1gGC0M"}>
        <MapContainer location={location} zoomLevel={17}/>
      </Wrapper>
    )
}
