 import React, { useEffect, useState } from "react"

 export const ProductsList = () => {
     const [products, setProducts] = useState([])
   
 
     useEffect(
         () => {
             fetch("http://localhost:8089/products?_expand=productType")
             .then(res => res.json())
             .then((productsArray) => {
                 setProducts(productsArray)
             })
         },
         []
     )
 


     return (
         <>
           

         {
             products.map(
                 (productsObject) => {
                     return <div key={`products--${productsObject.id}`}>
                         <p>{productsObject.name} costs {productsObject.cost} and 
                         its type is {productsObject.productType.type}</p>
                    </div>
                 }
             )
         }
         </>
     )
 }
 
 