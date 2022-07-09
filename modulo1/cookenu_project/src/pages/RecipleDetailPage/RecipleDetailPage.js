import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import { RecipeDetailContainer, RecipeDetailImage, ScreenDetailContainer } from './styledDetail'

const RecipleDetailPage = () => {
    useProtectedPage()
    const params = useParams() //variavel params que armazena o id da url
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]

    return (
    <ScreenDetailContainer>
        {recipe &&
        <RecipeDetailContainer>
            <RecipeDetailImage src={recipe.image}/>
            <h1>{recipe && recipe.title}</h1>
            <p>{recipe.description}</p>
        </RecipeDetailContainer>
        }
    </ScreenDetailContainer> 
    )
}


export {RecipleDetailPage}