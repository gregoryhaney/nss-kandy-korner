import React from "react"
import { Route, Redirect } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"


export const KandyKorner = () => {
    return (
        <>
        <NavBar />
        <ApplicationViews />
        </>
    )
}
