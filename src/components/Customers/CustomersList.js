import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const CustomersList = () => {   
    const [customers, displayCustomers] = useState([])
   
    useEffect(
        () => {
            fetch("http://localhost:8089/customers")
                .then(res => res.json())
                .then((data) => {
                    displayCustomers(data)
                })
        },
        []
    )

    return (
        <>            
            <div>
            {
                customers.map(
                    (displayCustomers) => {
                        return <p key={`customer--${displayCustomers.id}`}>
                            {displayCustomers.name}, {displayCustomers.address}, {displayCustomers.email}                        
                        </p>
                    }
                )
            }
            </div>           
        </>
    )
}
