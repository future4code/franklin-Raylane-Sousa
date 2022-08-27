import {Request, Response} from "express"
import connection from "../connection";

const userByTerm = async (string: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM TodoListUser WHERE nickname OR email LIKE "%${string}%"`);
  
    return result[0];
  };

const queryUserByTermReq = async (req: Request, res: Response) => {
    try {
       const result = await userByTerm(req.query.string as string)
        res.status(200).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}

export default queryUserByTermReq