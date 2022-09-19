import {Request, Response} from "express"
import { createMovie } from "../functions/Movie/createMovie";

const createMovieReq = async (req: Request, res: Response) => {
    try {
        await createMovie(
          req.body.id,
          req.body.title,
          req.body.synopsis,
          req.body.release_Date,
          req.body.evaluation,
          req.body.playing_limit_date
        );
    
        res.status(200).send({
          message: "Success"
        });
      } catch (err) {
        res.status(400).send({
          message: err,
        });
      }
}

export default createMovieReq