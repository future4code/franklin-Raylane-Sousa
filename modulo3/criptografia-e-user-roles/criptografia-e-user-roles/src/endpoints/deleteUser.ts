import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export default async function deleteUser(req: Request, res: Response){
    try{
        const token = req.headers.authorization as string

        if(!token){
            throw new Error("Token não enviado")
        }
        const authenticator = new Authenticator()
        const data = authenticator.getData(token)

        if (data.role !== "ADMIN") {
            throw new Error("Only a admin user can access this funcionality")
        }
        
        const id = req.params.id
        const userDB = new UserDatabase()
        const user = await userDB.deleteUser(id)

        res.send({message: 'Deleted'})


    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message || "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}