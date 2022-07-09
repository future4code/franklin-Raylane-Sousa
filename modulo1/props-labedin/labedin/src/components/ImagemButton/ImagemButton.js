import React from 'react';
import styled from 'styled-components'

const ImageButtonConteiner = styled.div` //styled componente que substitui a tag img
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`

const ButtonImg = styled.img`
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <ImageButtonConteiner>
            <ButtonImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageButtonConteiner>

    )
}

export default ImagemButton;