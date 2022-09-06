import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from 'dotenv'

dotenv.config()

// EXEMPLO 2

// Crie uma classe Authenticator, contendo os métodos generateToken e
// getTokenData, para implementar, respectivamente, 
// os métodos sign e verify do jwt.

export default class Authenticator {
    generateToken = (payload: authenticationData) => {
       return jwt.sign(
            payload,
            process.env.JWT_KEY as string, 
            {
                expiresIn: "5h"
            }
        )
    }

    getTokenData = (token: string) => {
        const tokenData = jwt.verify(
            token,  process.env.JWT_KEY as string, 
        )

        return tokenData
    }
}