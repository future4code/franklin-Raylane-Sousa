import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { HeaderPage } from '../components/HeaderPage/HeaderPage'
import { SignUp } from '../components/SignUpPAge/SignUp'
import { UserList } from '../components/UserListPage/UserList'


export const Router = () => {
    return (
        <BrowserRouter>
        <HeaderPage/>
            <Routes>
                <Route element={<SignUp/>} path="/"/>    

                <Route element={<UserList/>} path="/users"/>
                    
            </Routes>
        </BrowserRouter>
    )
}


