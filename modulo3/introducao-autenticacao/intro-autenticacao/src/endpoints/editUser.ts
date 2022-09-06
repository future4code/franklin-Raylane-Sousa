import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/Authenticator";
import { authenticationData } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      
      // Exemplo 5
      // Transforme o endpoint de editar usuário em um endpoint 
      // autenticado. Para isso, ele deve:

      //Receber um token pelo cabeçalho da requisição 
      //(não será mais necessário passar o id por path parameters)
      //Editar os dados do usuário, caso o token seja válido, 
      //ou devolver um erro, caso contrário 


      const { name, nickname } = req.body
      const token = req.headers.authorization as string

      if (!name && !nickname) {
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


      await connection('to_do_list_users')
         .update({ name, nickname })
         .where({ id: tokenData.id })

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}