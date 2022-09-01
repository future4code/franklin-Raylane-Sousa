import {Request, Response} from "express"
import connection from "../connection"

const getAllActors = async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`SELECT * FROM Actor`) 
         console.log(result)
         res.send(result)
      } catch (error) {
            console.log(error)
        res.status(500).send("Unexpected error")
      }
}

export default getAllActors