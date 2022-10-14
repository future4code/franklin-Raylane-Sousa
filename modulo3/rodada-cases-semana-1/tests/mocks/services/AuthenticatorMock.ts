import { USER_ROLES } from "../../../src/models/User"
import { ITokenPayload } from "../../../src/services/Authenticator"

export class AuthenticatorMock {
    generateToken = (payload: ITokenPayload): string => {
        switch(payload.id){
            case "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b":
                return "token-jane"
            default:
                return "token-mock"

        }
    }

    getTokenPayload = (token: string): ITokenPayload | null => {
     switch(token){
        case "token-mock":
            return {
                id: "id-mock",
                role: USER_ROLES.NORMAL
            }
        
        case "token-jane":
            return {
                id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
                role: USER_ROLES.ADMIN
            }

        default:
            return null
     }
      
    }
}