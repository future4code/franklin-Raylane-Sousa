import {Request, Response} from "express"
import { searchActorByName } from "../functions/Actor/searchActorByName"

const getActorByName = async (req: Request, res: Response) => {
    try {
       const result = await searchActorByName(req.params.name)
   
        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
}

export default getActorByName