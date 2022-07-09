import React from 'react';
import { InputsContainer, BtnButton, LabelText, AddRecipeFormContainer} from "./styledAdd";
import { createRecipe } from '../../services/recipe';
import {useForm} from '../../hooks/useForm'

export const AddRecipeForm = () => {
  /*   const navigate = useNavigate() */
    const [form, onChange, clear] = useForm({title:"", description:"", image:""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear)
    }

    return (
    <form onSubmit={onSubmitForm}>
        <AddRecipeFormContainer>
            <InputsContainer>
            <LabelText
                name={"title"}
                value={form.title}
                onChange={onChange}
                placeholder={"Título"}
            />
            <LabelText
                name={"description"}
                value={form.description}
                onChange={onChange}
                placeholder={"Descrição"}
            />
            <LabelText
                name={"image"}
                value={form.image}
                onChange={onChange}
                placeholder={"Imagem"}
            />
            </InputsContainer>
            <BtnButton type={'Submit'}>Adicionar Receita</BtnButton> 
        </AddRecipeFormContainer>
    </form>
    )
}

