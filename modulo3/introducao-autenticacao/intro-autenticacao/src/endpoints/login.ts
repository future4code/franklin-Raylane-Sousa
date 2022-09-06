import { Request, Response } from "express";
import { connect } from "http2";
import connection from "../connection";
import Authenticator from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";

export default async function login(req: Request, res: Response): Promise<void> {
    try {

        // Exemplo 4
        // Crie um endpoint de login de usuários. 
        // Os requisitos são:
        // Caminho: "/user/login"
        // Método: POST
        // Informar email e senha 
        // Devolver um token de autenticação, 
        // caso as credenciais sejam válidas, ou uma mensagem de erro, caso contrário 


        const {email, password} = req.body;

        if(!email || !password) {
            throw new Error("Por favor, preencha email e senha")
        }

        const [user] = await connection("to_do_list_users").where({email})

        if(!user || user.password !== password) {
            throw new Error("Credenciais de acesso são inválidas!")
        }

        const authenticator = new Authenticator()

        const payload: authenticationData = {
            id: user.id
        }

        const token = authenticator.generateToken(payload)

        res.status(201).send({token})

    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}