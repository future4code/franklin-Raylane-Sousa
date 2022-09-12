import {Request, Response} from "express"
import connection from "../../connection";

//para atualizar body {id (tarefa, user_id(usuario que deseja atribuir a tarefa))}
const respTask = async (user_id: number, id: number ): Promise<any> => {
    await connection('TodoListTask')
      .update({
        user_id: user_id,
      })
      .where("id", id);
  };

const postRespTaskReq = async (req: Request, res: Response) => {
    try {
        await respTask(req.body.user_id, req.body.id);
        res.status(200).send({
          message: "Sucess! Task responsible updated.",
        });
      } catch (err) {
        res.status(400).send({
          message: err,
        });
      }
}

export default postRespTaskReq