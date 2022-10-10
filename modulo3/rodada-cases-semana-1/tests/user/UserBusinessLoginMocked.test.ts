import { UserBusiness } from "../../src/business/UserBusiness"
import { IGetUsersInputDBDTO, IGetUsersInputDTO, ISLoginInputDTO, USER_ROLES } from "../../src/models/User"
import { UserDatabaseMock } from "../mocks/database/UserDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"

describe("Testing 'UserBusiness' Login cases", () => {
    const userBusiness = new UserBusiness (
        new UserDatabaseMock(),
        new AuthenticatorMock(),
        new IdGeneratorMock(),
        new HashManagerMock()
    )

    test("Of sucess should return a token", async () => {
        const input: ISLoginInputDTO = {
            email: "jane@email.com",
            password: "bananinha"
        }

        const result = await userBusiness.login(input)

        expect(result.token).toEqual("token-jane")
    })

    test("When email is missing should return 'Paramerters missing' message", async () => {

     expect.assertions(1)

       try{ 
        const input: ISLoginInputDTO = {
            email: "",
            password: "bananinha"
        }

        await userBusiness.login(input)
    } catch (error){
        if (error instanceof Error) 
        expect(error.message).toEqual("Parameters missing")
        }
    })

    test("When password is missing should return 'Paramerters missing' message", async () => {

        expect.assertions(1)
   
          try{ 
           const input: ISLoginInputDTO = {
               email: "jane@email.com",
               password: ""
           }
   
           await userBusiness.login(input)
       } catch (error){
           if (error instanceof Error)
           expect(error.message).toEqual("Parameters missing")
           }
       })

       test("When email is incorrect should return 'Email not registered' message", async () => {

        expect.assertions(1)
   
          try{ 
           const input: ISLoginInputDTO = {
               email: "janete@email.com",
               password: "bananinha"
           }
   
           await userBusiness.login(input)
       } catch (error){
           if (error instanceof Error)
           expect(error.message).toEqual("Email not registered")
           }
       }) 

       test("When password is incorrect should return 'Incorrect password' message", async () => {
        expect.assertions(1)
   
          try{ 
           const input: ISLoginInputDTO = {
               email: "jane@email.com",
               password: "xsdsa"
           }
   
           await userBusiness.login(input)
       } catch (error){
           if (error instanceof Error)
           expect(error.message).toEqual("Incorrect password")
           }
       })

       test("should return users list", async () => {
        const input: IGetUsersInputDTO  = {
            token: "token-jane",
            search: "*",
            order: "desc",
            sort: "5", 
            limit: "100", 
            page: "1"
        }

        const result = await userBusiness.getUsers(input)

        expect(result).toEqual([
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
        ])
    })


})