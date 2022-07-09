import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorPage } from '../pages/ErrorPage.js/ErrorPage'
import {AddRecipesPage} from '../pages/AddReciplesPage/AddRecipesPage'
import {LoginPage} from '../pages/LoginPage/LoginPage'
import {RecipleDetailPage} from '../pages/RecipleDetailPage/RecipleDetailPage'
import {RecipleListPage} from '../pages/ReciplesListPage/RecipleListPage'
import {SignUpPage} from '../pages/SignUpPage/SignUpPage'


const Router = ({setRightButtonText}) => {
    return (
            <Routes>
                <Route element={<LoginPage setRightButtonText={setRightButtonText}/>} path="/Login"/>    

                <Route element={<SignUpPage/>} path="/cadastro"/>
                    
                <Route element={ <RecipleListPage/>} path="/"/>
                    
                <Route element={<AddRecipesPage/>} path="/adicionar-receita"/>
                    
                <Route element={<RecipleDetailPage/>} path="/detalhe/:id"/>    
              
                <Route element={<ErrorPage/>} path="*"/>
                    
            </Routes>
    )
}

export default Router
