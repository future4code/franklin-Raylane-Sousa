import { UserBusiness } from "../../src/business/UserBusiness"
import { ISignupInputDTO } from "../../src/models/User"
import { UserDatabaseMock } from "../mocks/database/UserDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"

describe("Testing 'UserBusiness' Signup cases", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new AuthenticatorMock(),
        new IdGeneratorMock(),
        new HashManagerMock()
    )

    it("Case of sucess", async () => {
        const input: ISignupInputDTO = {
            name: "Raylane",
            email: "ray@email.com",
            password: "thisiswhy"
        }

        const result = await userBusiness.signup(input)

        expect(result.token).toEqual("token-mock")
    })

    it("when one of the parameters is empty", async () => {
        expect.assertions(1)
        try {
            const input: ISignupInputDTO = {
                name: "",
                email: "ray@email.com",
                password: "thisiswhy"
            }

            await userBusiness.signup(input)
        } catch (error) {
            if (error instanceof Error) {
                expect(error.message).toEqual("Parameters missing")
            }
        }
    })

    it("when email format is incorrect", async () => {
        expect.assertions(1)
        try {
            const input: ISignupInputDTO = {
                name: "Raylane",
                email: "rayemailcom",
                password: "thisiswhy"
            }

            await userBusiness.signup(input)
        } catch (error) {
            if (error instanceof Error)
                expect(error.message).toEqual("Invalid parameter 'email'")
        }
    })

    it("when email exists", async () => {
        expect.assertions(1)
        try {
            const input: ISignupInputDTO = {
                name: "Raylane",
                email: "jane@email.com",
                password: "thisiswhy"
            }

            await userBusiness.signup(input)
        } catch (error) {
            if (error instanceof Error)
                expect(error.message).toEqual("The email already exists")
        }
    })

    it("when password is invalid parameter", async () => {
        expect.assertions(1)
        try {
            const input: ISignupInputDTO = {
                name: "Oliver",
                email: "oliver@email.com",
                password: '4d5'
            }

            await userBusiness.signup(input)
        } catch (error) {
            if (error instanceof Error)
                expect(error.message).toEqual("Invalid parameter 'password'")
        }
    })


})