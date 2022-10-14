export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface IUserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export interface IUserFollowDB {
    id: string,
    id_followed: string
}


export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ) { }

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getEmail = () => {
        return this.email
    }

    public getPassword = () => {
        return this.password
    }

    public getRole = () => {
        return this.role
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setEmail = (newEmail: string) => {
        this.email = newEmail
    }

    public setPassword = (newPassword: string) => {
        this.password = newPassword
    }

    public setRole = (newRole: USER_ROLES) => {
        this.role = newRole
    }
}

export interface InSignupDTO {
    name: string,
    email: string,
    password: string
}

export interface OutSignupDTO {
    message: string,
    token: string
}

export interface InLoginDTO {
    email: string,
    password: string
}

export interface InGetUsersDTO {
    token: string | undefined,
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface InGetUsersDBDTO {
    search: string,
    order: string,
    sort: string,
    limit: number,
    offset: number
}

export class UserFollow {
    constructor(
        private id: string,
        private id_followed: string
    ) { }

    public getId = () => {
        return this.id
    }

    public getIdFollowed = () => {
        return this.id_followed
    }
    
    public setId = (newId: string) => {
        this.id = newId
    }

    public setIdFollowed = (new_Id: string) => {
         this.id_followed = new_Id
    }

   

}