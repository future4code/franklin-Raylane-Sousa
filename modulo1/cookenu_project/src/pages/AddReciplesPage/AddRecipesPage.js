import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { ScreenContainer } from './styledAdd'
import { AddRecipeForm } from './AddRecipeForm'


const AddRecipesPage = () => {
    useProtectedPage()
    
    return (
    <ScreenContainer>
        <h1>Adicionar Receita</h1>
         <AddRecipeForm/>
    </ScreenContainer> 
    )
}


export {AddRecipesPage}