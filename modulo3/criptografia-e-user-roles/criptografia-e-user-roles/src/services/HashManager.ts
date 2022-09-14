import { compare, genSalt, hash } from "bcryptjs"

export class HashManager {
//metodo que gera o hash
   public hash = async (password:string) => {
        const rounds = Number('12')
        const salt = await genSalt(rounds)
        const result = await hash(password, salt)
        return result   
    }
//metodo que compara o hash
    public compare = async (password: string, hash: string) => {
        const result = await compare(password, hash)
        return result
    }
}