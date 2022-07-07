import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";



export const EmployeeForm = () => {
    const [ locations, setLocations ] = useState([])

    const [ employees, updateEmployee ] = useState({
        name: "",
        locationId: "",
        manager: false,
        fullTime: false,
        payRate: ""
    });
    const history = useHistory()



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



        // the object we wanna send to the API when new form is submitted:
        // use the preventDefault to prevent default behavior of the
        // browser after the form is submitted.
    const hireEmployee = (evt) => {
        evt.preventDefault()

        const newEmployee = {
            name: employees.name,
            locationId: employees.locationId,
            manager: employees.manager,
            fullTime: employees.fullTime,
            payRate: employees.payRate
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }
        return fetch("http://localhost:8089/employees", fetchOption)
                .then(() => {
                    history.push("/employees")
                })
    }

    return (
        <form className="hireEmployeeForm">
            <h2 className="hireEmployeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                            onChange={
                                (evt) => {
                                    const copy = {...employees}
                                    copy.name = evt.target.value
                                    updateEmployee(copy)
                                }
                            }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full name..."
                        />
                </div>
            </fieldset>

                                

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employee_location">Location:</label>
                    <select defaultValue={'0'}
                        onChange={
                            (evt) => {
                                const copy = {...employees}
                                copy.locationId = parseInt(evt.target.value)
                                updateEmployee(copy)
                    }}>
                        <option value="0">Select your location...</option>
                            {locations.map(location => {
                                return <option value={location.id}>
                                    {location.address}, {location.state} {location.country}
                                    </option>                        
                            })}   
                    </select>
                </div>
            </fieldset>



            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager</label>
                    <input 
                        onChange={
                            (evt) => {
                                const copy = {...employees}
                                copy.manager = evt.target.checked
                                updateEmployee(copy)
                            }
                        } 
                        required autoFocus
                        type="checkbox"
                        className="form-control"
                        placeholder="Manager?"
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time</label>
                    <input 
                        onChange={
                            (evt) => {
                                const copy = {...employees}
                                copy.fullTime = evt.target.checked
                                updateEmployee(copy)
                            }
                        } 
                        required autoFocus
                        type="checkbox"
                        className="form-control"
                        placeholder="Full Time?"
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="payRate">Hourly Pay Rate</label>
                    <input 
                        onChange={
                            (evt) => {
                                const copy = {...employees}
                                copy.payRate = evt.target.value
                                updateEmployee(copy)
                            }
                        } 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Hourly pay rate..."
                        />
                </div>
            </fieldset>



            <button onClick={hireEmployee} className="btn btn-primary">
                Hire Employee
            </button>
        </form>
    )
}

