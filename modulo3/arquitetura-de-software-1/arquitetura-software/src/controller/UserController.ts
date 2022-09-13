import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import UserDatabase from "../database/UserDatabase";

export default class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
        //recebe requisição
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        //instância proxima camada
            const userBusiness = new UserBusiness()
            const response = await userBusiness.signup(input)

        //devolve resposta   
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }

    public login = async (req: Request, res: Response) => {
        try {

            const input: any = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.login(input)
 
            res.status(201).send(response)
        } catch (error: unknown) {
            console.log(error)
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }

    public getAllUsers = async (req: Request, res: Response) => {
        try {

            const userDb = new UserDatabase()
            const response = await userDb.getAll()
 
            res.status(201).send(response)
        } catch (error: unknown) {
            console.log(error)
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }
}