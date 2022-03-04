import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    
    const [locations, displayLocations] = useState([])
    const [emps, displayEmployees] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8089/locations")
                .then(res => res.json())
                .then((data) => {
                    displayLocations(data)
                })
        },
        []
    )


    useEffect(
        () => {
            fetch("http://localhost:8089/employees")
                .then(res => res.json())
                .then((data) => {
                    displayEmployees(data)
                })
        },
        []
    )



    return (
        <>
            <div>
              <button onClick={() => history.push("/employees/create")}>Hire Employee</button>
            </div>
            
                    
            <div>
            {
                emps.map(
                    (displayEmployees) => {
                        return <p key={`employee--${displayEmployees.id}`}>
                            {displayEmployees.name}.                        
                        </p>
                    }
                )
            }
            </div>
           
        </>
    )
}
