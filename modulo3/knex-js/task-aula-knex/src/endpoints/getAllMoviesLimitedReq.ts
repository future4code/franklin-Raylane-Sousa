import {Request, Response} from "express"
import { getAllMoviesLimited } from "../functions/Movie/getAllMoviesLimited"

const getAllMoviesLimitedReq = async (req: Request, res: Response) => {
    try {
        const result = await getAllMoviesLimited() 
         res.status(200).send({movies: result})
      } catch (error) {
            console.log(error)
        res.status(500).send("Unexpected error")
      }
}

export default getAllMoviesLimitedReq