import tw from "tailwind-styled-components";
import { useEffect } from "react";
import mapboxGl from "!mapbox-gl";

mapboxGl.accessToken = 'pk.eyJ1IjoiZGhydXZhbC0zMDA2IiwiYSI6ImNsMXBlY3Z6NzFkNmIzZHJ6cTVkNHljMmgifQ.FbycyK5ekHiX7JxhKQdc8g';
const Map = (props) => {
  
    useEffect(() =>{
        const map = new mapboxGl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [-74.5, 40], 
        zoom: 9
        
    })
      if(props.PickUpCordinates){
           addToPickupMarker(map);
      }
      if(props.DropOffCordinates){
           addToDropoffMarker(map);
      }
      if(props.PickUpCordinates && props.DropOffCordinates){
        map.fitBounds([
          props.PickUpCordinates,
          props.DropOffCordinates
        ],{
          padding: 40,
        })
      }
    },[props.PickUpCordinates, props.DropOffCordinates])

    const addToPickupMarker = (map) => {
        const marker = new mapboxGl.Marker() // initialize a new marker
          .setLngLat(props.PickUpCordinates) // Marker [lng, lat] coordinates
          .addTo(map); // Add the marker to the map
    }

    const addToDropoffMarker = (map) => {
        const marker = new mapboxGl.Marker() // initialize a new marker
          .setLngLat(props.DropOffCordinates) // Marker [lng, lat] coordinates
          .addTo(map); // Add the marker to the map
    }
  

        
  return (
   <>   
        <Wraper id="map">Map</Wraper>
   </>
  )
}

const Wraper = tw.div`
flex-1
`

export default Map;