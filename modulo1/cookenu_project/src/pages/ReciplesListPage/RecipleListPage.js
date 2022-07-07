import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import {useRequestData} from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/url'
import {RecipeListContainer, AddRecipeButton} from './styledList'
import {RecipeCard} from '../../components/RecipeCard/RecipeCard'
import { goToAddRecipes, goToRecipeDetail} from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const RecipleListPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    console.log(recipes)

    const onClickCard = (id) => {
        goToRecipeDetail(navigate, id)

    }

    const recipesCards = recipes.map((recipe) =>{
        return (
        <RecipeCard
            key={recipe.recipe_id}
            title = {recipe.title}
            image = {recipe.image}
            onClick={() => onClickCard(recipe.recipe_id)}
        />
        )
    })

    return (
    <RecipeListContainer>
        {recipesCards}
        <AddRecipeButton onClick={() => goToAddRecipes(navigate)}>+</AddRecipeButton>
    </RecipeListContainer> 
    )
}


export {RecipleListPage}