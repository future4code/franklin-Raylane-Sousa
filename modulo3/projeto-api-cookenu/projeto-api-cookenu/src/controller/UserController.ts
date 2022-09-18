import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { InGetUsersDTO, InLoginDTO, InSignupDTO } from "../models/User";

export class UserController {
    constructor (
        protected userBusiness: UserBusiness
    ) {}

    public signup = async (req: Request, res: Response) => {
        try {
            const input: InSignupDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.signup(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error" })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: InLoginDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.login(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error" })
        }
    }

    public getUsers = async (req: Request, res: Response) => {
        try {
            const input: InGetUsersDTO = {
                token: req.headers.authorization,
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const response = await this.userBusiness.getUsers(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error" })
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization,
                idToDelete: req.params.id
            }

            const response = await this.userBusiness.deleteUser(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error"})
        }
    }

    public editUser = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization,
                idToEdit: req.params.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.editUser(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error" })
        }
    }

    public getYourProfile = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization
            }

            const response = await this.userBusiness.getYourProfile(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getUserByID = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization,
                id:  req.params.id
            }

            const response = await this.userBusiness.getUserById(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}