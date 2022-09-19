import {Request, Response} from "express"
import { getMovieByString } from "../functions/Movie/getMovieByString"

const getMovieByStringReq = async (req: Request, res: Response) => {
    try {
       const result = await getMovieByString(req.query.string as string)
   
        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

export default getMovieByStringReq