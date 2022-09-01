import {Request, Response} from "express"
import { getActorById } from "../functions/Actor/getActorById"


const getActorByIdReq = async (req: Request, res: Response) => {
    try {
       const result = await getActorById(req.params.id)
   
        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
}

export default getActorByIdReq