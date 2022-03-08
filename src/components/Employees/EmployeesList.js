import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
      
    const [emps, displayEmployees] = useState([])
    const history = useHistory()

        const getEmployees = () => {
            fetch("http://localhost:8089/employees?_expand=location")
                    .then(res => res.json())
                    .then((data) => {
                        displayEmployees(data)
                    })
        }

        const fireEmployee = (id) => {
            fetch(`http://localhost:8089/employees/${id}`, {
                method: "DELETE"                
            })
                .then(getEmployees())
        }


        useEffect(
            () => {
                getEmployees()
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
                            {displayEmployees.name} works at our {displayEmployees.location.address}, {displayEmployees.location.state}, {displayEmployees.location.country} site.                        
                            <button onClick={() => {
                            fireEmployee(displayEmployees.id)
                         }}>Fire Employee</button> 
                        
                        </p>
                    }
                )
            }
            </div>
           
        </>
    )
}
