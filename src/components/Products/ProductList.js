import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const ProductsList = () => {
     const [ products, setProducts ] = useState([])
     const history = useHistory()

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


        const purchaseItem = (productsObject) => {
                    
                    let today = new Date();
                    let dd = String(today.getDate()).padStart(2, '0');
                    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                    let yyyy = today.getFullYear();                            
                    today = yyyy + '-' + mm + '-' + dd


                const newPurchase = {
                    amountSpent : productsObject.cost,
                    date : today,
                    customerId : parseInt(localStorage.getItem("kandy_customer")),
                    productId : productsObject.id
                }

                const fetchOption = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newPurchase)
                }
                return fetch("http://localhost:8089/purchases", fetchOption)
                    .then(() => {
                        history.push("/purchases")
                    })
        }
        
 
     return (
         <>
         {
             products.map(
                 (productsObject) => {
                     return <div key={`products--${productsObject.id}`}>
                         <p>{productsObject.name} costs {productsObject.cost} and 
                         its type is {productsObject.productType.type}
                         <button onClick={() => {
                            purchaseItem(productsObject)
                         }}>Buy Some Candy</button>                         
                         </p>
                    </div>
                 }
             )
         }
         </>
     )
 }
