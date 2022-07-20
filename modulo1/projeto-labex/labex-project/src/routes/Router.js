import React from "react"
import { Routes,  Route  } from "react-router-dom"
import { AppFormPage } from "../pages/AppFormPage/AppFormPage"
import { HomePage } from "../pages/HomePage/HomePage"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { TripDetailsPage } from "../pages/TripDetailsPage/TripDetailsPage"
import { ListTripPage } from "../pages/ListTripPage/ListTripPage"
import { AdminHomePage } from "../pages/AdminHomePage/AdminHomePage"
import { CreateTripPage } from "../pages/CreateTripPage/CreateTripPage"


export const Router = () => {
return (
        <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="/lista" element={<ListTripPage/>}/>

          <Route path="/appform" element={<AppFormPage/>}/>

          <Route path="/login" element={<LoginPage/>}/>

          <Route path="/admin/trips/list" element={<AdminHomePage/>}/>

          <Route path="/admin/trips/:id" element={<TripDetailsPage/>}/>

          <Route path="/admin/trips/create" element={<CreateTripPage/>}/>

        </Routes>
        )
}