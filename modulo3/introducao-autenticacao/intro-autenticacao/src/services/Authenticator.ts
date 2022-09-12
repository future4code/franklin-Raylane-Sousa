import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from 'dotenv'

dotenv.config()

export default class Authenticator {
    static getData(token: string) {
        throw new Error("Method not implemented.")
    }
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
            token, process.env.JWT_KEY as string,
        )

        return tokenData
    }

    getData = (token: string): authenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
        };
        return result;
    };
}