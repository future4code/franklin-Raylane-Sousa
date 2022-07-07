import {useNavigate} from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToLogin } from '../routes/coordinator'

const useProtectedPage = () => {
    const navigate = useNavigate() //pegar o historico para verificar
    useLayoutEffect(() => { //primeiro verifica depois carrega diferente de useEffect
    const token = localStorage.getItem('token') //pega o token do local storage
    if (!token) { //se nao existe token
        goToLogin(navigate) //vai para a tela de login 
    }
}, [navigate])
}

export default useProtectedPage