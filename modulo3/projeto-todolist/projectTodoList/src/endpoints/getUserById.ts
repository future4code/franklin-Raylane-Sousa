import {Request, Response} from "express"
import connection from "../connection"

export const userById = async (id: string): Promise<any> => {
     const result = await connection.raw(
      `SELECT * FROM TodoListUser WHERE id = ${id}`
    ) 
      return result[0][0]
  }

const getUserByIdReq = async (req: Request, res: Response) => {
    try {
       const result = await userById(req.params.id)
        if (!result) {  //Se não houver usuário, retorna o erro
            res.status(501).send({message: "User Id doesn't exist"})
        }
        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
}

export default getUserByIdReq