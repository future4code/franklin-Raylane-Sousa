import { BaseDatabase } from "../../../src/database/BaseDatabase"
import { IGetUsersInputDBDTO, IGetUsersInputDTO, IUserDB, User, USER_ROLES } from "../../../src/models/User"

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "AmaroUser"

    public findByEmail = async (email: string): Promise<IUserDB| any> => {
        switch(email) {
            case "jane@email.com":
            return {
                id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
                name: "Jane",
                email: "jane@email.com",
                password:"$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC",
                role: USER_ROLES.ADMIN
            }
        }
    }

    public createUser = async (user: User)=> {
        
    }

    public getUsers = async (input:IGetUsersInputDBDTO): Promise<IUserDB| any>  => {

      switch(input) {  
        case({search: "*",order: "desc",sort: "5", limit: 100, offset: 1}):
      return [
        {
            id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
            name: "Jane",
            email: "fulano@gmail.com"
        },
        {
            id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
            name: "Fulano",
            email: "jane@email.com"
        }
      ]
    }
}

    public findById = async (id: string):Promise<IUserDB | undefined>  => {
        switch(id) {
            case "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b":
            return {
                id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
                name: "Jane",
                email: "jane@email.com",
                password:"$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC",
                role: USER_ROLES.ADMIN
            }
        default: 
        return undefined
        }
        
    }

    public deleteUser = async (id: string) => {
        
    }

    public editUser = async (user: User) => {
        
    }
}