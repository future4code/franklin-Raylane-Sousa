import {Request, Response} from "express"
import connection from "../connection"

export const allUsers = async (): Promise<any> => {
     const result = await connection("TodoListUser") 
      return result
  }

const getAllUsersReq = async (req: Request, res: Response) => {
    try {
       const result = await allUsers()
        if (!result) {  //Se não houver usuário, retorna o erro
            res.status(501).send({message: "List is empty"})
        }
        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
}

export default getAllUsersReq