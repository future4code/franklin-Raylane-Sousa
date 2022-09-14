import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getProfile from "./endpoints/getProfile"
import deleteUser from "./endpoints/deleteUser"
import getUser from "./endpoints/getUSer"
/* import { HashManager } from "./services/HashManager" */

app.get('/user', getUser)
app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
app.delete('/user/:id', deleteUser)
