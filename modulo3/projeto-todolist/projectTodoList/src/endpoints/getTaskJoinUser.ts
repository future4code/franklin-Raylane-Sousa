//ENDPOINT EM REFINAMENTO - ERRO DE TIPO
import {Request, Response} from "express"
import connection from "../connection";

const taskJoinUser = async (id: any): Promise<any> => {


 	const result = await connection.raw(`
	SELECT *
    FROM TodoListTask tlt
    LEFT JOIN TodoListUser tlu ON tlt.user_id = tlt.id WHERE tlt.user_id = ${id}
	`);
    
	return result[0][0];

}

const getTaskJoinUserReq = async (req: Request, res: Response) => {
    try {
    const id = req.params.id
       const result = await taskJoinUser(id)
       if (!result) {
        res.status(501).send({message: ""})
       }
        res.status(200).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}

export default getTaskJoinUserReq