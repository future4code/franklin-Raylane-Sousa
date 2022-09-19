import {Request, Response} from "express"
import { averageSalaryByGender } from "../functions/Actor/averageSalaryByGender"

const avgSalaryByGenderReq = async (req: Request, res: Response) => {
    try {
       const average = await averageSalaryByGender(req.query.gender as string)
   
        res.status(200).send({Média: average})

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
}

export default avgSalaryByGenderReq