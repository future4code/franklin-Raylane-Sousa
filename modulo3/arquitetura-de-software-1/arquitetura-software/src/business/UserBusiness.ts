import { BaseDatabase } from "../database/BaseDatabase"
import UserDatabase from "../database/UserDatabase"
import { User, USER_ROLES } from "../model/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
    public signup = async (input: any) => {
//desestrutucção
       const {name, email, password} = input

        if (!name || typeof name !== "string") {
            throw new Error("Parâmetro 'name' inválido")
        }

        if (!email || typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!email.includes('@')) {
            throw new Error("Email inválido")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword
        )

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            token
        }
        return response
    }


    public login = async (input: any) => {

               const {email, password} = input
        
                if (!email || typeof email !== "string") {
                    throw new Error("Parâmetro 'email' inválido")
                }
        
                if (!email.includes('@')) {
                    throw new Error("Email inválido")
                }
                
                const userDB = new UserDatabase()
                const user = await userDB.getByEmail(email)

                const hashManager = new HashManager()
                const passwordIsCorrect: boolean = await hashManager.compare(password, input.password)
                
                if(!passwordIsCorrect){
                    throw new Error("Email ou senha incorreta")
                }
        
                const payload: ITokenPayload = {
                    id: user.getId(),
                    role: user.getRole()
                }
        
                const authenticator = new Authenticator()
                const token = authenticator.generateToken(payload)
        
                const response = {
                    token
                }
                return response
            }

}