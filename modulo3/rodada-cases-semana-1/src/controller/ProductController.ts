import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { CreateInputDTO, ProductsInputDTO } from "../models/Product";

export class ProductController {
    constructor(
        protected productBusiness: ProductBusiness
    ) {}

    public createProduct = async (req: Request, res: Response) => {
        try {
            const input: CreateInputDTO = {
                token: req.headers.authorization as string,
                id: req.body.id,
                name: req.body.name,
                tag_id: req.body.tag_id
            }

            const response = await this.productBusiness.createProduct(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "An unexpected error occurred" })
        }
    }

    public getProductById = async (req: Request, res: Response) => {
        try {
            const input: any = {
                id: req.params.id
            }

            const response = await this.productBusiness.getProductById(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "An unexpected error occurred" })
        }
    }

    public getAllProducts = async (req: Request, res: Response) => {
        try {
            const input: ProductsInputDTO = {
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const response = await this.productBusiness.getAllProducts(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "An unexpected error occurred" })
        }
    }

    public getProductsByTag = async (req: Request, res: Response) => {
        try {
            const input: any = req.query.tag as string
            const response = await this.productBusiness.getProductsByTag(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "An unexpected error occurred" })
        }
    }

    public getAllTags = async (req: Request, res: Response) => {
        try {
            const input: ProductsInputDTO = {
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const response = await this.productBusiness.getAllTags(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "An unexpected error occurred" })
        }
    }

   
}