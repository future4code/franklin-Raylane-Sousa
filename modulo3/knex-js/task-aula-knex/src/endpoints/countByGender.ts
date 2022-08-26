import {Request, Response} from "express"
import { countActorsByGender } from "../functions/Actor/countActorsByGender"

const countByGender = async (req: Request, res: Response) => {
    try {
       const count = await countActorsByGender(req.query.gender as string)
   
        res.status(200).send({quantidade: count})
            
    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
}

export default countByGender