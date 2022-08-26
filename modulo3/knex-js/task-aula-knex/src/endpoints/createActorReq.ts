import {Request, Response} from "express"
import { createActor } from "../functions/Actor/createActor"

const createActorReq = async (req: Request, res: Response) => {    try {
        await createActor(
          req.body.id,
          req.body.name,
          req.body.salary,
          new Date(req.body.birth_date),
          req.body.gender,
          req.body.fav_ice_cream_flavor
        );
    
        res.status(200).send("Sucess!");
      } catch (err) {
        res.status(400).send({
          message: err,
        });
      }
}

export default createActorReq