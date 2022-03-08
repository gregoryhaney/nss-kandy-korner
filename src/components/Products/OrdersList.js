import React, { useEffect, useState } from "react"


/* the purpose of this component is to 
    display the purchases the current user wants
    to make after they've clicked the "Buy Some Candy" button.

    the order will display the candy name and the price.

*/

export const OrdersList = () => {
    const [orders, setOrders] = useState([])
   

// get current customer value and set to variable to use in the FETCH
    const currentCustomer = localStorage.getItem("kandy_customer")

    useEffect(
        () => {
            fetch(`http://localhost:8089/purchases?_expand=product&customerId=${currentCustomer}`)
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