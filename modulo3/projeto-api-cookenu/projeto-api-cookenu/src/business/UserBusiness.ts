import { UserCookDatabase } from "../database/UserCookDatabase"
import { InGetUsersDBDTO, InGetUsersDTO, InLoginDTO, InSignupDTO, OutSignupDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"


export class UserBusiness {
    constructor(
        protected userDatabase: UserCookDatabase,
        protected idGenerator: IdGenerator,
        protected hashManager: HashManager,
        protected authenticator: Authenticator
    ){}

    public signup = async (input: InSignupDTO) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || !email || !password) {
            throw new Error("One or more parameters doesn't exist")
        }

        if (typeof name !== "string" || name.length < 3) {
            throw new Error("Invalid parameter 'name'!")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Invalid parameter 'email'!")
        }

        if (typeof password !== "string" || password.length < 6) {
            throw new Error("Invalid parameter 'password'!")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if (userDB) {
            throw new Error("Email already exists")
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response: OutSignupDTO = {
            message: "Registration created successfully",
            token
        }

        return response
    }

    public login = async (input: InLoginDTO) => {
        const email = input.email
        const password = input.password

        if (!email || !password) {
            throw new Error("One or more parameters doesn't exist")
        }

        if (typeof email !== "string" || email.length < 3) {
            throw new Error("Invalid parameter 'email'!")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Invalid parameter 'email'!")
        }

        if (typeof password !== "string" || password.length < 3) {
            throw new Error("Invalid parameter 'password'!")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if (!userDB) {
            throw new Error("Email doesn't exists")
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())

        if (!isPasswordCorrect) {
            throw new Error("Incorrect password")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            message: "Login successfully",
            token
        }

        return response
    }

    public getUsers = async (input: InGetUsersDTO) => {
        const token = input.token
        const search = input.search || ""
        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        const offset = limit * (page - 1)

        if(!token) {
            throw new Error("Missing token")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Invalid Token!")
        }

        const getUsersInputDB: InGetUsersDBDTO = {
            search,
            order,
            sort,
            limit,
            offset
        }


        const usersDB = await this.userDatabase.getUsers(getUsersInputDB)

        const users = usersDB.map(userDB => {
            const user = new User(
                userDB.id,
                userDB.name,
                userDB.email,
                userDB.password,
                userDB.role
            )

            const userResponse: any = {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail()
            }

            return userResponse
        })

        const response: any = {
            users
        }

        return response
    }

    public deleteUser = async (input: any) => {
        const token = input.token
        const idToDelete = input.idToDelete

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Invalid or missing token")
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new Error("Only admins can delete users")
        }

        if (payload.id === idToDelete) {
            throw new Error("Unable to delete own account")
        }

        const userDB = await this.userDatabase.findById(idToDelete)

        if (!userDB) {
            throw new Error("User to be deleted not found")
        }

        await this.userDatabase.deleteUser(idToDelete)

        const response = {
            message: "Deleted successfully "
        }

        return response
    }

    public editUser = async (input: any) => {
        const {
            token,
            idToEdit,
            email,
            name,
            password
        } = input

        if (!token) {
            throw new Error("Missing token")
        }

        if (!email && !name && !password) {
            throw new Error("One or more parameters doesn't exist")
        }

      
        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Invalid token!")
        }

        if (email && typeof email !== "string") {
            throw new Error("Invalid parameter 'email'!")
        }

        if (email && !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Invalid parameter 'email'!")
        }

        if (name && typeof name !== "string") {
            throw new Error("Invalid parameter 'name'!")
        }


        if (password && typeof password !== "string") {
            throw new Error("Invalid parameter 'password'!")
        }

        if (password && password.length < 6) {
            throw new Error("Invalid parameter 'password'!")
        }

        if (payload.role === USER_ROLES.NORMAL) {
            if (payload.id !== idToEdit) {
                throw new Error("Normal users can only edit their own account")
            }
        }

        const userDB = await this.userDatabase.findById(idToEdit)

        if (!userDB) {
            throw new Error("Account to be edited does not exist")
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        name && user.setName(name)
        email && user.setEmail(email)
        password && user.setPassword(password)

        await this.userDatabase.editUser(user)

        const response = {
            message: "Update done successfully"
        }

        return response
    }

    public getYourProfile = async (input: any) => {

        const token = input.token
      
        if(!token) {
            throw new Error("Invalid token!")
        }

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Invalid token!")
        }

        const user = await this.userDatabase.findById(payload.id)

            const Response = {
                id: user.id,
                name: user.name,
                email: user.email
            }

            return Response
        }

        public getUserById = async (input: any) => {

            const token = input.token
            const id = input.id
          
            if(!token) {
                throw new Error("Invalid token!")
            }
    
            const payload = this.authenticator.getTokenPayload(token)
    
            if (!payload) {
                throw new Error("Invalid token!")
            }
    
            const user = await this.userDatabase.findById(id)

            if (!id) {
                throw new Error("The user doesn't exist!")
            }
    
                const Response = {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
    
                return Response
            }

            public followUserById = async (input: any) => {
                
            }

}