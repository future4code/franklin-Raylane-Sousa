import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getProfile from "./endpoints/getProfile"
/* import { HashManager } from "./services/HashManager" */

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
app.get('/user/profile', getProfile)

/* //instancia do hash manager
const hashM = new hashManager()
//simulando senha e tentativas
const teste = async () => {
    const senha: string = "1234"
    const tentativaCor: string = "1234"
    const tentativaInc: string = '1212'

    const hash = await hashM.hash(senha) //gerando o hash da senha

    const resultTest = await hashM.compare(tentativaCor, hash)
    console.log("Resultado comparação: ", resultTest)

} 

teste() */