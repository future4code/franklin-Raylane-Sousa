import axios from 'axios'
import {BASE_URL} from '../constants/url'

export const createRecipe = (body, clear) => {
    axios.post(`${BASE_URL}/recipe`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res)=>{
        alert(res.data.message) 
        clear()})
    .catch((err)=> alert(err))
} 