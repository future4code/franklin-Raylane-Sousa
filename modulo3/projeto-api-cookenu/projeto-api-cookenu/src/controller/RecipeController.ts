import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";

export class RecipeController {
    constructor (
        protected recipeBusiness: RecipeBusiness
    ) {}

    public createRecipe = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization,
                title: req.body.title,
                description: req.body.description,
                prepare: req.body.prepare
            }

            const response = await this.recipeBusiness.createRecipe(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error" })
        }
    }


    public getAllRecipes = async (req: Request, res: Response) => {
        try {
            const input: any = {
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const response = await this.recipeBusiness.getAllRecipes(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error" })
        }
    }

  
    public getRecipeByID = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization, 
                id:  req.params.id
            }

            const response = await this.recipeBusiness.getRecipeById(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error" })
        }
    }

    public deleteRecipe = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const response = await this.recipeBusiness.deleteRecipe(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error"})
        }
    }

     public editRecipe = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization,
                id: req.params.id,
                title: req.body.title,
                description: req.body.description,
                prepare: req.body.prepare
            }

            const response = await this.recipeBusiness.editRecipe(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error" })
        }
    }
}