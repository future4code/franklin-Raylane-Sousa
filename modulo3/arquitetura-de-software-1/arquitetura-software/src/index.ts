import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import UserController from './controller/UserController'
import UserDatabase from './database/UserDatabase'
import { Authenticator } from './services/Authenticator'
import { IdGenerator } from './services/IdGenerator'
import { HashManager } from './services/HashManager'
import UserBusiness from './business/UserBusiness'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new Authenticator(),
        new IdGenerator(),
        new HashManager()
    )
)


app.get("/users", userController.getAllUsers)
app.post("/users/signup", userController.signup)
app.post("/users/login", userController.login)
app.delete("/users/:id", userController.deleteUser)


app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

