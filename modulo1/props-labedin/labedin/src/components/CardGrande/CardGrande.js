import React from 'react';
import './CardGrande.css'
import styled from 'styled-components'

const CardGrandeContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

`

const CardGrandeImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 0%;

`
function CardGrande(props) {
    return (
        <CardGrandeContainer>
            <CardGrandeImg src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </CardGrandeContainer>
    )
}

export default CardGrande;