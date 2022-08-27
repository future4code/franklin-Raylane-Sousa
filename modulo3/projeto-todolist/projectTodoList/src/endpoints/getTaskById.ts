import {Request, Response} from "express"
import connection from "../connection";

const taskByID = async (id: string): Promise<any> => {

/* 	const result = await connection.raw(`
	SELECT * FROM TodoListTask
	WHERE COLUNA = "${id}"
	`);
   
	return result[0][0]; */

    const result = await connection()
        .select("*")
        .from("TodoListTask")
        .where({id: id});

	return result;
}

const getTaskByIdReq = async (req: Request, res: Response) => {
    try {
       const result = await taskByID(req.params.id)
        if (!result) {  //Se não houver task, retorna erro
            res.status(501).send({message: "Task doesn't exist"})
        }
        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
}

export default getTaskByIdReq