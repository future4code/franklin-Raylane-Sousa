import {useState} from "react";


const useForm = (initialState) => { //recebe um estado incial que é um objeto com cada um dos campos
    const [form, setForm] = useState(initialState) //cria o estado

    const onChange = (event) => { //funcao que muda o estado para funcionar precisa dos campos de value on change e name
    const {value, name} = event.target
    setForm({...form, [name]:value})
}

const clear = () => { //função de limpar o formulario, retornando ele para o seu estado inicial
    setForm(initialState)
}

return [form, onChange, clear]  //retorno das funções
}

export {useForm}
