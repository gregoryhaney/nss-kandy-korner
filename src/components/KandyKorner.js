import React from "react"
import { LocationsList } from './Locations/LocationsList.js'
import { ProductsList } from "./Products/ProductList.js"

  
  export const KandyKorner = () => {
 
      // required is return with parenthesis with the
      // HTML we want to see in browser within the parenthesis
      return (
          <>
           <h1>Kandy Korner</h1>
 
           
           <h2>Locations List</h2>
           <LocationsList />
 
           <h2>Products List</h2>
           <ProductsList />
         
          </>
      )
  }
  
  
 