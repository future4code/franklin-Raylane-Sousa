import {useNavigate} from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToRecipesList } from '../routes/coordinator'

const useUnprotectedPage = () => {
    const navigate = useNavigate() 
    useLayoutEffect(() => { //primeiro verifica depois carrega diferente de useEffect
    const token = localStorage.getItem('token') //pega o token do local storage
    if (token) { // existe token
        goToRecipesList(navigate) //vai para a tela de receitas
    }
}, [navigate])
}

export default useUnprotectedPage