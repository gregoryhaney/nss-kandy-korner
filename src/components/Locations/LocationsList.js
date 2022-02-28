
 import React, { useEffect, useState } from "react"

 export const LocationsList = () => {
     const [locations, setLocations] = useState([])
   
 
     useEffect(
         () => {
             fetch("http://localhost:8089/locations")
             .then(res => res.json())
             .then((locationsArray) => {
                 setLocations(locationsArray)
             })
         },
         []
     )
 


     return (
         <>
           

         {
             locations.map(
                 (locationsObject) => {
                     return <h3 key={`locations--${locationsObject.id}`}>{locationsObject.address}</h3>
                 }
             )
         }
         </>
     )
 }
 
 
