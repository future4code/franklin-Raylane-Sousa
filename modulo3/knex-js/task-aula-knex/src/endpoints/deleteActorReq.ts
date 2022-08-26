import {Request, Response} from "express"
import { deleteActorById } from "../functions/Actor/deleteActorById";

const deleteActorReq = async (req: Request, res: Response) => {
      try {
      await deleteActorById(req.params.id);
    res.status(400).send("Sucess")
  } catch (err) {
    res.status(400).send({
      message: err,
    });
  }
}

export default deleteActorReq