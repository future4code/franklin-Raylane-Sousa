import {Request, Response} from "express"
import connection from "../../connection";

const updateUser = async (id: any, name: string, nickname: string): Promise<any> => {
    await connection("TodoListUser")
      .update({
        name: name,
        nickname: nickname
      })
      .where("id", id);
  };

const updateUserReq = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        await updateUser(id,req.body.name, req.body.nickname);
        res.status(200).send({
          message: "Success",
        });
      } catch (err) {
        res.status(400).send({
          message: err,
        });
      }
}

export default updateUserReq