import React from "react";
import { Route } from "react-router-dom"
import { LocationsList } from "./Locations/LocationsList";
import { ProductsList } from "./Products/ProductList";
import { EmployeeList } from "./Employees/EmployeesList";
import { EmployeeForm } from "./Employees/EmployeeForm";

export const ApplicationViews = () => {
    return (
        <>
                       
            <Route path="/locations">
                <LocationsList />
            </Route>

            <Route exact path="/products">
                <ProductsList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/employees/create">
                <EmployeeForm />
            </Route>

        </>
    )
}
