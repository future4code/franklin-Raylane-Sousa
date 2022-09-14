import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export default async function getUser(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator()
        const tokenData = authenticator.getData(token);


        const userDB = new UserDatabase()
        const user = await userDB.getById(tokenData.id);

        res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role,
        });

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message || "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}