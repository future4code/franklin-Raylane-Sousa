import {Request, Response} from "express"
import { updateSalaryById } from "../functions/Actor/updateSalaryById";

const updateSalaryReq = async (req: Request, res: Response) => {
    try {
        await updateSalaryById(req.body.id, req.body.salary);
        res.status(200).send({
          message: "Success",
        });
      } catch (err) {
        res.status(400).send({
          message: err,
        });
      }
}

export default updateSalaryReq