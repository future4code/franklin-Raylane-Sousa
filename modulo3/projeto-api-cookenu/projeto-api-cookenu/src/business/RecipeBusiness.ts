import { RecipeDatabase } from "../database/RecipeDataBase"
import { UserCookDatabase } from "../database/UserCookDatabase"
import { InGetRecipesDBDTO, InGetRecipesDTO, Recipe } from "../models/Recipe"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"


export class RecipeBusiness {
    constructor(
        protected recipeDatabase: RecipeDatabase,
        protected idGenerator: IdGenerator,
        protected hashManager: HashManager,
        protected authenticator: Authenticator
    ) { }

    public createRecipe = async (input: any) => {
        const title = input.title
        const description = input.description
        const prepare = input.prepare
        const created = input.created

        if (!title || !description || !prepare) {
            throw new Error("One or more parameters doesn't exist")
        }

        if (typeof title !== "string" || title.length < 5) {
            throw new Error("Invalid parameter 'title'!")
        }

        if (typeof description !== "string" || description.length < 3) {
            throw new Error("Invalid parameter 'description'!")
        }

        if (typeof prepare !== "string" || prepare.length < 3) {
            throw new Error("Invalid parameter 'prepare'")
        }


        const id = this.idGenerator.generate()

        const recipe = new Recipe(
            id,
            title,
            description,
            prepare,
            created
        )
        

        await this.recipeDatabase.createRecipe(recipe)

        
        const response: any = {
            message: "Recipe created sucessfully!",
            id,
            title,
            description,
            prepare,
            created
            
        }

        return response
    }


    public getAllRecipes = async (input: any) => {
        const search = input.search || ""
        const order = input.order || "title"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1

        const offset = limit * (page - 1)

        const getRecipesInputDB: InGetRecipesDBDTO = {
            search,
            order,
            sort,
            limit,
            offset
        }

        const recipeDatabase = new RecipeDatabase()
        const recipeDB = await recipeDatabase.getRecipes(getRecipesInputDB)

        const allrecipes = recipeDB.map(recipeDB => {
            const recipe = new Recipe(
                recipeDB.id,
                recipeDB.title,
                recipeDB.description,
                recipeDB.prepare,
                recipeDB.created
            )

            const userResponse: any = {
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                prepare: recipe.getPrepareMode(),
                created: recipe.getCreated()
            }

            return userResponse
        })

        const response: any = {
            allrecipes
        }

        return response
    }


    public getRecipeById = async (input: any) => {

        const id = input.id

        const recipe = await this.recipeDatabase.findById(id)

        if (!id) {
            throw new Error("Recipe doesn't exist!")
        }

        const Response = {
            id: recipe.id,
            name: recipe.title,
            description: recipe.description,
            prepare: recipe.description,
            created: recipe.description
        }

        return Response
    }

}