
import styled from 'styled-components'
import React, {useState} from 'react'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export function SecaoComentario() {
	const [inputComenta, setInputComenta] = useState('')
	const [cardComenta, setCardComenta] = useState('')

	const handleComenta = (event) => {
		setInputComenta(event.target.value)

	}

	const submitComenta = () => {
		setCardComenta(inputComenta)

	}


	return (
		<CommentContainer>
			<p>{cardComenta}</p>
			<InputComentario
				placeholder={'Comentário'}
				value={inputComenta}
				onChange={handleComenta}
			/>
			<button onClick={submitComenta}>Enviar</button>
		</CommentContainer>
	)
}