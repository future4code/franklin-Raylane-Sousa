import {Request, Response} from "express"
import { getUserById } from "../data/getUserById"
import Authenticator from "../services/Authenticator";
import { authenticationData} from "../types"

export default async function getUserProfile(req: Request, res: Response): Promise<void>{
    try{
       const token = req.headers.authorization as string

       const authenticator = new Authenticator()
       const auth  = authenticator.getData(token)

       const user = await getUserById(auth.id)

        res.status(201).send({
            id: user.id,
            email: user.email
        })

    } catch(e) {
        res.status(400).send({message:e})
    }
}