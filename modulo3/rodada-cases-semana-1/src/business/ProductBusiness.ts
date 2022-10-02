import { ProductsDatabase } from "../database/ProductsDatabase"
import { CreateInputDTO, CreateOutputDTO, Product, ProductsInputDBDTO, ProductsInputDTO, Tag } from "../models/Product"
import { Authenticator } from "../services/Authenticator"

export class ProductBusiness {
    constructor(
        protected productDatabase: ProductsDatabase,
        protected authenticator: Authenticator
    ) {}

    public createProduct = async (input: CreateInputDTO) => {
        const token = input.token
        const id = input.id
        const name = input.name
        const tag_id = input.tag_id

        if (!token) {
            throw new Error("Missing token")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Invalid or missing token")
        }

        if (!name || !tag_id) {
            throw new Error("One or more parameters missing")
        }

        if (typeof name !== "string" || name.length < 3) {
            throw new Error("Invalid 'name' parameter")
        }

       const idP = await this.productDatabase.findById(id)

        if (idP) {
            throw new Error("Product 'Id' already exists")
        }

        const product = new Product(
            id,
            name,
            tag_id
        )

        await this.productDatabase.createProduct(product)

        const response: CreateOutputDTO = {
            message: "Product registration successful",
        }

        return response
    }

    public getProductById = async (input: any) => {

        const id = input.id

        const productDB = await this.productDatabase.findById(id)

        if (!productDB) {
            throw new Error("Product 'id' not registered!")
        }

        const pr =  await this.productDatabase.findById(id)

        const response = {
            products: {
                id: pr.id,
                name: pr.name,
                tag: pr.tag_id
            }
        }

        return response
    }

    public getAllProducts = async (input: ProductsInputDTO) => {
        const search = input.search || ""
        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1

        const offset = limit * (page - 1)

    

        const getProducts: ProductsInputDBDTO = {
            search,
            order,
            sort,
            limit,
            offset
        }

        const productDB = await this.productDatabase.getAllProducts(getProducts)

        const products = productDB.map(pr => {
            const prod = new Product(
                pr.id,
                pr.name,
                pr.tag_id
            )

            const Response: any = {
                id: prod.getId(),
                name: prod.getName(),
                tag_id: prod.getTag()
            }

            return Response
        })

        const response: any = {
            products
        }

        return response
    }

    public getProductsByTag = async (input: any) => {

        const tag = input
    
        const result = await this.productDatabase.getProductsNameTag(tag)

        return result
    }

    public getAllTags = async (input: ProductsInputDTO) => {
        const search = input.search || ""
        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1

        const offset = limit * (page - 1)

    

        const getTags: ProductsInputDBDTO = {
            search,
            order,
            sort,
            limit,
            offset
        }

        const productDB = await this.productDatabase.getAllTags(getTags)

        const tags = productDB.map(pr => {
            const prod = new Tag(
                pr.id,
                pr.name
            )

            const Response: any = {
                id: prod.getId(),
                name: prod.getName()
            }

            return Response
        })

        const response: any = {
            tags
        }

        return response
    }

}