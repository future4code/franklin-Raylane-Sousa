import React from 'react'
import { ErrorPageContainer, ErrorImage, TextError } from './styledError'
import error from '../../assets/erro.png'

const ErrorPage = () => {
    
    return (
    <ErrorPageContainer>
        <ErrorImage src={error}/>
        <TextError>404 - Página não encontrada</TextError>
    </ErrorPageContainer> 
    )
}


export {ErrorPage}