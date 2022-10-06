import { UserBusiness } from "../../src/business/UserBusiness"
import { ISLoginInputDTO } from "../../src/models/User"
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


})