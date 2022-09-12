import {Request, Response} from "express"
import connection from "../../connection";

const newUser = async (
    name: string,
    nickname: string,
    email: string
  ): Promise<void> => {
    await connection
      .insert({
        name: name, 
        nickname: nickname,
        email: email
      })
      .into("TodoListUser");
  };

const createUserReq = async (req: Request, res: Response) => {       
    try {
        await newUser(
        req.body.name,
        req.body.nickname,
        req.body.email
        );

        const result = await connection("TodoListUser")
        res.status(200).send(result);
      } catch (err) {
        res.status(400).send({
          message: err,
        });
      }
}

export default createUserReq