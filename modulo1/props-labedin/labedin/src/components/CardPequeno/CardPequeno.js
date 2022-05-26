import React from 'react';
import styled from 'styled-components'

const CardPequenoContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;

`

const CardPequenoImg = styled.img`
    width: 50px;
    margin-right: 10px;
    border-radius: 0%;

`

function CardPequeno(props) {
    return (
        <CardPequenoContainer>
            <CardPequenoImg src={ props.imagem }/> 
            <p><b>{props.nome}</b>{props.descricao}</p>
        </CardPequenoContainer>
    )
}

export default CardPequeno;