import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import Authenticator from "./services/Authenticator"
import { authenticationData } from "./types"
import login from "./endpoints/login"
import getUsers from "./endpoints/getUsers"
import getUserProfile from "./endpoints/getUserProfile"


app.get('/users', getUsers)
app.get('/user/profile', getUserProfile)
app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
