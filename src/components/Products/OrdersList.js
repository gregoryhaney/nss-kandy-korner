/*      The purpose of this component is to 
        display the purchases the current user wants
        to make after they've clicked the "Buy Some Candy" button.
        The order will display the candy name and the price.
*/

import React, { useEffect, useState } from "react"

export const OrdersList = () => {
    const [ orders, setOrders ] = useState([])   

// Get current customer value and set to variable to use in the FETCH 
    useEffect(
        () => {
            fetch(`http://localhost:8089/purchases?_expand=product&customerId=${localStorage.getItem("kandy_customer")}`)
            .then(res => res.json())
            .then((ordersArray) => {
                setOrders(ordersArray)
            })
        },
        []
    )

    return (
        <>
        {
            orders.map(
                (order) => {
                    return <div key={`ordersObject--${order.id}`}>
                        <p>{order.product.name} costs {order.amountSpent}
                       
                        {/* <button onClick={() => {
                            purchaseItem()
                        }}>Buy Some Candy</button> */}                        
                        </p>
                   </div>
                }
            )
        }
        </>
    )
}