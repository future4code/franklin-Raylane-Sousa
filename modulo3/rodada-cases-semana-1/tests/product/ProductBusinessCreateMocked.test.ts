import { ProductBusiness } from "../../src/business/ProductBusiness"
import { CreateInputDTO } from "../../src/models/Product"
import { ProductsDatabaseMock } from "../mocks/database/ProductDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"

describe("Testing 'ProductBusiness', cases of creating products", () => {
    const productBusiness = new ProductBusiness(
        new ProductsDatabaseMock(),
        new AuthenticatorMock()
    )

    it("Case of sucess", async() => {
        const newProduct: CreateInputDTO = {
            token: "token-jane",
            id: "20",
            name: "CAMISA BOLO BRANCA",
            tag_id: "02"
        }

        const result = await productBusiness.createProduct(newProduct)
        expect(result.message).toEqual("Product registration created successfully")

    })

    it("When token is missing", async() => {
    expect.assertions(1)

        try {
            const newProduct: CreateInputDTO = {
            token: "",
            id: "20",
            name: "CAMISA BOLO BRANCA",
            tag_id: "02"
        }

        const result = await productBusiness.createProduct(newProduct)
    } catch (error) {
        if (error instanceof Error) {
        expect(error.message).toEqual("Missing token")
        }
    }

    })

    it("When token is incorrect", async() => {
    expect.assertions(1)

    try {
        const newProduct: CreateInputDTO = {
            token: "to-jane",
            id: "20",
            name: "CAMISA BOLO BRANCA",
            tag_id: "02"
        }

        const result = await productBusiness.createProduct(newProduct)
    } catch (error) {
        if (error instanceof Error) {
        expect(error.message).toEqual("Invalid token")
    }
    }
    })

    it("When id is missing", async() => {
        expect.assertions(1)
        
        try {
            const newProduct: CreateInputDTO = {
                token: "token-jane",
                id: "",
                name: "CAMISA BOLO BRANCA",
                tag_id: "02"
            }
    
            await productBusiness.createProduct(newProduct)
        } catch (error) {
            if (error instanceof Error) {
            expect(error.message).toEqual("One or more parameters missing")
        }
        }
    })

    it("When id exists", async() => {
        expect.assertions(1)
        
        try {
            const newProduct: CreateInputDTO = {
                token: "token-jane",
                id: "011",
                name: "CAMISA BOLO BRANCA",
                tag_id: "02"
            }
    
            await productBusiness.createProduct(newProduct)
        } catch (error) {
            if (error instanceof Error) {
            expect(error.message).toEqual("Product 'Id' already exists")
        }
        }
    })

    it("When name is invalid ", async() => {
        expect.assertions(1)
        
        try {
            const newProduct: CreateInputDTO = {
                token: "token-jane",
                id: "020",
                name: "CAM",
                tag_id: "02"
            }
    
            await productBusiness.createProduct(newProduct)
        } catch (error) {
            if (error instanceof Error) {
            expect(error.message).toEqual("Invalid 'name' parameter")
        }
        }
    })
})