import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/Authenticator";
import { authenticationData } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      
      const { email } = req.body
      const token = req.headers.authorization as string

      if (!email) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      if(!token) {
         res.statusCode = 422
         res.statusMessage = "Token não informado"
         throw new Error()
      }

      const authenticator = new Authenticator()
      const tokenData = authenticator.getTokenData(token) as authenticationData

      if(!tokenData) {
         res.statusCode = 401
         req.statusMessage = "Token inválido"
         throw new Error()
      }


      await connection('UserLbn')
         .update({ email })
         .where({ id: tokenData.id })

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send("Sucess!")
      }

      res.end()
   }
}