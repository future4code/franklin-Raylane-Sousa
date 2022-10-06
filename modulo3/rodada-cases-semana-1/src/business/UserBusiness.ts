import { UserDatabase } from "../database/UserDatabase"
import { IGetUsersInputDBDTO, IGetUsersInputDTO, ISignupInputDTO, ISignupOutputDTO, ISLoginInputDTO, IUserDB, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        protected userDatabase: UserDatabase,
        protected authenticator: Authenticator,
        protected idGenerator: IdGenerator,
        protected hashManager: HashManager
    ) {}

    public signup = async (input: ISignupInputDTO) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || !email || !password) {
            throw new Error("Parameters missing")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Invalid parameter 'email'")
        }

        if (typeof password !== "string" || password.length <= 4) {
            throw new Error("Invalid parameter 'password'")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if (userDB) {
            throw new Error("The email already exists")
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

        const response: ISignupOutputDTO = {
            token
        }

        return response
    }

    public login = async (input: ISLoginInputDTO) => {
        const email = input.email
        const password = input.password

        if (!email || !password) {
            throw new Error("Parameters missing")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if (!userDB) {
            throw new Error("Email not registered")
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

        const token = this.authenticator.generateToken(payload)

        const response = {
            token
        }

        return response
    }

    public getUsers = async (input: IGetUsersInputDTO) => {
        const token = input.token
        const search = input.search || ""
        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1

        const offset = limit * (page - 1)

        if (!token) {
            throw new Error("Missing token")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Invalid token")
        }

        const getUsersInputDB: IGetUsersInputDBDTO = {
            search,
            order,
            sort,
            limit,
            offset
        }

        const usersDB: IUserDB[] = await this.userDatabase.getUsers(getUsersInputDB)

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
            message: "User successfully deleted"
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
            throw new Error("Missing parameters")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("missing parameters")
        }

        if (email && typeof email !== "string") {
            throw new Error("Invalid parameter 'email'")
        }

        if (email && !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Invalid parameter 'email'")
        }

        if (name && typeof name !== "string") {
            throw new Error("Invalid 'name' parameter ")
        }

        if (name && name.length < 3) {
            throw new Error("Invalid 'name' parameter")
        }

        if (password && typeof password !== "string") {
            throw new Error("Invalid 'password' parameter")
        }

        if (password && password.length < 6) {
            throw new Error("Invalid 'password' parameter")
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
            message: "Editing done successfully"
        }

        return response
    }
}