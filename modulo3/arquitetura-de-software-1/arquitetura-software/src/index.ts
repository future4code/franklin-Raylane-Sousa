import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import UserController from './controller/UserController'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const userController = new UserController()

app.get("/users", userController.getAllUsers)
app.post("/users/signup", userController.signup)
app.post("/users/login", userController.login)


app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

