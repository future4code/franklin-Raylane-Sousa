import {Request, Response} from "express"
import connection from "../../connection";

const userByTerm = async (termo: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT tlu.id, tlu.nickname FROM TodoListUser tlu WHERE nickname OR email LIKE "%${termo}%"`);
  
    return result[0];

  };

const queryUserByTermReq = async (req: Request, res: Response) => {
    try {
       const result = await userByTerm(req.query.termo as string)
        res.status(200).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}

export default queryUserByTermReq