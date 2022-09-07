import {Request, Response} from "express"
import connection from "../connection"

export default async function getUsers(req: Request, res: Response): Promise<void>{
    try{

       const result = await connection.select("*").from("UserLbn")
        res.status(201).send(result[0])

    } catch(e) {
        res.status(400).send({message:e})
    }
}