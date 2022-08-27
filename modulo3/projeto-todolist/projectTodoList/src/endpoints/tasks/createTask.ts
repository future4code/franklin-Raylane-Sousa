import {Request, Response} from "express"
import connection from "../../connection";

const newTask = async (
    title: string,
    description: string,
    status: string,
    limit_date: Date,
    user_id: number
  ): Promise<void> => {
    await connection
      .insert({
        title: title,
        description: description,
        status: status,
        limit_date: limit_date,
        user_id: user_id
      })
      .into("TodoListTask");
  };

const createTaskReq = async (req: Request, res: Response) => {       
    try {
        await newTask(
        req.body.title,
        req.body.description,
        req.body.status,
        req.body.limit_date, 
        req.body.user_id
        );
        const result = await connection("TodoListTask")
        res.status(200).send(result);
      } catch (err) {
        res.status(400).send({
          message: err,
        });
      }
}

export default createTaskReq