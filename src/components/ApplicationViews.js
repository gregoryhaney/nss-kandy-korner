import React from "react";
import { Route } from "react-router-dom"
import { LocationsList } from "./Locations/LocationsList";
import { ProductsList } from "./Products/ProductList";

export const ApplicationViews = () => {
    return (
        <>
                       
            <Route path="/locations">
                <LocationsList />
            </Route>

            <Route exact path="/products">
                <ProductsList />
            </Route>

        </>
    )
}
