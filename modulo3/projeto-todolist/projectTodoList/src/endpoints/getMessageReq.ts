import {Request, Response} from "express"

const getMessageReq = async (req: Request, res: Response) => {
    try {
         res.status(200).send({message:'Welcome TodoList'})
      } catch (error) {
            console.log(error)
        res.status(500).send("Unexpected error")
      }
}

export default getMessageReq