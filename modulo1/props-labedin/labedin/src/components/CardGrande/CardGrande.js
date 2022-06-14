import React from 'react';
import styled from 'styled-components'

const CardGrandeContainer = styled.div`  //styled componente que substitui a tag div
    display: flex;
    align-items: center;
    border: 15px solid gray;
    border-radius: 20px;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

` 

const CardGrandeImg = styled.img` //styled componente que substitui a tag img
    width: 70px;
    margin-right: 10px;
    border-radius: 0%;

`
function CardGrande(props) {     //componente (função do card grande)
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