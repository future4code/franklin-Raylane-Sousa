import {Router} from "express"
import { RecipeBusiness } from "../business/RecipeBusiness"
import { RecipeController } from "../controller/RecipeController"
import { RecipeDatabase } from "../database/RecipeDataBase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export const recipeRouter = Router()

const recipeController = new RecipeController(
    new RecipeBusiness(
        new RecipeDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

recipeRouter.get("/feed", recipeController.getAllRecipes)
recipeRouter.get("/:id", recipeController.getRecipeByID)
recipeRouter.post("/create", recipeController.createRecipe)
recipeRouter.put("/:id", recipeController.editRecipe)
recipeRouter.delete("/:id", recipeController.deleteRecipe)

